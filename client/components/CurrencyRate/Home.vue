<template lang="pug">
.currency-rate-home
  .currency-rate-home__list 
    span API server repository : 
    a(:href="apiRepositoryUrl") {{ apiRepositoryUrl }}
  .currency-rate-home__list
    span Bank of Taiwan data source : 
    a(:href="botSourceUrl") {{ botSourceUrl }}
</template>

<style lang="stylus">
.currency-rate-home
  min-height 50vh

  &__list
    margin 1rem 0
    padding 0 1rem
</style>

<script>
export default {
  data: () => ({
    apiRepositoryUrl: "https://github.com/silveryiris/bot-currency-rate-api-server",
    botSourceUrl: "https://rate.bot.com.tw/xrt?Lang=zh-TW"
  })
}
</script>
