import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { googleSdkLoaded } from 'vue3-google-login'
import router from '@/router'

export const useLoginStore = defineStore('login', () => {
  const user = ref(null)
  const getUser = computed(() => user)
  const login = (userInfo) => {
    user.value = userInfo
  }
  const logout = () => {
    // TODO Handle any 3rd party sign out too
    user.value = null
    router.push('/')
  }
  // Google
  const signInWithGoogle = () => {
    googleSdkLoaded((google) => {
      google.accounts.oauth2
        .initCodeClient({
          client_id: '804315369798-sr8lacf17ekt9mv02bbni0hrqb8mu9iq.apps.googleusercontent.com',
          scope: 'email profile openid',
          // redirect_uri: 'https://v8jsdts7-8080.use.devtunnels.ms', // may be trhown out by recieving server depending on its protocol
          callback: async (response) => {
            console.log(response)
            if (response) login(response)
          }
        })
        .requestCode()
    })
  }

  return { user, getUser, login, logout, signInWithGoogle }
})
