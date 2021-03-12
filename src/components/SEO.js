import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ description, title }) => (
  <StaticQuery
    query={`${SeoQuery}`}
    render={(data) => {
      const metaTitle = title
        ? `${title} | ${data.site.siteMetadata.title}`
        : data.site.siteMetadata.title
      const metaDescription = description || data.site.siteMetadata.description

      return (
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
        </Helmet>
      )
    }}
  />
)

const SeoQuery = graphql`
query {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`

export default SEO
