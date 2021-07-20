<template lang="pug">
  .bord
    .bord__square.-top.-left(@click="addMark")(v-if="store.state.player == 0")
      AtomCross
    .bord__square.-top.-left(@click="addMark")(v-else-if="store.state.player == 1")
      AtomCross
    .bord__square.-top.-center
    .bord__square.-top.-right
    .bord__square.-middle.-left
    .bord__square.-middle.-center
    .bord__square.-middle.-right
    .bord__square.-bottom.-left
    .bord__square.-bottom.-center
    .bord__square.-bottom.-right
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AtomCircle from '../atoms/atom-circle.vue';
import AtomCross from '../atoms/atom-cross.vue';

@Component({
  components: {
    AtomCircle,
    AtomCross
  },
})
export default class MoleculeBoard extends Vue {
  addMark() {
    // switch (store.state.player) {
    //   case 0:
    //     return store.state.player = 1;
    //     break;
    //   case 1:
    //     return store.state.player = 0;
    //     break;
    // }
  }
}
</script>

<style scoped lang="scss">
.bord{
  display: block;
  width: 640px;
  height: 640px;
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
}
</style>