const path = require('path')
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  // https://tailwindcss.com/docs/guides/gatsby#enable-gatsby-plugin-postcss
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-fontawesome-css',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, 'src/components')
        },
        extensions: []
      }
    }
  ],
};
