
const state = {
  navTheme: 'white',
  isSecondCarousel: false,
}
const mutations = {
  changeNavTheme (state, res) {
    state.navTheme = res
  },
  changeIsSecondCarousel (state, res) {
    state.isSecondCarousel = res
  }
}

export default {
  state,
  mutations
}
