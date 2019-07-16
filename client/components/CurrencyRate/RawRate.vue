<template lang="pug">
.currency-rate-raw
  p(v-for="x in rates") {{ x }}
  a#download-rate-json.currency-rate-raw__download(title="Download JSON file")
    IconCloudDownload.icon-svg.icon-svg--large
    span json
</template>

<style lang="stylus">
.currency-rate-raw
  &__download
    display flex
    align-items center
    margin 2rem 1rem
    width fit-content
    color var(--color-main-text)
    text-decoration none
    text-transform uppercase
    cursor pointer
</style>

<script>
import { mapState } from "vuex"
import IconCloudDownload from "@primer/octicons/build/svg/cloud-download.svg"

export default {
  computed: {
    ...mapState("currency", ["rates", "sourceName"]),
    dowloadFileName() {
      return this.sourceName
    }
  },
  components: { IconCloudDownload },
  mounted() {
    const target = this.$el.querySelector("#download-rate-json")
    const data = JSON.stringify(this.rates)
    const blob = new Blob([data])
    target.download = `${this.dowloadFileName}.json`
    target.href = URL.createObjectURL(blob)
  }
}
</script>
