<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about-us">About</RouterLink>
            <RouterLink to="/bibblioteque">Bibblioteque</RouterLink>
            <RouterLink to="/printing-press">Printing Press</RouterLink>
            <RouterLink to="/browse-artists">Browse Artists</RouterLink>
            <RouterLink to="/my-bibbity">My Bibbity</RouterLink>
            <RouterLink to="/account">Account</RouterLink>
        </nav>
        <RouterView/>
    </header>
</template>

<style scoped>
    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 0rem;
    }
    nav a.router-link-exact-active:hover {
        background-color: transparent;
    }
    nav a {
        display: inline-block;
        padding: 0 1rem;
        border-left: 1px solid var(--color-border);
    }
    nav a:first-of-type {
        border: 0;
    }
</style>