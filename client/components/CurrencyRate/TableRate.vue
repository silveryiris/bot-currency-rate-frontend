<template lang="pug">
.currency-rate-display
  .currency-rate__table
    .currency-rate__row
      .currency-rate__cell Currency
      .currency-rate__cell.currency-rate__cell--number Buying Cash
      .currency-rate__cell.currency-rate__cell--number Buying Spot
      .currency-rate__cell.currency-rate__cell--number Selling Cash
      .currency-rate__cell.currency-rate__cell--number Selling Spot
    .currency-rate__row.currency-rate__row--hoverable(v-for="x in rates")
      .currency-rate__cell {{ x.currency }}
      .currency-rate__cell.currency-rate__cell--number {{ x.buying.cash }}
      .currency-rate__cell.currency-rate__cell--number {{ x.buying.spot }}
      .currency-rate__cell.currency-rate__cell--number {{ x.selling.cash }}
      .currency-rate__cell.currency-rate__cell--number {{ x.selling.spot }}
</template>

<style lang="stylus">
:root
  --color-currency-rate-table-hover #F8BBD0

[data-theme="dark"]
  --color-currency-rate-table-hover #00BCD4

.currency-rate
  &__table
    margin 2rem 0
    width 100%

  &__row
    display grid
    grid-template-columns repeat(5, 1fr)

    &--hoverable
      &:hover
        background var(--color-currency-rate-table-hover)
        cursor pointer

  &__cell
    display flex
    justify-content center
    align-items center
    padding 0.5rem 2rem 0.5rem 0.5rem

    &--number
      justify-content flex-end
</style>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState({
      rates(state) {
        return state.currency.rates
      }
    })
  }
}
</script>
