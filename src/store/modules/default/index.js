import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const InitState = () => ({})

export default {
  namespaced: true,
  state: InitState,
  actions,
  mutations,
  getters
}
