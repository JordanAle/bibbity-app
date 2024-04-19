<script setup>
import { RouterLink } from 'vue-router'
import Banner from '../components/Banner.vue'
</script>

<template>
  <div class="container">
    <div class="side_bar">
      <RouterLink to="/printing-press">
        <button>
          <span>Get Started</span>
        </button>
      </RouterLink>
      <RouterLink to="/about-us">
        <button id="learn_more">
          <span>Learn More</span>
        </button>
      </RouterLink>
    </div>
    <Banner />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: auto;
  /* flex-flow: row; */
}
.side_bar {
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  align-self: center;
  justify-items: right;
  /* margin: auto; */
  margin-left: 0 0 0 3em;
}
button {
  background-color: transparent;
  border: none;
  vertical-align: middle;

  background-color: #ffd04f;
  margin: 0.5em 0 0 1em;
  padding: 0.5em;
  font-size: 1.5em;
  border-radius: 1em;
  border: 1px;
  /* box-shadow: 0px 0px 60px 0.02px #000000; */
  box-shadow: 0px 0px 15px -10px #000000;
}
button:hover {
  box-shadow: none;
}
button {
  margin-right: -2em;
}
/* main {
  max-width: 80%;
} */
</style>
