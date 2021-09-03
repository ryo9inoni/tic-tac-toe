<template lang="pug">
  .home
    OrganismGame
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import OrganismGame from '../organisms/organism-game.vue';

@Component({
  components: {
    OrganismGame
  },
})
export default class Home extends Vue {

}
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";
.home{
  width: 100%;
  height: 100vh;
}
</style>