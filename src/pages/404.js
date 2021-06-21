import React from 'react'
import { graphql } from 'gatsby'
// import { withUnpublishedPreview } from 'gatsby-source-prismic'
// import HomepageTemplate from './index'
// import ContactTemplate from './contact'
// import BasicPageTemplate from '../templates/basic-page'
// import BlogCategoryTemplate from '../templates/blog-category'
// import BlogListTemplate from '../templates/blog-list'
// import BlogPostTemplate from '../templates/blog-post'
// import PricingPageTemplate from '../templates/pricing-page'
// import ServiceTemplate from '../templates/service'
import { Layout } from '../components/Layout/Layout'
import { Link } from '../components/Link/Link'

const NotFoundPage = ({ data }) => {
  if (!data) return null
  const prismicLayout = data.prismicLayout

  const seo = {
    meta_title: prismicLayout.data.meta_title,
    meta_description: prismicLayout.data.meta_description,
    meta_image: prismicLayout.data.meta_image?.url,
    article: false,
  }

  return (
    <Layout className="my-32 xl:my-48" data={prismicLayout.data} seo={seo}>
      <div className="container flex-1">
        <div className="prose text-center mx-auto">
          <h1>
            <strong className="text-9xl">404</strong>
          </h1>
          <p className="text-xl text-paragraph">
            We can't seem to find the page you're looking for.
          </p>
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query NotFoundPageQuery {
    prismicLayout {
      data {
        ...SeoFragment
        ...HeaderFragment
        ...FooterFragment
      }
    }
  }
`

export default NotFoundPage
// export default withUnpublishedPreview(NotFoundPage, {
//   templateMap: {
//     homepage: HomepageTemplate,
//     contact: ContactTemplate,
//     page: BasicPageTemplate,
//     blog_category: BlogCategoryTemplate,
//     blog_list: BlogListTemplate,
//     blog_post: BlogPostTemplate,
//     pricing_page: PricingPageTemplate,
//     service: ServiceTemplate,
//   },
// })
