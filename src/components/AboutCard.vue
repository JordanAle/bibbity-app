<script setup>
const props = defineProps({
  img_uri: {
    type: String,
    required: false,
    // default: "../assets/smiling_sloth.png"
  },
  img_alt: {
    type: String,
    default:"Image Failed to Load"
  },
  caption: {
    type: String,
    default: "Default Caption Text"
  }
})

// Format Image URI
const uri = new URL(props.img_uri, import.meta.url)
</script>

<template>
    <div>
        <img :src="uri" :alt="img_alt"/>
        <p>{{ img_uri }}</p>
        <p class="caption">{{caption}}</p>
    </div>
</template>

<style scoped>
 div {
    background-color:red;
    margin: 0 10% 0 10%;
    overflow: hidden;
    display: grid;
    grid-template-columns: 2fr 2fr;;
    outline: #FFD500 solid 5px;
 }

 .caption {
    background-color: aqua;
 }
</style>