<script setup>
import { RouterLink } from 'vue-router'
import Banner from '../components/Banner.vue'
</script>

<template>
  <div class="container">
    <div>
      <Banner />
    </div>
    <div class="button_bar">
      <RouterLink to="/printing-press">
        <button>
          Get Started
        </button>
      </RouterLink>
      <RouterLink to="/about-us">
        <button>
          Learn More
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: auto;
  flex-flow: column;
}
.button_bar {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  /* background-color: transparent; */
  border: none;
  vertical-align: middle;
  color: rgb(26, 26, 26);
  background-color: #ffd04f;
  /* margin: 0.5em 1.5rem 0 1rem; */
  padding: 0.5em;
  font-size: 2em;
  border-radius: .5em;
  border: 1px;
  box-shadow: 0px 0px 15px -10px #000000;
}
button:hover {
  box-shadow: none;
}
/* main {
  max-width: 80%;
} */
</style>
