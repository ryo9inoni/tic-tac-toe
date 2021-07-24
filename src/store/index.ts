import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



/*
player: 0「未選択」
player: 1「まる」
player: 2「ばつ」

time: 0「未スタート」 
time: 1 ~ 「ゲーム中」
time: ~ 90「ゲーム終了」
*/
export default new Vuex.Store({
  state: {
    player: 1,
    time: 0,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
