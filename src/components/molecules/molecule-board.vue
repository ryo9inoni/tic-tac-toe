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
  boradData: any = {
    top: { left: -1, center: -1, right: -1 }, 
    middle: { left: -1, center: -1, right: -1 },
    bottom: { left: -1, center: -1, right: -1 }
  }
   
  @Prop(Number)
  playerId: number;

  OnSelect(blockPos: any, squarePos: any){
    if(this.boradData[blockPos][squarePos] === -1){
      const id = this.playerId === 1 ? 2 : 1;
      this.boradData[blockPos][squarePos] = id;
      this.SubmitPlayerId(id);
      this.CheckBord();
    }
  }

  @Emit('SubmitPlayerId')
  SubmitPlayerId(id: number){
    return id;
  }

  CheckBord(){
    for (const brock in this.boradData) {
      // 横
      const row = [
        this.boradData[brock]['left'],
        this.boradData[brock]['center'],
        this.boradData[brock]['right'],
      ];
      this.Winner(row);

      for (const square in this.boradData[brock]) {
        // 縦
        const col = [
          this.boradData['top'][square],
          this.boradData['middle'][square],
          this.boradData['bottom'][square]
        ];
        this.Winner(col);

        // 左斜め
        const skew01 = [
          this.boradData['top']['left'],
          this.boradData['middle']['center'],
          this.boradData['bottom']['right']
        ];
        this.Winner(skew01);

        // 右斜め
        const skew02 = [
          this.boradData['top']['right'],
          this.boradData['middle']['center'],
          this.boradData['bottom']['left']
        ];
        this.Winner(skew02);
      }
    }
  }

  Winner(bord){
    if(bord.every(v => v === 1)){
      this.SubmitWinnerId(1);
    }else if(bord.every(v => v === 2)){
      this.SubmitWinnerId(2);
    }
  }

  @Emit('SubmitWinnerId')
  SubmitWinnerId(id: number){
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