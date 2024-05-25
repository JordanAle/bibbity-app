<script setup>
// Props
const props = defineProps({
  book_list: {
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
  <div class="card_main">
    <ul>
      <li v-for="book in props.book_list" :key="book.title">
        <div class="photo_context">
          <img class="card_main_photo" :src="strToURL('../assets/Book Covers/' + book.title)" />
          <div class="photo_details">
            <span class="title"></span>
            <span class="authors">{{ book.author }}</span>
            <span class="artists"></span>
            <span class="about"></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.card_main {
  max-width: 100%;
  /* justify-content: center; */
 
}
ul {
  display: grid;
  max-width:100%;

  grid-template-columns: 20% 20% 20% 20%;

  /* Undo Defaults */
  padding: 0;
  list-style: none;
}
.card_main_photo {
  /* margin: 0.2em; */
  max-width: 500px;
  max-height: 500px;
}
/* .card_main_photo img:hover:after {
  content: '';
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;

  background-color: white;
  padding-right: 5em;

  z-index: 10;
  box-shadow: 0px 0px 67px -45px #000000;
  transition: ease-out 0.2s;
} */
.photo_context:hover {
  max-width: 550px;
  max-height: 550px;
  position: absolute;
  padding: 0 0 3em 0;
  background-color: rgba(172, 172, 172, 0.322);

  box-shadow: 0px 0px 67px -45px #000000;
  transition: ease-out 0.1s;
}
.photo_context:hover > .photo_details {
  visibility: visible;
}
.photo_details {
  display: flex;
  justify-content: center;
  visibility: hidden;

  font-size: large;
  font-weight: bold;
}
</style>
