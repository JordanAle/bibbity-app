<script setup>
import { RouterLink } from 'vue-router'
import { useLoginStore } from '../stores/loginStore'
import { computed } from 'vue'

// Props

// Store
const loginStore = useLoginStore()

// Data
let is_menu_open = false

// Method
const logout = () => {
  loginStore.logout()
}
const open_menu = () => {
  is_menu_open = true
  // change styles
}
const close_menu = () => {
  is_menu_open = false
  // change styles
}

//Computed
const is_logged_in = computed(() => loginStore.user)
</script>

<template>
  <div class="navbar">
    <div class="mobile_bar">
      <div class="nav_logo">
        <h1>
          <RouterLink class="logo_style" to="/">Bibbity </RouterLink>
        </h1>
      </div>
      <p class="menu_button">Menu</p>
    </div>
    <div class="nav_wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about-us">About</RouterLink>
        <RouterLink to="/bibliotheque">Bibliotheque</RouterLink>
        <RouterLink to="/printing-press">Printing Press</RouterLink>
        <RouterLink to="/browse-artists">Browse Artists</RouterLink>
        <RouterLink to="/my-bibbity">My Bibbity</RouterLink>
        <RouterLink v-if="is_logged_in === null" to="/my-bibbity">Login</RouterLink>
        <a v-else @click="logout">Logout</a>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.menu_button {
  display: none;
}
.navbar {
  /* background-color: #e7bf0f; */
  display: grid;
  grid-template-columns: 1fr 9fr;
  margin: 0 0 1rem 0;
  border-bottom: 0.5px solid var(--color-border);
  background-color: white;

  position: sticky; /* fixing the position takes it out of html flow - knows
                        nothing about where to locate itself except by browser
                        coordinates */
  left: 0; /* top left corner should start at leftmost spot */
  top: 0; /* top left corner should start at topmost spot */
  max-width: 100%; /* take up the full browser width */
  z-index: 200; /* high z index so other content scrolls underneath */
  height: auto; /* define height for content */
}
.nav_logo {
  font-size: 1.4em;
  margin: 0em 0em 0em 1em;
  color: rgba(65, 105, 225, 1);
}
.nav_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: .1em 0em .1em 0em;

  font-size: 18px;
  font-weight: bold;

  margin: 0 0 0 1rem;
  /* place-items: center; */
  /* flex-wrap: wrap; */
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav {
  display: flex;
  align-items: center;
}
nav a {
  padding: 0.1rem 1rem;
  margin-left: auto;
  text-align: center;
}
.logo_style {
  color: rgba(65, 105, 225, 1);
  text-shadow: 0px 0px 67px -45px #000000;
  /* text-shadow: 2px 2px 4px #000000; */
  /* -webkit-text-stroke-width: 0.1px;
        -webkit-text-stroke-color: black; */
}
@media screen and (max-width: 50px) {
  .navbar {
    font-size: 1em;
    display: block;
    position: fixed;
    width: 100vh;
    height: 100vh;

    background-color: #e7bf0f;

    /* background-color: white; */

    left: 0; /* top left corner should start at leftmost spot */
    top: 0; /* top left corner should start at topmost spot */
    width: 100vw; /* take up the full browser width */
    z-index: 200; /* high z index so other content scrolls underneath */
    height: 100px; /* define height for content */

    position: absolute;
  }
  .mobile_bar {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
  }
  .nav_logo {
    font-size: 0em;
    font-size: 1em;
    display: flex;
    margin: 0;
    padding: 0;
  }
  .nav_logo a {
    font-size: 1em;
    margin: 0;
    padding: 0;
  }
  .logo_style {
    text-shadow: none;
  }
  .menu_button {
    display: inline;
    font-size: 2em;
    font-weight: bold;
    justify-self: right;
    margin-right: 5em;
  }
  .nav_wrapper {
    /* the entire nav container */
    border: 0;
    /* border */
    font-size: 2em;
  }
}
</style>
