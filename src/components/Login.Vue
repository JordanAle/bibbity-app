<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useLoginStore } from '../stores/loginStore'

// Props
const props = defineProps({})
// Store
const loginStore = useLoginStore()
// Data

// Methods
</script>

<template>
  <div class="container">
    <div class="inner_container">
      <h1>Login to Bibbity Books</h1>
      <div class="text_container">
        <input class="text_input" type="text" name="email" id="email" placeholder="email" />
        <input
          class="text_input"
          type="text"
          name="password"
          id="password"
          placeholder="password"
        />
      </div>
      <div class="button_container">
        <input type="button" value="Login" />
        <input type="button" value="Forgot Password" />
      </div>
      <div class="google_login_container">
        <div class="google_login" @click="loginStore.signInWithGoogle">Login with Google</div>
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
  border: 1px solid #868581;
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
}
.google_login:hover {
  box-shadow: 0px 0px 15px -8px #000000;
  background-color: rgb(35, 77, 200);
  transition: 0.1s;
}
</style>
