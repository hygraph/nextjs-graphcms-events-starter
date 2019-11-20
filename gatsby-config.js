module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GraphCMS',
        fieldName: 'cms',
        url: process.env.GATSBY_GRAPHCMS_ENDPOINT,
        headers: {
          Authorization: `Bearer ${process.env.GATSBY_GRAPHCMS_TOKEN}`,
        },
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/main.css'],
      },
    },
  ],
};
