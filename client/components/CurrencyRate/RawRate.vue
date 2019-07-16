<template lang="pug">
.currency-rate-raw
  .currency-rate-raw__list(v-for="x in rates") {{ x }}
  a#download-rate-json.currency-rate-raw__download(title="Download JSON file" @click="assignFileName")
    IconCloudDownload.icon-svg.icon-svg--large
    span json
</template>

<style lang="stylus">
.currency-rate-raw
  &__list
    display block
    margin 1rem 0
    padding 0 1rem

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
