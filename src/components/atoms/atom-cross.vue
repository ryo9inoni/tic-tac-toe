<template lang="pug">
  .cross
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AtomCross extends Vue {}
</script>

<style scoped lang="scss">
.cross{
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  width: 94px;
  height: 94px;
  transform: translate(-50%, -50%);
  &::before, &::after{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 100%;
    border-radius: 4px;
    background-color: #000000;
  }
  &::before{
    transform: translate(-50%, -50%) rotateZ(45deg);
  }
  &::after{
    transform: translate(-50%, -50%) rotateZ(-45deg);
  }
}
</style>
