import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const InitState = () => ({
  photos: [],
  favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
  categories: null,
  sortAlphabet: false
})

export default {
  namespaced: true,
  state: InitState,
  actions,
  mutations,
  getters
}
