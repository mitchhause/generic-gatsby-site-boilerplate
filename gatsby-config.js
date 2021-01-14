const lessToJson = require("less-to-json")
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions: {
          modifyVars: lessToJson("./src/theme/vars.less"),
          javascriptEnabled: true,
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-import",
    //   options: {
    //     libraryName: "antd",
    //     style: true, // or 'css'
    //   },
    // },
    `gatsby-plugin-styled-components`,
  ],
}
