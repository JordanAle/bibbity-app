<script setup>
import Section from '../components/Section.vue';
import AboutCard from '../components/AboutCard.vue';
import Caption from '../components/Caption.vue';
</script>

<template>
  <Section section_title="Our Story">
    <template #section_content>
      <Caption text="May in Ayemenem is a hot, brooding month. The days are long and humid. The river shrinks and black crows gorge on bright mangoes in still, dustgreen trees. Red bananas ripen. Jackfruits burst. Dissolute bluebottles hum vacuously in the fruity air. Then they stun themselves against clear windowpanes and die, fatly baffled in the sun. The nights are clear, but suffused with sloth and sullen expectation. But by early June the southwest monsoon breaks and there are three months of wind and water with short spells of sharp, glittering sunshine that thrilled children snatch to play with. The countryside turns an immodest green. Boundaries blur as tapioca fences take root and bloom. Brick walls turn mossgreen. Pepper vines snake up electric poles. Wild creepers burst through laterite banks and spill across the flooded roads. Boats ply in the bazaars. And small fish appear in the puddles that fill the PWD potholes on the highways. It was raining when Rahel came back to Ayemenem. Slanting silver ropes slammed into loose earth, plowing it up like gunfire. The old house on the hill wore its steep, gabled roof pulled over its ears like a low hat. The walls, streaked with moss, had grown soft, and bulged a little with dampness that seeped up from the ground. The wild, overgrown garden was full of the whisper and scurry of small lives. In the undergrowth a rat snake rubbed itself against a glistening stone. Hopeful yellow bullfrogs cruised the scummy pond for mates. A drenched mongoose flashed across the leaf-strewn driveway."/>
    </template>
  </Section>

  <Section section_title="Meet The Team">
    <template #section_content>
      <AboutCard
        img_uri="../assets/smiling_sloth.png"
        title="Smiling Sloth The First"
        text="May in Ayemenem is a hot, brooding month. The days are long and humid. The river shrinks and black crows gorge on bright mangoes in still, dustgreen trees. Red bananas ripen. Jackfruits burst. Dissolute bluebottles hum vacuously in the fruity air. Then they stun themselves against clear windowpanes and die, fatly baffled in the sun. The nights are clear, but suffused with sloth and sullen expectation. But by early June the southwest monsoon breaks and there are three months of wind and water with short spells of sharp, glittering sunshine that thrilled children snatch to play with. The countryside turns an immodest green. Boundaries blur as tapioca...">
      </AboutCard>
      <AboutCard 
        img_uri="../assets/smiling_sloth.png"
        :left_text="true"
        :expandable="true"
        title="Smiling Sloth The Second"
        text="May in Ayemenem is a hot, brooding month. The days are long and humid. The river shrinks and black crows gorge on bright mangoes in still, dustgreen trees. Red bananas ripen. Jackfruits burst. Dissolute bluebottles hum vacuously in the fruity air. Then they stun themselves against clear windowpanes and die, fatly baffled in the sun. The nights are clear, but suffused with sloth and sullen expectation. But by early June the southwest monsoon breaks and there are three months of wind and water with short spells of sharp, glittering sunshine that thrilled children snatch to play with. The countryside turns an immodest green. Boundaries blur as tapioca...May in Ayemenem is a hot, brooding month. The days are long and humid. The river shrinks and black crows gorge on bright mangoes in still, dustgreen trees. Red bananas ripen. Jackfruits burst.">
      </AboutCard>
      <AboutCard
        img_uri="../assets/smiling_sloth.png"
        title="Smiling Sloth The Third"
        text="May in Ayemenem is a hot, brooding month. The days are long and humid. The river shrinks and black crows gorge on bright mangoes in still, dustgreen trees. Red bananas ripen. Jackfruits burst. Dissolute bluebottles hum vacuously in the fruity air. Then they stun themselves against clear windowpanes and die, fatly baffled in the sun. The nights are clear, but suffused with sloth and sullen expectation. But by early June the southwest monsoon breaks and there are three months of wind and water with short spells of sharp, glittering sunshine that thrilled children snatch to play with. The countryside turns an immodest green. Boundaries blur as tapioca...">
      </AboutCard>
    </template>
  </Section>

</template>

<style>
@media (min-width: 1024px) {
  /* .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  } */
}
</style>
