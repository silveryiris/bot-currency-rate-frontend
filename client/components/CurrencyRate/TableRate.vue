<template lang="pug">
.currency-rate-table
  p(v-for="x in rates") {{ x }}
</template>

<style lang="stylus"></style>

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
