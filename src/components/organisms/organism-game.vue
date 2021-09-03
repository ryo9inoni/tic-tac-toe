<template lang="pug">
  .game
    .game__wrap
      //- MoleculeTimer
      MoleculeBoard(:player="IsPlayer")(@submitPlayer="PostPlayer")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MoleculeBoard from '../molecules/molecule-board.vue';
import MoleculeTimer from '../molecules/molecule-timer.vue';

@Component({
  components: {
    MoleculeBoard,
    MoleculeTimer
  },
})
export default class OrganismGame extends Vue {

  get IsPlayer(): number{
    return this.$store.state.player;
  }

  PostPlayer(num: number){
    this.$store.state.player = num; 
  }
}
</script>
<style scoped lang="scss">
.game{
  position: relative;
  margin: 0 auto;
  width: 1024px;
  &__wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    position: relative;
    width: 100%;
    height: 100vh;
  }
}
</style>