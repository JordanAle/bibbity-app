<script setup>
import SearchBar from '../components/SearchBar.vue'
import BookList from '../components/BookList.vue'
import PhotoGallery from '../components/PhotoGallery.vue'

// Props
const props = defineProps({
  user: {
    type: Object
  }
})
// Data
const book_obj_list = {
  books: [
    {
      id: 0,
      title: 'A Little Direction by Mallory N_Jibwe.png',
      author: 'Mallory N Jibwe',
      author_id: 0
    },
    { id: 1, title: 'Cutting Glass By Sam Meyers.png', author: 'Sam Meyers', author_id: 1 },
    {
      id: 2,
      title: 'Dying Alone, Together by Shep Albertson.png',
      author: 'Shep Albertson',
      author_id: 2
    },
    {
      id: 3,
      title: 'One Day and Two Nights by Eugenia Nedlman.png',
      author: 'Eugenia Nedlman',
      author_id: 3
    },
    { id: 4, title: 'Patina. By Nancy Schmidt.png', author: 'Nancy Schmidt', author_id: 4 },
    {
      id: 5,
      title: 'Pushing 90 With the Windows Down, by Diangelo Jailors.png',
      author: 'Diangelo Jailors',
      author_id: 5
    },
    {
      id: 6,
      title: 'Refusal of the Call by Lynn Trestle.png',
      author: 'Lynn Trestle',
      author_id: 6
    },
    {
      id: 7,
      title: 'The Infinite Pleasures of Contemplation by Samantha Ruppert.png',
      author: 'Samantha Ruppert',
      author_id: 7
    },
    {
      id: 8,
      title: 'The Wild Geese by Adronius Finch.png',
      author: 'Adronius Finch',
      author_id: 8
    },
    { id: 9, title: 'Why not Now by Eddard Landry.png', author: 'Eddard Landry', author_id: 9 }
  ]
}
// Methods

// Watchers - watch a data attribute for a change and issue an action if it changes
// Computed - temporary snapshot of a state, avoid mutating it
</script>

<template>
  <div class="search_header">
    <h1>Book Library</h1>
    <div class="filter_options">
      <SearchBar placeholder="Search...">
        <template #filter_options>
          <ul>
            Filter by:
            <li v-for="filterName in ['Book Size', 'Genre']" :key="filterName">
              {{ filterName }}
            </li>
          </ul>
        </template>
      </SearchBar>
    </div>
  </div>

  <div class="books">
    <!-- TODO pass props to these child components from retrieved database results -->
    <PhotoGallery :book_list="book_obj_list.books"></PhotoGallery>
  </div>

  <!-- <div class="book_list">
    <BookList />
  </div> -->
</template>

<style scoped>
/* .container {
  display: flex;
  justify-content: center;
  margin: 1rem 0 1rem 0;
} */
.search_header {
  display: grid;
  justify-content: center;
  max-width: 100%;
}
h1 {
  font-size: 8rem;
  color: rgba(65, 105, 225, 1);
}
/* Fiter styles -start- */
.filter_options {
  margin-top: 0.3em;
}
.filter_options,
ul {
  margin-top: 0.2em;
  display: flex;
  flex-direction: row;
  color: black;
}
li {
  margin: 0 1em 0 1em;
  padding: 0 1em 0 1em;
  list-style: none;
}
li:hover {
  background-color: silver;
  border-radius: 5rem;
  color: white;
}
.books {
  margin-left: 8em;
}
/* Fiter styles -end- */
</style>
