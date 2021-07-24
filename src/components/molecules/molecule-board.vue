<template lang="pug">
  .bord
    .bord__square(v-for="posClass in posClassArray")(:class="posClass")(@click="addMark")
      .bord__mark
        AtomCircle
      .bord__mark
        AtomCross
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AtomCircle from '@/components/atoms/atom-circle.vue';
import AtomCross from '@/components/atoms/atom-cross.vue';

@Component({
  components: {
    AtomCircle,
    AtomCross
  }
})
export default class MoleculeBoard extends Vue {
  posClassArray = [
    '-top -left',
    '-top -center',
    '-top -right',
    '-middle -left',
    '-middle -center',
    '-middle -right',
    '-bottom -left',
    '-bottom -center',
    '-bottom -right',
  ];
  
  addMark() {
    console.log('ok')
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
    // &.-middle{
      
    // }
    &.-bottom{
      border-top-style: solid; 
    }
    &.-left{
      border-right-style: solid;
    }
    // &.-center{

    // }
    &.-right{
      border-left-style: solid;
    }
  }
  &__mark{
    display: none;
  }
  &__mark.is-show{
    display: block;
    pointer-events: none;
  }
}
</style>