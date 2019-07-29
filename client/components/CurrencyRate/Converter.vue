<template lang="pug">
.currency-rate-converter
  .currency-rate-converter__calc
    .currency-rate-converter__item-group
      input.input.currency-rate-converter__base-input(
        type="number" 
        min=0 
        @input="updateSourceToTargetCurrency($event.target.value)" 
        :value="currencyNumber"
        aria-label="base currency input"
      )
      span.currency-rate-converter__base-currency {{ baseCurrency }}
    .currency-rate-converter__item-group
      span.currency-rate-converter__equal-mark =
    .currency-rate-converter__item-group
      input.input.currency-rate-converter__target-input(
        type="number"
        min=0 
        @input="updateTargetToSourceCurrency($event.target.value)" 
        :value="targetCurrencyNumber"
        aria-label="target currency input"
      )
      select.input.currency-rate-converter__target-currency-select(v-model="selectedCurrencyCode" @change="changeTargetCurrency" aria-label="select target currency")
        option(v-for="code in currencyCodeList" :value="code") {{ code }}
  .currency-rate-converter__notes
    span *Calculate currencies are base on Bank of Taiwan Spot selling price.
</template>

<style lang="stylus">
.currency-rate-converter
  display flex
  flex-direction column
  margin 3rem 0

  &__calc
    display flex
    justify-content center
    align-items center

  &__notes
    display block
    margin 2rem 0
    text-align center
    font-size 0.75rem

  &__base-currency
    margin 0 1rem

  &__equal-mark
    margin 0 1rem 0 0
    text-align center
    font-weight bold

  &__convert-result
    margin 0 1rem

  &__item-group
    display flex
    justify-content center
    align-items center

@media screen and (max-width: 475px)
  .currency-rate-converter
    margin 5rem 0

    &__calc
      display flex
      flex-direction column
      align-items inherit
      box-sizing border-box
      padding 0 0.5rem

    &__base-currency
      margin 0 0 0 0.5rem
      font-size 1.4rem

    &__equal-mark
      margin 1rem 0
      font-size 1.8rem

    &__target-currency-select
      margin-left 0.5rem
      font-size 1.4rem

    &__notes
      margin-top 2rem
      margin-bottom 0

    &__base-input, &__target-input
      width 100%
      font-size 1.4rem
      line-height 1.4rem
</style>

<script>
import { mapState, mapGetters } from "vuex"

export default {
  computed: {
    ...mapState("currency", ["baseCurrency", "rates"]),
    ...mapGetters("currency", ["currencyCodeList"]),
    selectedCurrencyRate() {
      const [result] = this.rates.filter(x => x.currency === this.selectedCurrencyCode)
      return result
    },
    spotSellingRate() {
      return this.selectedCurrencyRate.selling.spot
    },
    spotBuyingRate() {
      return this.selectedCurrencyRate.buying.spot
    }
  },
  mounted() {
    // vuex state is not ready when mounted
    if (this.rates.length > 0) {
      this.initialized = true
      this.updateSourceToTargetCurrency(1)
    }
  },
  beforeUpdate() {
    if (this.initialized !== true) {
      this.initialized = true
      this.updateSourceToTargetCurrency(1)
    }
  },
  data: () => ({
    initialized: false,
    currencyNumber: 0,
    targetCurrencyNumber: 0,
    selectedCurrencyCode: "JPY"
  }),
  methods: {
    updateSourceToTargetCurrency(value) {
      this.currencyNumber = value
      this.targetCurrencyNumber = (this.currencyNumber / this.spotSellingRate).toFixed(5)
    },
    updateTargetToSourceCurrency(value) {
      this.targetCurrencyNumber = value
      this.currencyNumber = (this.targetCurrencyNumber * this.spotSellingRate).toFixed(5)
    },
    changeTargetCurrency() {
      this.updateTargetToSourceCurrency(this.targetCurrencyNumber)
    }
  }
}
</script>
