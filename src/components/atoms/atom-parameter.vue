<template lang="pug">
  svg.parameter(width="150" height="150" viewBox="0, 0, 150, 150" xmlns="http://www.w3.org/2000/svg")
    circle.parameter__circle(cx="75" cy="75" r="65")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AtomParameter extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";
.parameter{
  @include middle();
  &__circle{
    fill: transparent;
    stroke-width: 5;
    stroke-dasharray: 0 471;
    stroke: #000; 
    animation-name: measure;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-duration: 30000ms;
    @keyframes measure{
      0%{
        stroke-dasharray: 0 471;
      }
      100%{
        stroke-dasharray: 471 471;
      }
    } 
  }
}
</style>
