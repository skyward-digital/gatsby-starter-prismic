const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicPage {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
    }
  `)

  pages.data.allPrismicPage.nodes.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/Page.js'),
      context: { ...page },
    })
  })
}
