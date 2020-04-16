export default {
  fetchCategories: async ({ rootGetters, commit }) => {
    const { data } = await rootGetters.GET('breeds/list/all')
    commit('setCategories', data.message)
  },
  fetchPhoto: async ({ rootGetters, commit }, params) => {
    const limit = 20
    let url = 'breeds/image'
    if (params.breeds) {
      url = `breed/${params.breeds}/images`
    }
    if (params.subBreeds) {
      url = `breed/${params.breeds}/${params.subBreeds}/images`
    }
    url += `/random/${limit}`
    const { data } = await rootGetters.GET(url)
    commit('setPhoto', data.message)
    return data.message.length
  }
}
