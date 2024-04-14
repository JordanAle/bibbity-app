<script setup>
// Imports
import AboutCard from '../components/AboutCard.vue';

// Props
const props = defineProps ({
    itemObj: {
        type: Object,
    }
})

</script>

<template>
    <div>
        <ul>
            <li v-for="item of props.itemObj.list" :key="item.name">
                <AboutCard :title="item.name"></AboutCard>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    div {
        margin: 3em 0 3em 0;
    }
    ul, li {
        list-style: none;
    }
</style>