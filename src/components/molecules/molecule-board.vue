<template lang="pug">
  .bord
    .bord__block(v-for="(block, blockPos) in boradData")(:class="blockPos")
      .bord__square(v-for="(square, squarePos) in block")(:class="squarePos")(@click="OnSelect(blockPos, squarePos)")
        AtomCircle(v-if="square === 1")
        AtomCross(v-if="square === 2")
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import AtomCircle from '@/components/atoms/atom-circle.vue';
import AtomCross from '@/components/atoms/atom-cross.vue';

@Component({
  components: {
    AtomCircle,
    AtomCross
  }
})
export default class MoleculeBoard extends Vue {
  boradData = {
    top: { left: -1, center: -1, right: -1 }, 
    middle: { left: -1, center: -1, right: -1 },
    bottom: { left: -1, center: -1, right: -1 },
  }
   
  @Prop(Number)
  playerId: number;

  OnSelect(blockPos, squarePos){
    if(this.boradData[blockPos][squarePos] === -1){
      const id = this.playerId === 1 ? 2 : 1;
      this.boradData[blockPos][squarePos] = id;
      this.SubmitPlayerId(id);
    }
  }

  @Emit('SubmitPlayerId')
  SubmitPlayerId(id){
    return id;
  }
}
</script>

<style scoped lang="scss">
.bord{
  display: block;
  width: 100%;
  height: 100%;
  max-width: 540px;
  max-height: 540px;
  font-size: 0;
  &__block{
    display: block;
    width: 100%;
    height: 33.333333333%;
  }
  &__square{
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 33.333333333%;
    height: 100%;
    border-width: 5px;
    border-color: #000000;
    border-style: none;
    cursor: pointer;
  }
  .top{
    .left{
      border-right-style: solid;
      border-bottom-style: solid;
    }
    .center{
      border-bottom-style: solid;
    }
    .right{
      border-bottom-style: solid;
      border-left-style: solid;
    }
  }
  .middle{
    .left{
      border-right-style: solid;
    }
    .center{
    
    }
    .right{
      border-left-style: solid;
    }
  }
  .bottom{
    .left{
      border-top-style: solid;
      border-right-style: solid;
    }
    .center{
      border-top-style: solid;
    }
    .right{
      border-top-style: solid;
      border-left-style: solid;
    }
  }
}
</style>