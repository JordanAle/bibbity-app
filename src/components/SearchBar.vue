<script setup>

// Props
const props = defineProps({
    placeholder: {
        type: String,
        default: "Search..."
    }
})

// Data
const placeholder = props.placeholder

// Computed
const filterlist = computed(() => {

})

</script>


<template>
    <div>
        <input
            :placeholder="props.placeholder"
            @input="event => placeholder = event.target.value">
        <div class="filter">
            <ul>
                <li v-for="filterName in filterList" :key="filter">{{filterName}}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    div {

    }

    input {
        width: 100%;
        /* margin: 2rem;  */
        font-size: 4rem;
        /* padding: 0rem 1rem 1rem 4rem; */
        /* border-radius: 3rem; */
        /* border-top: 0; */
        /* caret-color: transparent !important; */
    }
</style>