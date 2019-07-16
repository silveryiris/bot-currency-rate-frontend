import VueRouter from "vue-router"
import CurrencyRate from "./views/CurrencyRate.vue"
import RawRate from "./components/CurrencyRate/RawRate.vue"
import HomeRate from "./components/CurrencyRate/Home.vue"
import TableRate from "./components/CurrencyRate/TableRate.vue"
import HttpError404 from "./views/HttpStatus/Error404.vue"
import ThemeManager from "./helpers/ThemeManager.js"
import store from "./store/index.js"

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/rate",
      component: CurrencyRate,
      children: [
        { path: "", component: HomeRate },
        { path: "raw", component: RawRate },
        { path: "table", component: TableRate }
      ],
      beforeEnter: persistTheme
    },
    { path: "*", component: HttpError404, beforeEnter: persistTheme }
  ]
})

function persistTheme(to, from, next) {
  const bodyNode = document.querySelector("body")
  const tm = new ThemeManager(bodyNode)
  tm.applyPresistentTheme()
  store.dispatch("theme/change", tm.getCurrentTheme())
  next()
}

export default router
