exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    externals: {
      jsdom: "jsdom",
    },
  })
}
