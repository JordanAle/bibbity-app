<script setup>
import { googleSdkLoaded } from "vue3-google-login"
const login = () => {
  googleSdkLoaded((google) => {
    google.accounts.oauth2.initCodeClient({
      client_id: '804315369798-sr8lacf17ekt9mv02bbni0hrqb8mu9iq.apps.googleusercontent.com',
      scope: 'email profile openid',
      callback: (response) => {
        console.log("Handle the response", response)
      }
    }).requestCode()
  })
}
</script>

<template></template>