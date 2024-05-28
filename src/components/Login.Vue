<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useLoginStore } from '../stores/loginStore'

// Props
const props = defineProps({})
// Store
const loginStore = useLoginStore()
// Data
let loginError = false
// Methods
const login = async () => {
  try {
    console.log('ran front end login')
    //Get username and password from user input
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    // Create login token
    const loginToken = {
      // TODO change these to text input value references
      username: username,
      password: password,
      scopes: 'login edit-user'
    }
    // TODO Encrypt token this with the server's public key probably

    // Get session token from server
    const sessionResponse = await axios.post('http://localhost:3000/auth/user', loginToken)
    const sessionToken = sessionResponse.data
    /**
     * NOTE, THIS IS THE STRUCTURE OF THE TOKEN
        payload: '',
        alg: '',
        enc: '',
        subject_user: req.body.username,
        subject_id: user._id,
        issuer: '',
        audience: '',
        expiration: Date.now() + MS_UNTIL_EXPIRATION
    **/

    // Get user info, including session token in the request
    const userResponse = await axios.get(`http://localhost:3000/users/username/${username}`, {
      headers: {
        authorization: JSON.stringify(sessionToken)
      },
      params: {
        username: username
      }
    })
    const userDetails = userResponse.data
    if (!userDetails) throw new Error('User details could not be fetched')

    // Store token and user information
    loginStore.setSessionToken(sessionToken)
    loginStore.setUser(userDetails)
    loginStore.login()
  } catch (err) {
    console.log('Error in login frontend: ', err)
  }
}
const createAccount = () => {
  loginStore.createAccount()
}
</script>

<template>
  <div class="container">
    <div class="inner_container">
      <h1>Login to Bibbity Books</h1>
      <div class="text_container">
        <div v-if="loginError" id="loginError">
          <span>There was an error with your email or password.</span>
        </div>
        <input
          class="text_input"
          type="text"
          name="username"
          id="username"
          placeholder="username"
        />
        <input
          class="text_input"
          type="text"
          name="password"
          id="password"
          placeholder="password"
        />
      </div>
      <div class="button_container">
        <input type="button" value="Login" @click="login" />
        <input type="button" value="Create Account" @click="createAccount" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  justify-content: center;
  vertical-align: middle;
}
.container h1 {
  display: grid;
  justify-content: center;
}
.text_input {
  width: 100%;
  border-radius: 0.4em;
  border: 2px solid #ffd500;
  padding: 0.5em;
  margin-bottom: 0.3em;
}
.text_input input:first-child {
  margin-bottom: 10em;
}
.button_container {
  display: flex;
  justify-content: center;
  margin-top: 0.5em;
}
.button_container input {
  /* erase defaults */
  padding: 0.5em;
  margin: 0;
  background-color: transparent;
  border-radius: 0.4em;
  background-color: rgba(65, 105, 225, 1);
  border: 0;
  color: white;
  font-size: 1em;
  font-weight: bold;
}
.button_container input:hover {
  box-shadow: 0px 0px 15px -8px #000000;
  background-color: rgb(35, 77, 200);
}
.button_container input:first-of-type {
  margin-right: 1em;
}
.google_login_container {
  margin-top: 2em;
}
.google_login {
  display: flex;
  justify-content: center;
  padding: 0.5em;
  background-color: rgba(65, 105, 225, 1);
  border-radius: 0.5em;
  color: white;
  font-size: 1em;
  font-weight: bold;
}
.google_login:hover {
  box-shadow: 0px 0px 15px -8px #000000;
  background-color: rgb(35, 77, 200);
  transition: 0.1s;
}
#loginError {
  display: flex;
  color: red;
  justify-content: center;
}
</style>
