<script setup>
const props = defineProps({
  image: {
    type: Object,
    // default: "../assets/smiling_sloth.png"
  },
  img_alt: {
    type: String,
    default: "Default Img Alt"
  },
  title: {
    type: String,
    default:"Default Title"
  },
  text: {
    type: String,
    default: "Default Caption Text"
  },
  left_text: {
    type: Boolean,
    default: false
  },
  photos: {
    type: Array,
  }
})

// Process Images From References
// const getArtistPhotos = (artist.photos) => {
//     photos = null 
//     // API goes here to get the images from the photos. attribute
//     photos = artist.photos
//     return 0

// getArtistPhotos(artist.id)

// Format Image URI
const strToURL = (str) => {
    return new URL(str, import.meta.url)
}

</script>

<template>
    <div v-if="left_text" class="card_container">
        <!-- Aux -->
        <div class="card_auxiliary">
            <img class="about_img" :src="strToURL(props.image.uri)" :alt="props.img_alt"/>
            <div class="text_container">
                <p class="title">{{props.title}}</p>
                <p class="text">{{props.text}}</p>
            </div>
        </div>
        <!-- Main -->
        <div class="card_main">
            <img class="card_main_photo" v-for="obj in props.photos" :key="obj.id" :src="strToURL(obj.uri)"/>
        </div>
    </div>
    <div v-else class="card_container">
        <!-- Main -->
        <div class="card_main">
            <img class="card_main_photo" v-for="obj in props.photos" :key="obj.id" :src="strToURL(obj.uri)"/>
        </div>
        <!-- Aux -->
        <div class="card_auxiliary">
            <img class="about_img" :src="uri" :alt="props.img_alt"/>
            <div class="text_container">
                <p class="title">{{props.title}}</p>
                <p class="text">{{props.text}}</p>
            </div>
        </div>    
    </div>
</template>

<style scoped>
.card_container {
    display: grid;
    grid-template-columns: 30% 70%;
    max-width: 100%;
    margin: 1rem 5% 0 5%;
    /* flex-direction: row; */
    /* overflow: hidden; */
    /* justify-content: center; */
    /* outline: #FFD500 solid 5px; */
    /* display: grid; */
    /* flex-direction: row; */
    border-radius: .5em;
}
.card_container:hover {
    outline: #ffd500a3 solid 3px;
    border-radius: .5em;
    box-shadow: 
    
    0px 0px 67px -45px #000000;
    /* background-color:rgb(205, 205, 205); */
    transition: 0.03s ;
}
.about_img {
    margin: 1em 1em 0 1em;
    max-width: 200px;
    max-height: 200px;
    border-radius: 1em;
    
}
.text_container{
    display: flex;
    flex-flow: column wrap;
    margin: 0rem 0rem 1rem 1.5rem;
    max-width:100%

    /* align-items: center; */
    /* justify-content: center; */

    /* text-justify: center; */
    /* margin: 1em; */
    /* height: 100%; */
}
.title {
    /* justify-content: center; */
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    /* line-height: 1.5rem; */
}
.card_main{
    display: flex;
    flex-flow: row wrap;
    margin: 1em 0 1em 0;
    align-content: center;
    /* Undo Defaults */
    padding: 0;
    list-style: none;
}
.card_main_photo {
    margin: .2em;
    max-width: 250px;
    max-height: 250px;
}
/* .card_main_photo:hover {
    width: 300px;
    height: 300px;
    transition: ease-in .2s;
    display:relative;
    box-shadow: 0px 0px 300px -5px #000000;
} */
</style>