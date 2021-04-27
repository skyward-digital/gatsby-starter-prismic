import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

export const SEO = ({ meta_title, meta_description, meta_image, url, article, author, lang }) => {
  const absoluteUrl = `https://mycontentpal.com/${url ? url : ''}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={meta_title}
      // titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: meta_description,
        },
        {
          property: `og:title`,
          content: meta_title,
        },
        {
          property: `og:description`,
          content: meta_description,
        },
        {
          property: `og:type`,
          content: article ? 'article' : 'website',
        },
        { name: `og:image`, content: meta_image },
        { name: `og:image:alt`, content: meta_title },
        { name: `og:url`, content: absoluteUrl },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: meta_title,
        },
        {
          name: `twitter:description`,
          content: meta_description,
        },
        {
          name: `twitter:image`,
          content: meta_image,
        },
        {
          name: `twitter:image:alt`,
          content: meta_title,
        },
      ]}
    />
  )
}

export const query = graphql`
  fragment SeoFragment on PrismicLayoutDataType {
    meta_title
    meta_description
    meta_image {
      url
    }
  }
`
