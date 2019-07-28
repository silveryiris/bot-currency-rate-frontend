<template lang="pug">
.currency-rate-raw
  a#download-rate-json.currency-rate-raw__download(title="Download JSON file" @click="assignFileName")
    IconCloudDownload.icon-svg.icon-svg--large
    span json
  pre.currency-rate-raw__list(v-for="x in rates")
    |    {
    |      "currency": "{{x.currency}}"" ,
    |      "buying": {
    |        "cash": "{{x.buying.cash}}",
    |        "spot": "{{x.buying.spot}}",
    |        "forward10Days": "{{x.buying.forward10Days}}",
    |        "forward30Days": "{{x.buying.forward30Days}}",
    |        "forward60Days": "{{x.buying.forward60Days}}",
    |        "forward90Days": "{{x.buying.forward90Days}}",
    |        "forward120Days": "{{x.buying.forward120Days}}",
    |        "forward150Days": "{{x.buying.forward150Days}}"
    |      },
    |      "selling": {
    |        "cash": "{{x.selling.cash}}",
    |        "spot": "{{x.selling.spot}}",
    |        "forward10Days": "{{x.selling.forward10Days}}",
    |        "forward30Days": "{{x.selling.forward30Days}}",
    |        "forward60Days": "{{x.selling.forward60Days}}",
    |        "forward90Days": "{{x.selling.forward90Days}}",
    |        "forward120Days": "{{x.selling.forward120Days}}",
    |        "forward150Days": "{{x.selling.forward150Days}}"          
    |      }
    |    }
</template>

<style lang="stylus">
.currency-rate-raw
  display flex
  flex-direction column
  align-items center

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
