<script setup>
// Imports
import ArtistCard from '../components/ArtistCard.vue'

// Props
const props = defineProps({
  itemObj: {
    type: Object
  }
})
</script>

<template>
  <div>
    <ul>
      <li v-for="item of props.itemObj.list" :key="item.id">
        <ArtistCard
          :image="item.image"
          :title="item.name"
          :text="item.about"
          :left_text="true"
          :photos="item.photos"
        ></ArtistCard>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul,
li {
  list-style: none;
}
li {
  margin-bottom: 3em;
}
</style>
