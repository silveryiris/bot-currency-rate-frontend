const state = {
  error: null,
}

const actions = {
  assign({ commit }, error) {
    commit("setError", error)
  },
}

const mutations = {
  setError(state, err) {
    state.error = err
  },
  clearError(state) {
    state.error = null
  },
}

export default { namespaced: true, state, actions, mutations }
