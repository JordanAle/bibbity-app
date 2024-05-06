<script setup>
import ProfileEdit from '../components/ProfileEdit.vue'
import PhotoGallery from '../components/PhotoGallery.vue'
import Login from '../components/Login.vue'
import { useLoginStore } from '../stores/loginStore.js'
import { computed, defineProps } from 'vue'

// Props
const props = defineProps({
  user: {
    type: Object
  }
})
// Store
const loginStore = useLoginStore()

// Data
// const book_obj_list = {
//   books: [
//     {
//       id: 0,
//       title: 'A Little Direction by Mallory N_Jibwe.png',
//       author: 'Mallory N_Jibwe',
//       author_id: 0
//     },
//     { id: 1, title: 'Cutting Glass By Sam Meyers.png', author: 'Sam Meyers', author_id: 1 },
//     {
//       id: 2,
//       title: 'Dying Alone, Together by Shep Albertson.png',
//       author: 'Shep Albertson',
//       author_id: 2
//     },
//     {
//       id: 3,
//       title: 'One Day and Two Nights by Eugenia Nedlman.png',
//       author: 'Eugenia Nedlman',
//       author_id: 3
//     },
//     { id: 4, title: 'Patina. By Nancy Schmidt.png', author: 'Nancy Schmidt', author_id: 4 },
//     {
//       id: 5,
//       title: 'Pushing 90 With the Windows Down, by Diangelo Jailors.png',
//       author: 'Diangelo Jailors',
//       author_id: 5
//     },
//     {
//       id: 6,
//       title: 'Refusal of the Call by Lynn Trestle.png',
//       author: 'Lynn Trestle',
//       author_id: 6
//     },
//     {
//       id: 7,
//       title: 'The Infinite Pleasures of Contemplation by Samantha Ruppert.png',
//       author: 'Samantha Ruppert',
//       author_id: 7
//     },
//     {
//       id: 8,
//       title: 'The Wild Geese by Adronius Finch.png',
//       author: 'Adronius Finch',
//       author_id: 8
//     },
//     { id: 9, title: 'Why not Now by Eddard Landry.png', author: 'Eddard Landry', author_id: 9 }
//   ]
// }
let active_tab = 0


// Methods
// const is_logged_in = computed(() => {
//   return loginStore.getUser
// })

const is_logged_in = computed(() => {
  return true
})

function select_tab(num) {
  switch (num) {
    case 1:
      if (active_tab == 1) {
        active_tab = 0
        document.getElementById('tab1').style.display = 'none'
        document.getElementById('tab_head1').style.color = 'inherit'
      } else {
        active_tab = 1
        document.getElementById('tab1').style.display = 'inline'
        document.getElementById('tab_head1').style.color = 'white'
        document.getElementById('tab2').style.display = 'none'
        document.getElementById('tab_head2').style.color = 'inherit'
        document.getElementById('tab3').style.display = 'none'
        document.getElementById('tab_head3').style.color = 'inherit'
        document.getElementById('tab4').style.display = 'none'
        document.getElementById('tab_head4').style.color = 'inherit'
      }
      break

    case 2:
      if (active_tab == 2) {
        active_tab = 0
        document.getElementById('tab2').style.display = 'none'
        document.getElementById('tab_head2').style.color = 'inherit'
      } else {
        active_tab = 2
        document.getElementById('tab2').style.display = 'inline'
        document.getElementById('tab_head2').style.color = 'white'
        document.getElementById('tab1').style.display = 'none'
        document.getElementById('tab_head1').style.color = 'inherit'
        document.getElementById('tab3').style.display = 'none'
        document.getElementById('tab_head3').style.color = 'inherit'
        document.getElementById('tab4').style.display = 'none'
        document.getElementById('tab_head4').style.color = 'inherit'
      }
      return 1
    case 3:
      if (active_tab == 3) {
        active_tab = 0
        document.getElementById('tab3').style.display = 'none'
        document.getElementById('tab_head3').style.color = 'inherit'
      } else {
        active_tab = 3
        document.getElementById('tab3').style.display = 'inline'
        document.getElementById('tab_head3').style.color = 'white'
        document.getElementById('tab1').style.display = 'none'
        document.getElementById('tab_head1').style.color = 'inherit'
        document.getElementById('tab2').style.display = 'none'
        document.getElementById('tab_head2').style.color = 'inherit'
        document.getElementById('tab4').style.display = 'none'
        document.getElementById('tab_head4').style.color = 'inherit'
      }
      return 1
    case 4:
      if (active_tab == 4) {
        active_tab = 0
        document.getElementById('tab4').style.display = 'none'
        document.getElementById('tab_head4').style.color = 'inherit'
      } else {
        active_tab = 4
        document.getElementById('tab4').style.display = 'inline'
        document.getElementById('tab_head4').style.color = 'white'
        document.getElementById('tab1').style.display = 'none'
        document.getElementById('tab_head1').style.color = 'inherit'
        document.getElementById('tab2').style.display = 'none'
        document.getElementById('tab_head2').style.color = 'inherit'
        document.getElementById('tab3').style.display = 'none'
        document.getElementById('tab_head3').style.color = 'inherit'
      }
      return 1
  }
}
</script>

<template>
  <div class="container">
    <div v-if="is_logged_in == null" class="loggedout">
      <Login />
    </div>
    <!-- TODO pass props to these child components from retrieved database results -->
    <div v-else class="loggedin">
      <ul class="tab_container">
        <div class="tab_header_group">
          <li id="tab_head1" class="tab_header" @click="select_tab(1)">New Books</li>
          <li id="tab_head2" class="tab_header" @click="select_tab(2)">Books In Progress</li>
          <li id="tab_head3" class="tab_header" @click="select_tab(3)">Published Books</li>
          <li id="tab_head4" class="tab_header" @click="select_tab(4)">Edit Profile</li>
        </div>
        <div class="tab_content_group"></div>
        <div id="tab1" class="tab_content">New Books</div>
        <div id="tab2" class="tab_content">Books In Progress</div>
        <div id="tab3" class="tab_content">Published Books</div>
        <div id="tab4" class="tab_content">
          <div>
            <ProfileEdit />
          </div>
        </div>
      </ul>

      <div class="photo_gallery">
        <PhotoGallery />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
}
.tab_container {
  list-style: none;
}
.tab_header_group {
  display: flex;
  justify-content: center;
}
.tab_header {
  display: flex;
  flex-direction: column;

  vertical-align: middle;

  background-color: #ffd04f;

  margin: 0 0.5em;
  padding: 0 0.8em 0 0.8em;
  border-radius: 0.5em;
  font-weight: bold;
  font-size: 1em;

  box-shadow: 0px 0px 60px 0.02px #000000;
  box-shadow: 0px 0px 15px -10px #000000;
}
.tab_header:hover {
  color: white;
}
#tab1,
#tab2,
#tab3 {
  display: none;
}
</style>
