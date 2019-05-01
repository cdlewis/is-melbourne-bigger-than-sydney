module.exports = {
  pathPrefix: 'is-melbourne-bigger-than-sydney',
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat:400,700", "Permanent Marker"],
        },
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
  ],
}
