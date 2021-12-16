import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filtro:"Pizza"
  },
  mutations: {
    setFiltro(state, payload) {
      state.filtro = payload;
    }
  },
  actions: {
    async setFiltro(state, payload) {
      console.log(state.filtro);
      state.filtro = payload;
    }
  },
  modules: {
  },
  getters:{
    getfiltro: state => state.filtro
  }
})
