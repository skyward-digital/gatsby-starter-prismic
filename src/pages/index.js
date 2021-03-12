import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero/Hero'
import SliceZone from '../components/SliceZone/SliceZone'

const Homepage = ({ data }) => {
  if (!data) return null
  const document = data.allPrismicHomepage.edges[0].node.data

  const bannerContent = {
    title: document.banner_title,
    description: document.banner_description,
    link: document.banner_link,
    linkLabel: document.banner_link_label,
    background: document.banner_background,
  }

  const prismicNavigation = data.prismicNavigation

  return (
    <Layout isHomepage navigation={prismicNavigation}>
      <SEO title='Home' />
      <Hero bannerContent={bannerContent} />
      <SliceZone sliceZone={document.body} />
    </Layout>
  )
}

export const query = graphql`
  query Homepage {
    allPrismicHomepage {
      edges {
        node {
          data {
            banner_title {
              raw
            }
            banner_description {
              raw
            }
            banner_link {
              url
              type
              uid
            }
            banner_link_label {
              raw
            }
            banner_background {
              url
              thumbnails
              alt
            }
            body {
              ... on PrismicHomepageBodyText {
                slice_type
                primary {
                  columns
                  content {
                    raw
                  }
                }
              }
              ... on PrismicHomepageBodyQuote {
                slice_type
                primary {
                  quote {
                    raw
                  }
                }
              }
              ... on PrismicHomepageBodyFullWidthImage {
                slice_type
                primary {
                  full_width_image {
                    url
                    thumbnails
                  }
                }
              }
              ... on PrismicHomepageBodyImageGallery {
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
              ... on PrismicHomepageBodyImageHighlight {
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

export default Homepage
