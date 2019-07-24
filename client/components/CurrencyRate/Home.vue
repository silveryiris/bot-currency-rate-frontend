<template lang="pug">
.currency-rate-home
  CurrencyRateConverter
  .currency-rate-home__list 
    span API server repository : 
    a.link(:href="apiRepositoryUrl") {{ apiRepositoryUrl }}
  .currency-rate-home__list 
    span Frontend repository : 
    a.link(:href="repositoryUrl") {{ repositoryUrl }}
  .currency-rate-home__list
    span Bank of Taiwan data source : 
    a.link(:href="currencyRateSourceUrl") {{ currencyRateSourceUrl }}
</template>

<style lang="stylus">
.currency-rate-home
  min-height 50vh

  &__list
    margin 1rem 0
    padding 0 1rem

@media screen and (max-width: 768px)
  .currency-rate-home
    min-height 20vh
</style>

<script>
import CurrencyRateConverter from "./Converter.vue"

export default {
  components: { CurrencyRateConverter },
  data: () => ({
    repositoryUrl: "https://github.com/silveryiris/bot-currency-rate-frontend",
    apiRepositoryUrl: "https://github.com/silveryiris/bot-currency-rate-api-server",
    currencyRateSourceUrl: "https://rate.bot.com.tw/xrt"
  })
}
</script>
