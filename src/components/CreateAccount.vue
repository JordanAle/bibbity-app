<script setup>
import axios from 'axios'
import { useLoginStore } from '@/stores/loginStore.js'
import { computed, defineProps, toRaw, ref } from 'vue'
import Section from '@/components/Section.vue'

// Stores
const loginStore = useLoginStore()

// Data
const username = ref(null)
const password = ref(null)
const is_artist = ref(false)
const is_author = ref(false)

// Methods
function isFormVerified() {
  return !show_password_error()
}

async function submit() {
  if (isFormVerified()) {
    try {
      //   console.log('submitting')
      const createResponse = await axios.post(`http://localhost:3000/users/`, {
        user: {
          username: username.value,
          password: password.value,
          is_artist: is_artist.value,
          is_author: is_author.value
        }
      })
      console.log('response: ', createResponse)
      if (!createResponse) {
        throw new Error("We couldn't create your account right now. Please refresh and try again.")
      } else {
        loginStore.login()
        // move to my bibbity page
      }
    } catch (err) {
      alert(err.message)
      console.log(err)
    }
  } else {
    alert(
      'Your account info needs some work. Make sure you have entered your username and password info correctly.'
    )
  }
}

function show_password_error() {
  // console.log('start')
  if (
    document.getElementById('password').value !== null &&
    document.getElementById('password').value !== '' &&
    document.getElementById('confirm').value !== null &&
    document.getElementById('confirm').value !== ''
  ) {
    if (document.getElementById('password').value !== document.getElementById('confirm').value) {
      // console.log('passwords are filled out, but no match')
      document.getElementById('password_error').innerHTML = "Your passwords don't match"
      document.getElementById('password_error').style.display = 'block'
      return true
    }
  }
  // console.log('passwords NOT both filled out or there is a match')
  document.getElementById('password_error').style.display = 'none'
  return false
}
// Computed
</script>

<template>
  <form action="" method="post">
    <div class="form">
      <h1>Create your account</h1>
      <div class="input_row">
        <label for="#username"> Username: </label>
        <input id="username" v-model="username" type="username" placeholder="Create a username" />
      </div>

      <div class="input_row">
        <label for="#password"> Password: </label>
        <input
          id="password"
          type="text"
          @input="show_password_error"
          placeholder="Create a password"
        />
      </div>

      <div class="input_row">
        <label for="#confirm"> Confirm Password: </label>
        <input
          id="confirm"
          type="text"
          v-model="password"
          @input="show_password_error"
          placeholder="Enter your password again"
        />
        <div id="password_error"></div>
      </div>

      <div class="check_row">
        <label> I'm an author: </label>
        <input id="author" v-model="is_author" type="checkbox" />
        <label> I'm an artist: </label>
        <input id="artist" v-model="is_artist" type="checkbox" />
      </div>
      <input id="submit" type="button" value="Create" @click="submit" />
    </div>
  </form>
</template>
<style>
form {
  width: 80%;
  margin: auto;
  font-size: 1em;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
}

h1 {
  text-align: center;
}
input[type='text'],
input[type='username'] {
  border: 2px solid #ffd500;
  border-radius: 0.4em;
}
.input_row {
  display: flex;
  text-align: right;
  position: relative;
}
.input_row label {
  width: 20%;
  margin: 0.5em 0.5em;
}
.input_row input {
  width: 80%;
  margin: 0.5em 0.5em;
}
#confirm {
  position: relative;
}
#password_error {
  display: none;
  color: red;
  background-color: white;

  position: absolute;
  top: 90%;
  left: 22%;
}
.check_row {
  display: inline-flex;
  text-align: left;

  width: 100%;
  justify-content: center;
  /* margin: 0 0 0.5em 20%; */
}
.check_row label {
  margin-right: 0.5em;
  margin-left: 0.5em;
}
.check_row input {
  display: flex;
  justify-content: left;
  margin-left: 0.5em;
}
#submit {
  justify-self: center;
  float: right;
  width: 30%;
  margin: 0 35% 0 4%;

  border: 0;
  padding: 0.5em;
  border-radius: 0.5em;

  background-color: rgb(35, 77, 200);
  color: white;
  font-size: 1em;
  font-weight: bold;
}
</style>
