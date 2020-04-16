import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state: {
    loadContent: false
  },
  getters: {
    GET () {
      return (url, params, headers) => Vue.axios.get(url, { params, headers })
        .then(response => response || {})
    }
  }
})
