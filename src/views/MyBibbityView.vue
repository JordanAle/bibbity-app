<script setup>
import ProfileEdit from '../components/ProfileEdit.vue'
import PhotoGallery from '../components/PhotoGallery.vue'
import Login from '../components/Login.vue'

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
      author: 'Mallory N_Jibwe',
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
function getUserBooks(id = 0) {
  return 1
}
</script>

<template>
  <div>
    <Login />
    <!-- TODO pass props to these child components from retrieved database results -->
    <ProfileEdit></ProfileEdit>
  </div>
</template>
