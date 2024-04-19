<script setup>
import { ref, computed } from 'vue'
// Props
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Search...'
  }
})

// Data
const placeholder = props.placeholder
// const filterlist = ref([1,234523452,3,4]);

// Computed
</script>

<template>
  <div>
    <input
      :placeholder="props.placeholder"
      @input="(event) => (placeholder = event.target.value)"
    />
    <div class="filter_options">
      <slot name="filter_options"></slot>
    </div>
  </div>
</template>

<style scoped>
div {
  margin-bottom: 3em;
}

input {
  max-width: 100%;
  /* margin: 2rem;  */
  font-size: 4rem;
  /* padding: 0rem 1rem 1rem 4rem; */
  /* border-radius: 3rem; */
  /* border-top: 0; */
  /* caret-color: transparent !important; */
}
</style>
