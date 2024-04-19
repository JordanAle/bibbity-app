<template>
  <div class="banner">
    <img
      class="banner_img"
      src="../assets/cover.png"
      alt="Bibbity Books. Everything and everyone you need to create the book of 
your dreams."
    />
  </div>
</template>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
  max-width: 74%;
}
.banner_img {
  max-width: 85%;
  object-fit: contain;
  box-shadow: 0px 0px 67px -45px #000000;
  border-radius: 0.5em;
}
.banner_img:hover {
  box-shadow: none;
}
</style>
