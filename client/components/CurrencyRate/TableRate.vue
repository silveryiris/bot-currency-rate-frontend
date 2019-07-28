<template lang="pug">
.currency-rate-display
  .currency-rate__table
    .currency-rate__row.currency-rate__row-header
      .currency-rate__cell Currency
      .currency-rate__cell.currency-rate__cell--number Buying Cash
      .currency-rate__cell.currency-rate__cell--number Buying Spot
      .currency-rate__cell.currency-rate__cell--number Selling Cash
      .currency-rate__cell.currency-rate__cell--number Selling Spot
    .currency-rate__row.currency-rate__row--hoverable(v-for="x in rates" @click="()=>{true}")
      .currency-rate__cell.currency-rate__currency {{ x.currency }}
      .currency-rate__cell.currency-rate__cell--number(data-title="Buying Cash") {{ x.buying.cash }}
      .currency-rate__cell.currency-rate__cell--number(data-title="Buying Spot") {{ x.buying.spot }}
      .currency-rate__cell.currency-rate__cell--number(data-title="Selling Cash") {{ x.selling.cash }}
      .currency-rate__cell.currency-rate__cell--number(data-title="Selling Spot") {{ x.selling.spot }}
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

  &__row-header
    margin-bottom 0.5rem
    font-weight bold

  &__cell
    display flex
    justify-content center
    align-items center
    padding 0.5rem 2rem 0.5rem 0.5rem

    &--number
      justify-content flex-end

@media screen and (max-width: 475px)
  .currency-rate
    &__row-header
      display none

    &__row
      margin-bottom 2.5rem
      grid-template-columns 1fr

    &__cell
      justify-content center
      padding 0.5rem

    &__cell--number
      &:before
        margin-right 15vw
        content attr(data-title)

    &__currency
      justify-content center
      margin-bottom 0.5rem
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
