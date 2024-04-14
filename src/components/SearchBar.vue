<script setup>
import {ref, computed} from 'vue'
// Props
const props = defineProps({
    placeholder: {
        type: String,
        default: "Search..."
    }
})

// Data
const placeholder = props.placeholder;
const filterlist = ref([1,234523452,3,4]);

// Computed

</script>


<template>
    <div>
        <input
            :placeholder="props.placeholder"
            @input="event => placeholder = event.target.value">
        <div class="filter_options">
            Filter by:
            <ul>
                <li v-for="filterName in ['Name','Genre', 'Date']" :key="filterName">{{filterName}}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    div {

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
    .filter_options {
        margin-top: .3em;
    }
    .filter_options, ul{
        display: flex;
        flex-direction: row;
        color:black;

    }
    li {
        margin: 0 1em 0 1em;
        padding: 0 1em 0 1em;
        list-style: none;
    }
    li:hover {
        background-color: silver;
        border-radius: 5rem;
        color:white;
    }
    /* li:first-of-type {
        margin:
        list-style: none;
    } */
</style>