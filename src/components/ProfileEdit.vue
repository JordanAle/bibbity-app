<script setup>
import { ref } from 'vue'
const props = defineProps({
  profile_picture: {
    type: String,
    default: '../assets/smiling_sloth.png'
  },
  name: {
    type: String,
    default: 'Default Name Filler'
  },
  username: {
    type: String,
    default: 'Default_username_filler'
  },
  email: {
    type: String,
    default: 'Default_email_filler'
  },
  bio: {
    type: String,
    default:
      "This is the default bio for this section of the profile. Please imagine that there is real text here and that it's very compelling. This is the default bio for this section of the profile. Please imagine that there is real text here and that it's very compelling. This is the default bio for this section of the profile. Please imagine that there is real text here and that it's very compelling. This is the default bio for this section of the profile. Please imagine that there is real text here and that it's very compelling."
  }
})

// Data
const is_artist = ref(false) //change to collect from prop
const is_author = ref(false)
const is_disabled_artist = ref(false)
const is_disabled_author = ref(false)

const is_edit_mode = ref(false)

// Methods
function revert_edits() {
  is_edit_mode.value = false
}
function submit() {
  // TODO: Emit a change event to parent component to refresh props and send to database
  // TODO resume on callback from server
  is_edit_mode.value = false //close edit mode
}
// Watchers
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
        <input v-if="is_edit_mode" type="text" :value="props.name" />
        <h2 v-else class="name">{{ props.name }}</h2>
        <p class="username">{{ props.username }}</p>

        <textarea
          v-if="is_edit_mode"
          id="textarea"
          :value="props.bio"
          cols="50"
          rows="10"
        ></textarea>
        <p v-else class="bio">{{ props.bio }}</p>
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
            checked=""
            :disabled="!is_edit_mode"
          />
        </label>
        <label class="checkbox_inner_container">
          <span class="title">Author</span>
          <input
            type="checkbox"
            id="author"
            v-model="is_author"
            checked=""
            :disabled="!is_edit_mode"
          />
        </label>
      </div>
      <!-- Submit/Edit Button -->
      <div class="buttons">
        <button v-if="is_edit_mode" @click="revert_edits()">Cancel</button>

        <button v-if="is_edit_mode" @click="submit">Submit</button>
        <button v-else @click="is_edit_mode = true">Edit Profile</button>
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
