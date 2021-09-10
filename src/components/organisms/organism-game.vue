<template lang="pug">
  .game
    .game__wrap
      //- MoleculeTimer
      MoleculeBoard(:playerId="IsPlayerId")(@SubmitPlayerId="PostPlayerId")
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

  get IsPlayerId(): number{
    return this.$store.state.playerId;
  }

  PostPlayerId(num: number){
    this.$store.state.playerId = num; 
  }
}
</script>
<style scoped lang="scss">
.game{
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
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