<script setup>
import { ref, computed, toRaw } from 'vue'
import { useLoginStore } from '@/stores/loginStore'
import axios from 'axios'

//// Store
const loginStore = useLoginStore()

const props = defineProps({})

//// Data
// form behavior vars
const is_edit_mode = ref(false)

// get user info
const originalUser = loginStore.user

//set up checkboxes
let is_author = ref(loginStore.user.is_author)
let is_artist = ref(loginStore.user.is_artist)
let username = ref(loginStore.user.username)
var name = ref(loginStore.user.name)
let email = ref(loginStore.user.email)
let about = ref(loginStore.user.about)

// Methods
function startEdit() {
  is_edit_mode.value = true
}

function revert_edits() {
  ;({ username, name, email, about } = loginStore.user)
  is_author.value = loginStore.user.is_author
  is_artist.value = loginStore.user.is_artist
  console.log('edits reverted: ', toRaw(originalUser))
  is_edit_mode.value = false
}

async function submit() {
  // TODO: Emit a change event to sync local user obj with DB user obj? Otherwise edits to user in different tab
  // TODO add a load screen
  console.log('trying to submit')
  try {
    // sync local data with server
    let updateObj = {}
    try {
      updateObj.username = username.value
    } catch (err) {
      try {
        updateObj.name = name.value
      } catch (err) {
        try {
          updateObj.email = email.value
        } catch (err) {
          try {
            updateObj.about = about.value
          } catch (err) {
            try {
              updateObj.is_author = is_author.value
            } catch (err) {
              try {
                updateObj.is_artist = is_artist.value
              } catch (err) {
                console.log('error getting a value from store: ' + err)
              }
            }
          }
        }
      }
    }

    await loginStore.updateUser(updateObj)

    // // close edit mode
    is_edit_mode.value = false

    // TODO resume on callback from server
  } catch (err) {
    console.log(err)
    alert("Couldn't save: " + err)
  }
}
// Computed
</script>

<template>
  <div class="detail_container">
    <!-- Profile Picture -->
    <div class="profile_picture_container">
      <img class="profile_picture" src="../assets/smiling_sloth.png" alt="Profile Picture" />
    </div>
    <div class="form_panel">
      <!-- Text Info -->
      <div class="text_info">
        <input v-if="is_edit_mode" type="text" v-model="name" placeholder="Name" />
        <h2 v-else class="name">{{ name }}</h2>
        <p class="username">{{ username }}</p>

        <textarea
          v-if="is_edit_mode"
          id="textarea"
          v-model="about"
          placeholder="About Me"
          cols="50"
          rows="10"
        ></textarea>
        <p v-else class="bio">{{ about }}</p>
      </div>

      <!-- Checkboxes -->
      <div class="checkbox_outter_container">
        <span>I am an...</span>
        <label class="checkbox_inner_container">
          <span class="title">Artist</span>
          <input
            type="checkbox"
            id="artist"
            v-model="is_artist"
            @input="is_artist = $event.target.checked"
            :disabled="!is_edit_mode"
          />
        </label>
        <label class="checkbox_inner_container">
          <span class="title">Author</span>
          <input
            type="checkbox"
            id="author"
            v-model="is_author"
            @input="is_author = $event.target.checked"
            :disabled="!is_edit_mode"
          />
        </label>
      </div>
      <!-- Submit/Edit Button -->
      <div class="buttons">
        <button v-if="is_edit_mode" @click="revert_edits">Cancel</button>

        <button v-if="is_edit_mode" @click="submit">Submit</button>
        <button v-else @click="startEdit">Edit Profile</button>
      </div>
    </div>
  </div>
  <div class="photo_container">
    <!-- Load photos -->
  </div>
</template>

<style scoped>
.detail_container {
  margin: 1em;
  display: flex;
}
.text_info {
}
input {
  border-radius: 0.4em;
  width: 100%;
  border: 2px solid #ffd500;
  padding: 0.5em;
}
textarea {
  border-radius: 0.4em;
  max-width: 100%;
  border: 2px solid #ffd500;
  padding: 0.5em;
  font-size: 1em;
}
.checkbox_outter_container {
  display: flex;
}
.checkbox_inner_container {
  display: flex;
  position: relative;
}
.checkbox_inner_container .title {
  margin-left: 1em;
  margin-right: 1em;
}
.checkbox_inner_container input {
  width: 5em;
}
.profile_picture_container {
  margin-right: 2em;
}
.profile_picture {
  max-width: 300px;
  max-height: 300px;
  border-radius: 1em;
}
button {
  margin: 0.5em;
  /* erase defaults */
  padding: 0.7em;
  /* margin: 0; */
  background-color: transparent;
  border-radius: 0.4em;
  background-color: rgba(65, 105, 225, 1);
  border: 0;
  color: white;
  font-size: 1em;
  font-weight: bold;
}
button:hover {
  box-shadow: 0px 0px 15px -8px #000000;
  background-color: rgb(35, 77, 200);
}
</style>
