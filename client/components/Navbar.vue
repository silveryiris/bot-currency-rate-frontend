<template lang="pug">
.navbar
  .navbar__container
    .navbar__item(title="More projects")
      a.navbar__link(:href="authorGithubUrl" target="__blank" aria-label="show more projects made by Wen-Wei")
        IconSquirrel.icon-svg.icon-svg--medium.icon--clickable
    .navbar__item(title="Current theme name")
      span.navbar__theme-state {{ theme }}
    .navbar__item(title="Change Theme")
      IconPaintcan(@click="toggleTheme").icon-svg.icon-svg--medium.icon--clickable
</template>

<style lang="stylus">
:root
  --navbar-height 2.5rem
  --navbar-background-color #c2185b
  --navbar-text-color #ffffff

.navbar
  display block
  margin 0
  padding 0
  min-height var(--navbar-height)
  width 100vw
  background var(--navbar-background-color)
  color var(--navbar-text-color)

  &__container
    display flex
    justify-content space-between
    align-items center
    margin 0 auto
    width var(--root-desktop-width)

  &__item
    display block
    margin 0 1rem
    height var(--navbar-height)
    line-height var(--navbar-height)

  &__link
    color var(--navbar-text-color)

    &:hover, &:visited
      color var(--navbar-text-color)

  &__theme-state
    text-transform uppercase

@media screen and (max-width: 768px)
  .navbar
    &__container
      justify-content space-between
</style>

<script>
import { mapState } from "vuex"
import IconPaintcan from "@primer/octicons/build/svg/paintcan.svg"
import IconSquirrel from "@primer/octicons/build/svg/squirrel.svg"
import ThemeManager from "../helpers/ThemeManager.js"

export default {
  computed: {
    ...mapState("theme", ["theme"])
  },
  components: { IconPaintcan, IconSquirrel },
  data: () => ({ authorGithubUrl: "https://github.com/silveryiris" }),
  methods: {
    toggleTheme() {
      const bodyNode = document.querySelector("body")
      const tm = new ThemeManager(bodyNode)
      const theme = tm.getCurrentTheme()
      const toggleKey = theme === "dark" ? "light" : "dark"
      tm.applyTheme(toggleKey)
      this.$store.dispatch("theme/change", toggleKey)
    }
  }
}
</script>


