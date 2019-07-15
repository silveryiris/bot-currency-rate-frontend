const state = {
  rates: [],
  lastUpdate: "",
  sourceName: ""
}

const actions = {
  async fetchCurrencyRates({ commit }) {
    const result = await fetch("http://127.0.0.1:5566/rate").then(res => res.json())
    commit("setCurrencyRates", result.data)
    commit("setLastUpdateTime", result.date)
    commit("setSourceFileName", result.fileName)
  }
}

const mutations = {
  setCurrencyRates(state, rates) {
    state.rates = rates
  },
  setLastUpdateTime(state, time) {
    state.lastUpdate = time
  },
  setSourceFileName(state, name) {
    state.sourceName = name
  }
}

export default { namespace: true, state, actions, mutations }
