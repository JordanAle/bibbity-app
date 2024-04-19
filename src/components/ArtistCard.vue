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
            <ul>
                <li v-for="obj in props.photos" :key="obj.id">
                    <img class="card_main_photo" :src="strToURL(obj.uri)"></img>
                </li>
            </ul>
        </div>
    </div>
    <div v-else class="card_container">
        <!-- Main -->
        <div class="card_main">
            <ul>
                <li v-for="obj in props.photos" :key="obj.id">
                    <img class="card_main_photo" :src="strToURL(obj.uri)"></img>
                </li>
            </ul>
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
    outline: #FFD500 solid 5px;
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
    margin: 1em 0 1em 0;
    align-content: center;
    /* position: relative; */
}
ul {
    display: grid;
    flex-flow: row wrap-reverse;
    grid-template-columns: 20% 20% 20% 20%;

    /* position:relative; */
    /* Undo Defaults */
    padding: 0;
    list-style: none;
}
/* li:after{
    content:""
} */
.card_main_photo {
    margin: .2em;
    max-width: 150px;
    max-height: 150px;

    /* z-index: 1; */
    /* transition: ease-out .2s; */
}
.card_main_photo img:hover:after {
    content: "";
    width: 100%;
    height: 100%;
    top: 0px; left:0px;

    /* position: fixed; */
    z-index: 10;
    box-shadow: 0px 0px 67px -45px #000000;
    transition: ease-out .2s;
}
.card_main_photo:hover {
    max-width: 300px;
    max-height: 300px;
    position: absolute;
    /* top: 0px; left:0px; */

    /* z-index: 100; */
    box-shadow: 0px 0px 67px -45px #000000;
    transition: ease-out .2s;
}
</style>