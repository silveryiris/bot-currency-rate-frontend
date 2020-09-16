import Vue from "vue"
import Vuex from "vuex"
import theme from "./modules/theme.js"
import currency from "./modules/currency.js"
import error from "./modules/error.js"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { theme, currency, error },
})
