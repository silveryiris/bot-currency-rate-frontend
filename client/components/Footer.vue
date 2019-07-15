<template lang="pug">
footer.footer
  section.footer__source-section
    .footer__title Source
    a.link(href="https://github.com/silveryiris/bot-currency-rate-frontend" aria-label="github")
      IconMarkGithub.icon-svg.icon-svg--large.footer__icon
</template>
<style lang="stylus">
.footer
  display grid
  align-items center
  margin 1rem 0 0 0
  padding-bottom 1rem
  grid-template-columns repeat(5, 1fr)

  &__title
    margin-bottom 1rem
    text-transform uppercase
    font-weight bold

  &__source-section
    justify-self center
    grid-column 3

  &__icon
    margin 0 1rem
    fill var(--color-main-text)
</style>
<script>
import IconMarkGithub from "@primer/octicons/build/svg/mark-github.svg"

export default {
  components: { IconMarkGithub }
}
</script>
