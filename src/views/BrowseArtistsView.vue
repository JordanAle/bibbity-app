<script setup>
import SearchBar from '../components/SearchBar.vue'
</script>

<template>
    <div>
        <h1>Browse Artists</h1>
        <SearchBar
        placeholder="Search..."/>
    </div>
</template>

<style scoped>
div {
    display: grid;
    justify-content: center;
    max-width: 100%;
}
h1 {
    font-size: 8rem;
    color: rgba(65, 105, 225, 1);
}
</style>