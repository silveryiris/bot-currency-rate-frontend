<template lang="pug">
footer.footer
  section.footer__source-section
    .footer__title Source
    a.link.footer__last-commit(
      :href="`https://github.com/silveryiris/bot-currency-rate-frontend/commit/${commitHash}`",
      aria-label="github"
    )
      IconMarkGithub.icon-svg.icon-svg--medium.footer__icon
      span {{ commitHashShort }}
</template>

<script>
import IconMarkGithub from "@primer/octicons/build/svg/mark-github-16.svg"

export default {
  data: () => ({ commitHash: process.env.VUE_APP_COMMIT_HASH, commitHashShort: process.env.VUE_APP_COMMIT_HASH_SHORT }),
  components: { IconMarkGithub },
}
</script>

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
    margin 0 0.5rem
    fill var(--color-main-text)

  &__last-commit
    display flex
    justify-content center
    align-items center
</style>
