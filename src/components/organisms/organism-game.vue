<template lang="pug">
  .game
    .game__wrap
      MoleculesBoard
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MoleculesBoard from '../molecules/molecule-board.vue';

@Component({
  components: {
    MoleculesBoard
  },
})
export default class OrganismGame extends Vue {}
</script>
<style scoped lang="scss">
.game{
  margin: 0 auto;
  max-width: 1024px;
  &__wrap{
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
</style>