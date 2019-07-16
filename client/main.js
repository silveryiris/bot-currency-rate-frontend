import Vue from "vue/dist/vue.runtime.esm"
import VueMeta from "vue-meta"
import VueRouter from "vue-router"
import router from "./router.js"
import store from "./store/index.js"
import App from "./App.vue"

// include global styles
import "normalize.css"
import "./styles/main.styl"

Vue.use(VueRouter)
Vue.use(VueMeta)

// setting global variables
Vue.$global = { API_ENDPOINT: "http://127.0.0.1:5566/rate" }

const app = new Vue({ router, el: "#app", store, render: h => h(App) })

export default app
