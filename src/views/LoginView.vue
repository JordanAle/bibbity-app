<script setup>
import axios from 'axios'
import { googleSdkLoaded } from 'vue3-google-login'

// let saved = null
// const signInWithGoogle = () => {
//   googleSdkLoaded(google => {
//     google.accounts.oauth2
//       .initCodeClient({
//         client_id: '804315369798-sr8lacf17ekt9mv02bbni0hrqb8mu9iq.apps.googleusercontent.com',
//         scope: 'email profile openid',
//         // redirect_uri: 'https://v8jsdts7-8080.use.devtunnels.ms', // may be trhown out by recieving server depending on its protocol
//         callback: async response => {
//           if (response.code)
//             // fetchUserDataFrom(response.code)
//             console.log(response)
//         },
//       })
//       .requestCode()
//   })
// }
</script>

<template>
  <div class="container">
    <input type="text" name="username" id="username" placeholder="username" />
    <input type="text" name="password" id="password" placeholder="password" />
    <div class="button_container">
      <input type="button" value="Login" />
      <input type="button" value="Forgot Password" />
    </div>
    <div class="google_login_container">
      <div class="google_login" @click="signInWithGoogle">Continue with Google</div>
    </div>
  </div>
</template>

<style scoped>
.container {
}
</style>
