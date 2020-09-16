import VueRouter from "vue-router"
import CurrencyRate from "./views/CurrencyRate.vue"
import RawRate from "./components/CurrencyRate/RawRate.vue"
import HomeRate from "./components/CurrencyRate/Home.vue"
import TableRate from "./components/CurrencyRate/TableRate.vue"
import HttpError404 from "./views/HttpStatus/Error404.vue"

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: CurrencyRate,
      children: [
        { path: "", component: HomeRate },
        { path: "raw", component: RawRate },
        { path: "table", component: TableRate },
      ],
    },
    { path: "*", component: HttpError404 },
  ],
})

export default router
