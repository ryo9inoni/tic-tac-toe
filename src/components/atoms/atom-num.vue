<template lang="pug">
  span.num 0
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AtomNum extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";
.num{
  font-size: 2.4rem;
}
</style>
