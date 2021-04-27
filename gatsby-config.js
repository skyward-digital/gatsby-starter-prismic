const linkResolver = require('./src/utils/linkResolver')

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Prismic Tutorial',
    description: 'Learn how to integrate Prismic into your Gatsby project.',
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'marketing-starter',
        linkResolver: () => doc => linkResolver(doc),
        schemas: {
          author: require('./custom_types/author.json'),
          blog_category: require('./custom_types/blog_category.json'),
          blog_list: require('./custom_types/blog_list.json'),
          blog_post: require('./custom_types/blog_post.json'),
          contact: require('./custom_types/contact.json'),
          homepage: require('./custom_types/homepage.json'),
          layout: require('./custom_types/layout.json'),
          page: require('./custom_types/page.json'),
          testimonial: require('./custom_types/testimonial.json'),
        },
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`Inter\:400,400,700,700i,900`],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
