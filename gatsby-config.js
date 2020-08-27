require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Hummingbird Recording`,
    description: `Professional Studio in Vicksburg, MS`,
    author: `@gatsbyjs`,
    menuLinks: [
      {
        name: 'Home', 
        link: '/'
      }, 
      {
        name: 'About', 
        link: '/about'
      },
      {
        name: 'Shop', 
        link: '/shop'
      }, 
      {
        name: 'Book', 
        link: '/book'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-shopify`, 
      options: {
        shopName: process.env.GATSBY_SHOP_NAME, 
        accessToken: process.env.GATSBY_STOREFRONT_TOKEN
      }
    }, 
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
