/* global API_ENDPOINT */

const state = {
  rates: [],
  lastUpdate: "",
  sourceName: "",
  baseCurrency: "",
  error: null
}

const actions = {
  async fetchRates({ commit, dispatch }) {
    try {
      const result = await fetch(API_ENDPOINT + "/rate").then(res => res.json())
      commit("setRates", result.data)
      commit("setLastUpdateTime", result.date)
      commit("setSourceFileName", result.fileName)
      commit("setBaseCurrency", result.baseCurrency)
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
  },
  setBaseCurrency(state, currencyCode) {
    state.baseCurrency = currencyCode
  }
}

const getters = {
  currencyCodeList: state => {
    return [].concat(...state.rates.map(x => x.currency))
  }
}

export default { namespaced: true, state, actions, mutations, getters }
