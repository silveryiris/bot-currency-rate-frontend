<template lang="pug">
.currency-rate
  Navbar

  main.center-layout.currency-rate__main
    nav.currency-rate__navi
      router-link.link.currency-rate__navi-item(to="/")
        IconRocket.icon-svg
        span Home
      router-link.link.currency-rate__navi-item(to="/raw")
        IconFileCode.icon-svg
        span Raw
      router-link.link.currency-rate__navi-item(to="/table")
        IconListUnordered.icon-svg
        span Table

    section.currency-rate__meta(title="Last update time")
      IconClock.icon-svg.icon-svg--medium
      |
      span : {{ lastUpdateLocalTime }}

    section.currency-rate__meta(title="Source file name")
      IconFile.icon-svg.icon-svg--medium
      |
      span : {{ sourceName }}

    section.currency-rate__meta(title="Base currency")
      IconMilestone.icon-svg.icon-svg--medium
      |
      span : Base Currency - {{ baseCurrency }}

    router-view

    Footer
</template>

<style lang="stylus">
:root
  --currency-rate-section-background-color #ffffff

[data-theme="dark"]
  --currency-rate-section-background-color #424242

.currency-rate
  &__navi
    display grid
    border-radius 0.3rem 0.3rem 0 0
    background var(--currency-rate-section-background-color)
    text-align center
    grid-template-columns repeat(3, 1fr)

  &__navi-item
    display flex
    justify-content center
    align-items center
    margin 1rem
    padding 1rem

  &__meta
    display flex
    align-items center
    padding 1rem
    background var(--currency-rate-section-background-color)

  &__main
    margin-top 1rem

@media screen and (max-width 768px)
  .currency-rate
    &__main
      margin-top 0

    &__navi
      border-radius 0

@media screen and (max-width 475px)
  .currency-rate
    &__navi-item
      margin 0

    &__meta
      padding 0.5rem
</style>

<script>
import { mapState } from "vuex"
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import IconListUnordered from "@primer/octicons/build/svg/list-unordered-16.svg"
import IconRocket from "@primer/octicons/build/svg/rocket-16.svg"
import IconFileCode from "@primer/octicons/build/svg/file-code-16.svg"
import IconFile from "@primer/octicons/build/svg/file-16.svg"
import IconClock from "@primer/octicons/build/svg/clock-16.svg"
import IconMilestone from "@primer/octicons/build/svg/milestone-16.svg"

export default {
  metaInfo: {
    titleTemplate: "%s - home",
    meta: [{ name: "Description", content: "Display Bank of Taiwan currency rates" }],
    link: [{ rel: "preconnect", href: process.env.VUE_APP_API_URL, crossorigin: "use-credentials" }],
  },
  async mounted() {
    await this.$store.dispatch("currency/fetchRates")
  },
  computed: {
    ...mapState("currency", ["rates", "sourceName", "lastUpdate", "baseCurrency"]),
    ...mapState("error", ["error"]),
    lastUpdateLocalTime() {
      return new Date(this.lastUpdate).toLocaleString()
    },
  },
  components: { Navbar, Footer, IconListUnordered, IconRocket, IconFileCode, IconFile, IconClock, IconMilestone },
}
</script>
