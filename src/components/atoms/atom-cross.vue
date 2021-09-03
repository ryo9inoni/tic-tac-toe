<template lang="pug">
  .cross.an-addMark
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AtomCross extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";
.cross{
  @include middle();
  box-sizing: border-box;
  width: 64px;
  height: 64px;
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
