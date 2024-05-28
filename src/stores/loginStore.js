import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'

export const useLoginStore = defineStore('login', () => {
  // References
  const user = ref(null)
  const sessionToken = ref(null)
  // Getters
  ///tbd

  // Actions
  function setUser(new_user) {
    user.value = new_user
  }

  function setSessionToken(token) {
    sessionToken.value = token
  }

  function createAccount() {
    router.push('/create-account')
  }

  function login() {
    router.push('/my-bibbity')
  }

  function logout() {
    setUser(null)
    setSessionToken(null)
    router.push('/')
  }

  async function refreshUser(username) {
    try {
      if (user.value != null && sessionToken.value != null) {
        const refreshResponse = await axios.get(
          `http://localhost:3000/users/username/${username}`,
          {
            headers: {
              authorization: JSON.stringify(sessionToken.value)
            }
          }
        )
        setUser(refreshResponse.data)
      }
    } catch (err) {
      console.log('error in refresh user: ', err)
    }
  }

  return { user, sessionToken, createAccount, login, logout, setUser, setSessionToken, refreshUser }
})
