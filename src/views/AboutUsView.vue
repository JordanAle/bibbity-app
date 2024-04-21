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

  <Section section_title="Meet The Team">
    <template #section_content>
      <AboutCard
        img_uri="../assets/smiling_sloth.png"
        title="Smiling Sloth The First"
        text="May in Ayemenem is a hot, brooding month. The days are long and humid. The river shrinks and black crows gorge on bright mangoes in still, dustgreen trees. Red bananas ripen. Jackfruits burst. Dissolute bluebottles hum vacuously in the fruity air. Then they stun themselves against clear windowpanes and die, fatly baffled in the sun. The nights are clear, but suffused with sloth and sullen expectation. But by early June the southwest monsoon breaks and there are three months of wind and water with short spells of sharp, glittering sunshine that thrilled children snatch to play with. The countryside turns an immodest green. Boundaries blur as tapioca..."
      >
      </AboutCard>
      <AboutCard
        img_uri="../assets/smiling_sloth.png"
        :left_text="true"
        title="Smiling Sloth The Second"
        text="May in Ayemenem is a hot, brooding month. The days are long and humid. The river shrinks and black crows gorge on bright mangoes in still, dustgreen trees. Red bananas ripen. Jackfruits burst. Dissolute bluebottles hum vacuously in the fruity air. Then they stun themselves against clear windowpanes and die, fatly baffled in the sun. The nights are clear, but suffused with sloth and sullen expectation. But by early June the southwest monsoon breaks and there are three months of wind and water with short spells of sharp, glittering sunshine that thrilled children snatch to play with. The countryside turns an immodest green. Boundaries blur as tapioca...May in Ayemenem is a hot, brooding month. The days are long and humid. The river shrinks and black crows gorge on bright mangoes in still, dustgreen trees. Red bananas ripen. Jackfruits burst."
      >
      </AboutCard>
      <AboutCard
        img_uri="../assets/smiling_sloth.png"
        title="Smiling Sloth The Third"
        text="May in Ayemenem is a hot, brooding month. The days are long and humid. The river shrinks and black crows gorge on bright mangoes in still, dustgreen trees. Red bananas ripen. Jackfruits burst. Dissolute bluebottles hum vacuously in the fruity air. Then they stun themselves against clear windowpanes and die, fatly baffled in the sun. The nights are clear, but suffused with sloth and sullen expectation. But by early June the southwest monsoon breaks and there are three months of wind and water with short spells of sharp, glittering sunshine that thrilled children snatch to play with. The countryside turns an immodest green. Boundaries blur as tapioca..."
      >
      </AboutCard>
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
