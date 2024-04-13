<script setup>
defineProps({
    text: {
        type: String,
        default: "Default Caption Component Text"
    }
})
</script>

<template>
    <p>{{ text }}</p>
</template>

<style scoped>
    p {
        display: flex;
    }
</style>