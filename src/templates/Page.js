import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import SliceZone from '../components/SliceZone/SliceZone'

const Page = ({ data }) => {
  if (!data) return null
  const document = data.allPrismicPage.edges[0].node
  const prismicNavigation = data.prismicNavigation

  const capitalizeFirstLetter = input => {
    return input[0].toUpperCase() + input.slice(1)
  }

  return (
    <Layout navigation={prismicNavigation}>
      <SEO title={capitalizeFirstLetter(document.uid)} />
      <SliceZone sliceZone={document.data.body} />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($uid: String) {
    allPrismicPage(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          uid
          data {
            body {
              ... on PrismicPageBodyText {
                slice_type
                primary {
                  columns
                  content {
                    raw
                  }
                }
              }
              ... on PrismicPageBodyQuote {
                slice_type
                primary {
                  quote {
                    raw
                  }
                }
              }
              ... on PrismicPageBodyFullWidthImage {
                slice_type
                primary {
                  full_width_image {
                    url
                    thumbnails
                  }
                }
              }
              ... on PrismicPageBodyImageGallery {
                slice_type
                primary {
                  gallery_title {
                    raw
                  }
                }
                items {
                  image {
                    url
                    thumbnails
                    alt
                  }
                  image_description {
                    raw
                  }
                  link {
                    url
                    type
                    uid
                  }
                  link_label {
                    raw
                  }
                }
              }
              ... on PrismicPageBodyImageHighlight {
                slice_type
                primary {
                  featured_image {
                    url
                    thumbnails
                    alt
                  }
                  title {
                    raw
                  }
                  description {
                    raw
                  }
                  link {
                    url
                    type
                    uid
                  }
                  link_label {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
    prismicNavigation {
      ...HeaderQuery
    }
  }
`

export default Page
