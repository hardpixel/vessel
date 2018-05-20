import Vue             from 'vue'
import Vuex            from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

var vuexStorage = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  plugins: [
    vuexStorage.plugin
  ]
})
