<template lang="pug">
  .circle
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AtomCircle extends Vue {}
</script>

<style scoped lang="scss">
.circle{
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  width: 94px;
  height: 94px;
  border-radius: 50%;
  border: solid 5px #000000;
  transform: translate(-50%, -50%);
}
</style>
