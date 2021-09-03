<template lang="pug">
  .bord
    .bord__square(v-for="squareClass in squareClassArray")(@click="OnMark")(:class="squareClass")(data-player="0")
      .bord__mark.-markCircle
        AtomCircle
      .bord__mark.-markCross
        AtomCross
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit} from 'vue-property-decorator';
import AtomCircle from '@/components/atoms/atom-circle.vue';
import AtomCross from '@/components/atoms/atom-cross.vue';

@Component({
  components: {
    AtomCircle,
    AtomCross
  }
})
export default class MoleculeBoard extends Vue {
  squareClassArray = [
    '-top -left',
    '-top -center',
    '-top -right',
    '-middle -left',
    '-middle -center',
    '-middle -right',
    '-bottom -left',
    '-bottom -center',
    '-bottom -right',
  ]

  @Prop(Number) player: number;

  OnMark(e: any){
    e.target.dataset.player = this.player === 1 ? 2 : 1;
    this.SubmitPlayer();
  }

  @Emit('submitPlayer') SubmitPlayer(){
    return this.player === 1 ? 2 : 1;
  }  
}
</script>

<style scoped lang="scss">
.bord{
  display: block;
  width: 540px;
  height: 540px;
  font-size: 0;
  &__square{
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 33.333333333%;
    height: 33.333333333%;
    border-width: 5px;
    border-color: #000000;
    border-style: none;
    cursor: pointer;
    &.-top{
      border-bottom-style: solid; 
    }
    &.-middle{
      
    }
    &.-bottom{
      border-top-style: solid; 
    }
    &.-left{
      border-right-style: solid;
    }
    &.-center{

    }
    &.-right{
      border-left-style: solid;
    }
  }
  &__square[data-player="1"]{
    pointer-events: none;
  }
  &__square[data-player="2"]{
    pointer-events: none;
  }
  [data-player="0"] &__mark{
    display: none;
  }
  [data-player="1"] &__mark.-markCircle{
    display: block;
  }
  [data-player="1"] &__mark.-markCross{
    display: none;
  }
  [data-player="2"] &__mark.-markCircle{
    display: none;
  }
  [data-player="2"] &__mark.-markCross{
    display: block;
  }
}
</style>