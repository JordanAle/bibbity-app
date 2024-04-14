<script setup>
defineProps ({
    section_title: {
        type: String,
        required: false,
        default: "Section Title"
    }
})
</script>

<template>
    <div>
        <section>
            <h2 class="section_title">{{section_title}}</h2>
            <slot class="section_content" name="section_content"></slot>
        </section>
    </div>
</template>

<style scoped>
    div {
        display:flex;
        justify-content: center;
        margin: 1rem 0 1rem 0;
    }
    section {
        display: grid;
        max-width: 80%;
        justify-content: center;
        /* grid-template-columns: 1fr; */
    }
    .section_title {
        display: flex;
        justify-content: center;
        font-size: 8rem;
        color: rgba(65, 105, 225, 1);
        /* outline: 1px solid black; */
        /* outline-width: 1px; */
    }
</style>