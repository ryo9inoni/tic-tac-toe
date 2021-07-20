<template lang="pug">
  .home
    OrganismGame
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import OrganismGame from '../organisms/organism-game.vue';

@Component({
  components: {
    OrganismGame
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>