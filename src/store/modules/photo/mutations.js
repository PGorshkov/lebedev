export default {
  changeSortAlphabet: (state, val) => {
    state.sortAlphabet = val
  },
  setCategories: (state, cats) => {
    state.categories = cats
  },
  setPhoto: (state, photos) => {
    state.photos = state.photos.concat(photos)
  },
  clearPhoto: (state) => {
    state.photos = []
  },
  changeFavorites: (state, val) => {
    const index = state.favorites.findIndex(f => f === val)
    if (index !== -1) {
      state.favorites.splice(index, 1)
    } else {
      state.favorites.push(val)
    }
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  }
}
