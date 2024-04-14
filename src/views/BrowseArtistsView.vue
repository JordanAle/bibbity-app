<script setup>
import SearchBar from '../components/SearchBar.vue'
import ArtistList from '../components/ArtistList.vue'

const artists = {
    "list":[
        {"id":0,"name":"artist_zero","about":"about","image_uri":"uri0","photos":["uri1","uri2"], "books":[0]},
        {"id":1,"name":"artist_one","about":"about","image_uri":"uri0","photos":["uri1","uri2"], "books":[0,1,2]},
        {"id":2,"name":"artist_two","about":"about","image_uri":"uri0","photos":["uri1","uri2"], "books":[2]},
        {"id":3,"name":"artist_three","about":"about","image_uri":"uri0","photos":["uri1","uri2"], "books":[3]},
        {"id":4,"name":"artist_four","about":"about","image_uri":"uri0","photos":["uri1","uri2"], "books":[4]},
        {"id":5,"name":"artist_five","about":"about","image_uri":"uri0","photos":["uri1","uri2"], "books":[5]},
        {"id":6,"name":"artist_six","about":"about","image_uri":"uri0","photos":["uri1","uri2"], "books":[6]},
        {"id":7,"name":"artist_seven","about":"about","image_uri":"uri0","photos":["uri1","uri2"], "books":[7,8]},
        {"id":8,"name":"artist_eight","about":"about","image_uri":"uri0","photos":["uri1","uri2"], "books":[8]},
        {"id":9,"name":"artist_nine","about":"about","image_uri":"uri0","photos":["uri1","uri2"], "books":[9]}
    ]
}


</script>

<template>
    <div class="search_header">
        <h1>Browse Artists</h1>
        <SearchBar
        placeholder="Search..."/>
    </div>

    <div class="list">
        <ArtistList v-bind:itemObj="artists"></ArtistList>
    </div>
</template>

<style scoped>
.search_header {
    display: grid;
    justify-content: center;
    max-width: 100%;
}
h1 {
    font-size: 8rem;
    color: rgba(65, 105, 225, 1);
}
</style>