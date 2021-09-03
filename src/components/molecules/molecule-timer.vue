<template lang="pug">
  .timer
    .timer__wrap
      AtomParamer
      AtomNum
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit} from 'vue-property-decorator';
import AtomParamer from '@/components/atoms/atom-parameter.vue';
import AtomNum from '@/components/atoms/atom-num.vue';

@Component({
  components: {
    AtomParamer,
    AtomNum
  }
})
export default class MoleculeTimer extends Vue {
}
</script>

<style scoped lang="scss">
.timer{
  position: absolute;
  top: 0px;
  right: 20px;
  width: 150px;
  height: 150px;
  &__wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}
</style>