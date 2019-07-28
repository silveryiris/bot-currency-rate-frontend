<template lang="pug">
.currency-rate-raw
  a#download-rate-json.currency-rate-raw__download(title="Download JSON file" @click="assignFileName")
    IconCloudDownload.icon-svg.icon-svg--large
    span json
  .currency-rate-raw__list-wrapper(v-for="x in rates")
    pre.currency-rate-raw__list
      | {{ JSON.stringify(x, undefined, 4) }}

</template>

<style lang="stylus">
.currency-rate-raw
  display flex
  flex-direction column
  align-items center

  &__list-wrapper
    display block
    overflow auto
    width 100%

  &__list
    display block
    overflow-y hidden
    box-sizing border-box
    margin 1rem auto
    padding 1rem
    font-family monospace
    line-height 1.5

  &__download
    display flex
    align-items center
    margin 2rem 1rem
    width fit-content
    color var(--color-main-text)
    text-decoration none
    text-transform uppercase
    cursor pointer

@media screen and (max-width: 475px)
  .currency-rate-raw
    &__list
      margin 0.5rem auto
      padding 0 0.5rem
</style>

<script>
import { mapState } from "vuex"
import IconCloudDownload from "@primer/octicons/build/svg/cloud-download.svg"

export default {
  computed: {
    ...mapState("currency", ["rates", "sourceName", "lastUpdate"]),
    downloadFileName() {
      return this.sourceName.replace(".csv", "")
    }
  },
  components: { IconCloudDownload },
  data: () => ({
    downloadId: "#download-rate-json"
  }),
  mounted() {
    const target = this.$el.querySelector(this.downloadId)
    const data = JSON.stringify(this.rates)
    const blob = new Blob([data])
    target.href = URL.createObjectURL(blob)
  },
  methods: {
    assignFileName() {
      const target = this.$el.querySelector(this.downloadId)
      target.download = `${this.downloadFileName}.json`
    }
  }
}
</script>
