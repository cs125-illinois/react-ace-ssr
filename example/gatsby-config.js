module.exports = {
  plugins: [
    {
      resolve: "gatsby-alias-imports",
      options: {
        aliases: {
          react: "./node_modules/react",
          "react-ace-ssr": "..",
        },
      },
    },
  ],
}
