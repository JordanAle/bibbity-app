import { ref, computed, toRaw } from 'vue'
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

  async function updateUser(user) {
    // save user updates to mongo
    console.log('updateUser session token', toRaw(this.sessionToken))
    await axios
      .put(`http://localhost:3000/users/${user.username}`, {
        headers: {
          authorization: JSON.stringify(toRaw(this.sessionToken))
        },
        username: user.username,
        name: user.name,
        email: user.email,
        about: user.about,
        is_author: user.is_author,
        is_artist: user.is_artist
      })
      .then((response) => {
        console.log('setting user data in store')
        setUser(response.data)
      })
      .catch((err) => {
        console.log(err)
        throw new Error("We couldn't apply your updates due to an error: " + err)
      })
  }
  return { user, sessionToken, createAccount, login, logout, setUser, setSessionToken, updateUser }
})
