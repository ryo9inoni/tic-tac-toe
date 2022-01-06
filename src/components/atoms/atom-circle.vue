<template lang="pug">
  .circle.an-addMark
    | test
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AtomCircle extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";
.circle{
  @include middle();
  box-sizing: border-box;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: solid 5px #000000;
}
</style>
