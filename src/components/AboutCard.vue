<script setup>
const props = defineProps({
  img_uri: {
    type: String,
    default: "../assets/smiling_sloth.png"
  },
  img_alt: {
    type: String,
    default:"Image Failed to Load"
  },
  title: {
    type: String,
    default:"Default Header"
  },
  text: {
    type: String,
    default: "Default Caption Text"
  },
  left_text: {
    type: Boolean,
    default: false
  },
  expandable: {
    type: Boolean,
    default: false
  },
})

// Format Image URI
const uri = new URL(props.img_uri, import.meta.url)
</script>

<template>
    <div v-if="left_text" class="card_container">
        <div class="text_container">
            <p class="title">{{title}}</p>
            <p class="text">{{text}}</p>
            <p v-if="expandable" class="expander">See More...</p>
        </div>
        <img class="about_img" :src="uri" :alt="img_alt"/>
    </div>
    <div v-else class="card_container">
        <img class="about_img" :src="uri" :alt="img_alt"/>
        <div class="text_container">
            <p class="title">{{title}}</p>
            <p class="text">{{text}}</p>
            <p v-if="expandable" class="expander">See More...</p>
        </div>
        
    </div>
</template>

<style scoped>
.card_container {
    display: flex;
    max-width: 100%;
    margin: 1rem 10% 0 10%;
    overflow: hidden;
    justify-content: center;
    /* outline: #FFD500 solid 5px; */
    /* display: grid; */
    /* flex-direction: row; */
    /* grid-template-columns: 16fr 1fr; */
    /* background-color:red; */
    /* outline: #FFD500 solid 5px; */
}
.card_container:hover {
    outline: #FFD500 solid 5px;
    transition: 0.03s ;
}
.about_img {
    max-width: 50%;
}
.text_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* text-justify: center; */
    margin: 1em;
    max-width: 50%;
    max-height: 100%;
}
.title {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
}
/* .expander {
    color: black;
    display: none;
    border-radius: .5px;
    stroke: 4px black;

    margin-top: 1em;
    padding-left: 5px;
    padding-right: 5px;
}
.expander:hover {
    display: visible;
} */
</style>