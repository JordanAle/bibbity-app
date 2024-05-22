<script setup>
import Section from '../components/Section.vue'
import AboutCard from '../components/AboutCard.vue'
import Caption from '../components/Caption.vue'
</script>

<template>
  <Section section_title="Our Story">
    <template #section_content>
      <div class="caption">
        <Caption
          text="Bibbity Books is an online platform dedicated to uplifting creative voices to overcome the difficulties of publishing. Our shared space of writers and artists makes the process affordable, collaborative, inclusive and fun! Writers, turn your stories into beautiful published books that you can share with the world. Artists, propel your creative talent into the world of storytelling. Together, find out what magic awaits with Bibbity Books!"
        />
      </div>
    </template>
  </Section>
</template>

<style>
.caption {
  font-size: larger;
}

@media (min-width: 1024px) {
  /* .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  } */
}
</style>
