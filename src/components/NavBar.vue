<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="navbar">
        <div class="nav_logo">
            <h1>
                <RouterLink class="logo_style" to="/">Bibbity.</RouterLink>
            </h1>
        </div>
        <div class="nav_wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about-us">About</RouterLink>
                <RouterLink to="/bibliotheque">Biblioteque</RouterLink>
                <RouterLink to="/printing-press">Printing Press</RouterLink>
                <RouterLink to="/browse-artists">Browse Artists</RouterLink>
                <RouterLink to="/my-bibbity">My Bibbity</RouterLink>
                <RouterLink to="/account">Account</RouterLink>
            </nav>
        </div>
    </div>
</template>

<style scoped>
    .navbar {
        /* background-color: #e7bf0f; */
        display:grid;
        grid-template-columns: 2fr 8fr;
        margin: 0 0 1rem 0;
        border-bottom: 0.5px solid var(--color-border);
        background-color: white;

        position:sticky; /* fixing the position takes it out of html flow - knows
                        nothing about where to locate itself except by browser
                        coordinates */
        left:0;           /* top left corner should start at leftmost spot */
        top:0;            /* top left corner should start at topmost spot */
        width:100vw;      /* take up the full browser width */
        z-index:200;  /* high z index so other content scrolls underneath */
        height:100px;     /* define height for content */
        
    }
    .navbar .nav_logo {
        font-size: 30px;
        margin: 0em 0em 0em 1em;
        color: rgba(65, 105, 225, 1);
    }
    .nav_wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1em 0em 1em 0em;

        font-size: 18px;
        font-weight: bold;
        /* place-items: center; */
        /* flex-wrap: wrap; */
    }
    nav a.router-link-exact-active:hover {
        background-color: transparent;
    }
    nav a {
        display: inline-block;
        padding: 0.5rem 1rem;
        /* color: rgb(62, 62, 62); */
        border-left: 1px solid var(--color-border);
    }
    nav a:first-of-type {
        border: 0;
    }
    .logo_style {
        color: rgba(65, 105, 225, 1);
        text-shadow: 0px 0px 67px -45px #000000;
        /* text-shadow: 2px 2px 4px #000000; */
        /* -webkit-text-stroke-width: 0.1px;
        -webkit-text-stroke-color: black; */
    }
</style>