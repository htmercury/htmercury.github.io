module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Ka Wong — Software Engineer`,
    description: `Full-stack engineer with 5+ years of experience building healthcare platforms at scale. Specializing in React, TypeScript, and Next.js.`,
    author: `@htmercury`,
    siteUrl: 'https://www.htmercury.me/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `htmercury portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/cubicle.svg`, // This path is relative to the root of the site.
      },
    },
    // "gatsby-plugin-svgr", // disabled — all SVGs used as img src, not React components
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-layout`,
    'gatsby-plugin-cname',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
