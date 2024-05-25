<script setup lang="js">
import Section from '../components/Section.vue'
import { ref, computed } from 'vue'
import SearchBar from '../components/SearchBar.vue'

// Data
let book_size = ref(null)
// Methods
function choose_size(size) {
  book_size.value = size
}
// Computed
const title_selected = computed(() => {
  if (document.getElementById('book_title')) {
    console.log(document.getElementById('book_title').value)
    return document.getElementById('book_title')
  }
  return null
})
</script>

<template>
  <div class="container">
    <Section section_title="Printing Press">
      <template #section_content>
        <div class="section_content">
          <p>The first step to publishing your magnum opus is selecting a book size</p>
          <div class="book_carosel">
            <div class="center_div">
              <div id="s" class="book_div">
                <img
                  src="../assets/Book Covers/Patina. By Nancy Schmidt.png"
                  @click="choose_size('Small')"
                  class="single_row_column"
                />
                <span @click="choose_size('Small')">BITE SIZED BIBBITY ($150)</span>
              </div>
              <div id="m" class="book_div">
                <img
                  src="../assets/Book Covers/Patina. By Nancy Schmidt.png"
                  @click="choose_size('Medium')"
                />
                <span @click="choose_size('Medium')">BIBBITY BOOK CLASSIC ($300)</span>
              </div>
              <div id="lg" class="book_div" @click="choose_size('Large')">
                <img
                  src="../assets/Book Covers/Patina. By Nancy Schmidt.png"
                  @click="choose_size('Large')"
                />
                <span @click="choose_size('Large')">BIG OL’ BIBBITY BOOK ($500)</span>
              </div>
            </div>
          </div>
          <div v-if="['Small', 'Medium', 'Large'].includes(book_size)" class="enter_name">
            <p>
              Next, name your {{ book_size.toLowerCase() }} book. Don't worry-you can rename it
              later.
            </p>
            <input id="book_title" type="text" />
            <p>
              Finally, head to <RouterLink to="my-bibbity">"My Bibbity"</RouterLink> to start your
              new book!"
            </p>
          </div>
        </div>
      </template>
    </Section>
  </div>
</template>

<style scoped>
.section_content,
.enter_name {
  display: flex;
  text-align: center;
}
p {
  font-size: larger;
  margin-bottom: 2em;
}
img {
  /* max-height: 420px; */
  margin: 0 0.5em 0 0.5em;
  box-shadow: 0px 0px 30px -10px #000000;
}
.section_content {
  display: grid;
  grid-template-columns: 1fr;
}
.book_carosel {
  display: flex;
  justify-content: center;
  height: 530px;
  max-width: 100%;
  background-color: #ffd500a4;
  padding: 0 2em 0 2em;

  border-radius: 1em;
  margin-bottom: 2em;
}
.center_div {
  display: flex;
  align-items: flex-end;
  height: 530px;
  background-color: #ffd50084;
}
.book_div {
  position: relative;
  display: grid;
  justify-items: center;

}
.single_row_column {
  grid-column: 1;
  grid-row: 1;
}
.book_div span {
  position: absolute;
  z-index: -1;

  font-weight: bold;
  font-size: x-large;
  color: white;

  align-self: center;
  padding: .5em;
  border-radius: 2em;
  background-color: rgba(33, 33, 33, 0.056);
}
.book_div:hover span {
  z-index: 2;
  background-color: rgba(33, 33, 33, 0.581);
  transition: 0.2s;
}
#s img {
  max-height: 300px;
  max-width: 100%;
}
#s:hover img {
  max-height: 310px;
  max-width: 100%;
}
#m img {
  max-height: 400px;
  max-width: 100%;
}
#m:hover img {
  max-height: 420px;
  max-width: 100%;
}
#lg img {
  max-height: 500px;
  max-width: 100%;
}
#lg:hover img {
  max-height: 520px;
  max-width: 100%;
}
.enter_name {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  max-width: 100%;
  margin-bottom: 2rem;
  font-size: 2rem;
}
.book_title {
}
</style>
