import { API_ENDPOINT } from "../../global.js"

const state = {
  rates: [],
  lastUpdate: "",
  sourceName: "",
  error: null
}

const actions = {
  async fetchRates({ commit, dispatch }) {
    try {
      const result = await fetch(`${API_ENDPOINT}/rate`).then(res => res.json())
      commit("setRates", result.data)
      commit("setLastUpdateTime", result.date)
      commit("setSourceFileName", result.fileName)
    } catch (err) {
      dispatch("error/assign", err, { root: true })
    }
  }
}

const mutations = {
  setRates(state, rates) {
    state.rates = rates
  },
  setLastUpdateTime(state, time) {
    state.lastUpdate = time
  },
  setSourceFileName(state, name) {
    state.sourceName = name
  }
}

export default { namespaced: true, state, actions, mutations }
