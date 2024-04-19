<script setup>
// Props
const props = defineProps({
  photos: {
    type: Array
  }
})

// Methods

//// format Image URI
const strToURL = (str) => {
  return new URL(str, import.meta.url)
}
</script>

<template>
  <!-- Main -->
  <div class="card_main">
    <ul>
      <li v-for="uri in props.photos" :key="uri">
        <img class="card_main_photo" :src="strToURL(uri)" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.card_main {
  margin: 1em 0 1em 0;
  align-content: center;
}
ul {
  display: grid;
  flex-flow: row wrap-reverse;
  grid-template-columns: 20% 20% 20% 20%;

  /* Undo Defaults */
  padding: 0;
  list-style: none;
}
.card_main_photo {
  margin: 0.2em;
  max-width: 150px;
  max-height: 150px;
}
.card_main_photo img:hover:after {
  content: '';
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;

  z-index: 10;
  box-shadow: 0px 0px 67px -45px #000000;
  transition: ease-out 0.2s;
}
.card_main_photo:hover {
  max-width: 300px;
  max-height: 300px;
  position: absolute;

  box-shadow: 0px 0px 67px -45px #000000;
  transition: ease-out 0.2s;
}
</style>
