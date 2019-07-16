const state = {
  theme: "default"
}

const actions = {
  change({ commit }, themeName) {
    commit("setTheme", themeName)
  }
}

const mutations = {
  setTheme(state, themeName) {
    state.theme = themeName
  }
}

export default { namespaced: true, state, actions, mutations }
