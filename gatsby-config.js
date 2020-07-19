module.exports = {
  siteMetadata: {
    title: `Puskemas Pasir Limau Kapas`,
    description: `This a very first prototype of plasmox`,
    author: `@azharie_muhammad`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/static/fonts`
      }
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        rule: {
          include: `${__dirname}/src/assets/images`
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#57CCF6`,
        theme_color: `#57CCF6`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-emotion`
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Nunito', 'sans-serif'],
          urls: [`${__dirname}/static/fonts.css`]
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
