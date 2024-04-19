<script setup>
import SearchBar from '../components/SearchBar.vue'
import BookList from '../components/BookList.vue'

// Data
const artists = {
  list: [
    {
      id: 0,
      name: 'artist_zero',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla egestas augue at imperdiet. Nunc facilisis sagittis est, ut porttitor risus pulvinar ultricies. Vivamus cursus odio odio, non dapibus mauris facilisis vitae. Morbi finibus ex lectus, ut vestibulum mi tempor nec. Duis id orci ac lectus venenatis dignissim id ut nisl. Sed dui nulla, sollicitudin ut tempus at, vestibulum eu orci. Praesent id lacus ac nunc vulputate mattis at vitae nibh. Maecenas sed urna tincidunt, venenatis felis sed, finibus massa. ',
      image: { id: 0, uri: '../assets/smiling_sloth.png' },
      photos: [
        { id: 0, uri: '../assets/smiling_sloth.png' },
        { id: 1, uri: '../assets/smiling_sloth.png' },
        { id: 2, uri: '../assets/smiling_sloth.png' },
        { id: 3, uri: '../assets/smiling_sloth.png' },
        { id: 4, uri: '../assets/smiling_sloth.png' },
        { id: 5, uri: '../assets/smiling_sloth.png' },
        { id: 6, uri: '../assets/smiling_sloth.png' },
        { id: 7, uri: '../assets/smiling_sloth.png' },
        { id: 8, uri: '../assets/smiling_sloth.png' },
        { id: 9, uri: '../assets/smiling_sloth.png' }
      ],
      books: [0]
    },
    {
      id: 1,
      name: 'artist_one',
      about: 'about',
      image: { id: 0, uri: '../assets/smiling_sloth.png' },
      photos: [{ id: 0, uri: '../assets/smiling_sloth.png' }],
      books: [0, 1, 2]
    },
    {
      id: 2,
      name: 'artist_two',
      about: 'about',
      image: { id: 0, uri: '../assets/smiling_sloth.png' },
      photos: [
        { id: 0, uri: '../assets/smiling_sloth.png' },
        { id: 1, uri: '../assets/smiling_sloth.png' }
      ],
      books: [2]
    },
    {
      id: 3,
      name: 'artist_three',
      about: 'about',
      image: { id: 0, uri: '../assets/smiling_sloth.png' },
      photos: [
        { id: 0, uri: '../assets/smiling_sloth.png' },
        { id: 1, uri: '../assets/smiling_sloth.png' }
      ],
      books: [3]
    },
    {
      id: 4,
      name: 'artist_four',
      about: 'about',
      image: { id: 0, uri: '../assets/smiling_sloth.png' },
      photos: [
        { id: 0, uri: '../assets/smiling_sloth.png' },
        { id: 1, uri: '../assets/smiling_sloth.png' }
      ],
      books: [4]
    },
    {
      id: 5,
      name: 'artist_five',
      about: 'about',
      image: { id: 0, uri: '../assets/smiling_sloth.png' },
      photos: [
        { id: 0, uri: '../assets/smiling_sloth.png' },
        { id: 1, uri: '../assets/smiling_sloth.png' }
      ],
      books: [5]
    },
    {
      id: 6,
      name: 'artist_six',
      about: 'about',
      image: { id: 0, uri: '../assets/smiling_sloth.png' },
      photos: [
        { id: 0, uri: '../assets/smiling_sloth.png' },
        { id: 1, uri: '../assets/smiling_sloth.png' }
      ],
      books: [6]
    },
    {
      id: 7,
      name: 'artist_seven',
      about: 'about',
      image: { id: 0, uri: '../assets/smiling_sloth.png' },
      photos: [
        { id: 0, uri: '../assets/smiling_sloth.png' },
        { id: 1, uri: '../assets/smiling_sloth.png' }
      ],
      books: [7, 8]
    },
    {
      id: 8,
      name: 'artist_eight',
      about: 'about',
      image: { id: 0, uri: '../assets/smiling_sloth.png' },
      photos: [
        { id: 0, uri: '../assets/smiling_sloth.png' },
        { id: 1, uri: '../assets/smiling_sloth.png' }
      ],
      books: [8]
    },
    {
      id: 9,
      name: 'artist_nine',
      about: 'about',
      image: { id: 0, uri: '../assets/smiling_sloth.png' },
      photos: [
        { id: 0, uri: '../assets/smiling_sloth.png' },
        { id: 1, uri: '../assets/smiling_sloth.png' }
      ],
      books: [9]
    }
  ]
}

// Methods - runs on each component update
// Watchers - watch a data attribute for a change and issue an action if it changes
// Computed - temporary snapshot of a state, avoid mutating it
</script>

<template>
  <div class="search_header">
    <h1>Peruse the Bibliotheque</h1>
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

  <div class="book_list">
    <BookList />
  </div>
</template>

<style scoped>
.search_header {
  display: grid;
  justify-content: center;
  max-width: 100%;
}
h1 {
  font-size: 6rem;
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
/* Fiter styles -end- */
</style>
