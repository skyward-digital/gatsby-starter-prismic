const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postsPerPage = 16

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

  pages.data.allPrismicPage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/basic-page.js'),
      context: { ...page },
    })
  })

  /* Create paginated blog list pages */
  const allBlogPosts = await graphql(`
    {
      allPrismicBlogPost(
        sort: { fields: data___publish_date, order: DESC }
        limit: 100
      ) {
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

  const numBlogListPages = Math.ceil(
    allBlogPosts.data.allPrismicBlogPost.nodes.length / postsPerPage
  )
  Array.from({ length: numBlogListPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/blog-list.js'),
      context: {
        limit: i === 0 ? postsPerPage - 3 : postsPerPage, //first page has feature which reduces total by 3
        offset: i === 0 ? 0 : i * postsPerPage - 3, //first page has feature so total is offset by 3
        pageCount: numBlogListPages,
        currentPage: i + 1,
      },
    })
  })

  /* Create blog categories */
  const allBlogCategories = await graphql(`
    {
      allPrismicBlogPost(
        sort: { fields: data___publish_date, order: DESC }
        limit: 100
      ) {
        group(field: data___blog_category___uid) {
          fieldValue
          nodes {
            id
            uid
            lang
            type
            url
          }
        }
      }
    }
  `)

  /* Blog Categories */
  /* loop the groups - /blog/category/tips/ */
  allBlogCategories.data.allPrismicBlogPost.group.forEach((category) => {
    /* Then paginate the blog posts - /blog/category/tips/2/ */
    const numBlogCategoryPages = Math.ceil(
      allBlogPosts.data.allPrismicBlogPost.nodes.length / postsPerPage
    )
    Array.from({
      length: numBlogCategoryPages,
    }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/blog/category/${category.fieldValue}/`
            : `/blog/category/${category.fieldValue}/${i + 1}`,
        component: path.resolve(__dirname, 'src/templates/blog-category.js'),
        context: {
          limit: i === 0 ? postsPerPage - 3 : postsPerPage, //first page has feature which reduces total by 3
          offset: i === 0 ? 0 : i * postsPerPage - 3, //first page has feature so total is offset by 3
          pageCount: numBlogCategoryPages,
          currentPage: i + 1,
          ...category,
        },
      })
    })
  })

  /* Create blog posts */
  const posts = await graphql(`
    {
      allPrismicBlogPost {
        nodes {
          id
          uid
          lang
          type
          url
          data {
            blog_category {
              uid
            }
          }
        }
      }
    }
  `)

  posts.data.allPrismicBlogPost.nodes.forEach((post) => {
    createPage({
      path: `${post.url}/`,
      component: path.resolve(__dirname, 'src/templates/blog-post.js'),
      context: { ...post, category: post.data.blog_category.uid },
    })
  })
}
