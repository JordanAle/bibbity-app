<script setup lang='ts'>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'

import axios from 'axios'
import { googleSdkLoaded } from 'vue3-google-login'
// import TheWelcome from './components/TheWelcome.vue';
import simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css';
// import { useUserStore } from '/store/userStore'
// const userStore = useUserStore()
// const { clientId } = storeToRefs(userStore)
// const { fetchUserDataFrom } = userStore

// Methods
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

// const getSite = async () => {
//   axios.post(
//     'http://localhost:8080',
//     saved,
//     {
//       // headers: {
//       //   'Content-Type': 'application/json',
//       //   'Access-Control-Allow-Origin': '*'
//       // }
//     },
//   ).catch(error => {
//     console.log(error)
//   })
// }

// getSite()
</script>

<template>
    <NavBar/>
    <RouterView/>
  
  <!-- <simplebar>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
    <h1>SPACE</h1>
  </simplebar>  -->
  <!-- <div @click="signInWithGoogle">
    Continue with Google
  </div> -->
</template>


<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
