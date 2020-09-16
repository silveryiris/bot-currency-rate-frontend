const fs = require("fs")

function getCurrentGitCommitHash() {
  const currentHead = fs.readFileSync(".git/HEAD", "utf8")
  const currentTarget = currentHead.split(":")[1].trim()
  const commitHash = fs.readFileSync(`.git/${currentTarget}`, "utf8")
  const commitHashShort = commitHash.slice(0, 7)
  process.env.VUE_APP_COMMIT_HASH = commitHash
  process.env.VUE_APP_COMMIT_HASH_SHORT = commitHashShort
}

getCurrentGitCommitHash()

module.exports = {
  lintOnSave: true,
  devServer: {
    compress: true,
    proxy: {
      "/api": {
        target: `http://${process.env.VUE_APP_API_URL}`,
        changeOrigin: true,
      },
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg")
    svgRule.uses.clear()

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .options({
        svgo: {
          plugins: [{ removeDimensions: true }, { removeViewBox: false }],
        },
      })
      .end()
  },
}
