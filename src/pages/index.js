import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout/Layout'
import { Hero } from '../components/Hero/Hero'
import { SliceZone } from '../components/SliceZone/SliceZone'

const Homepage = ({ data }) => {
  if (!data) return null
  const { data: document, lang, url } = data.allPrismicHomepage.edges[0].node
  const prismicLayout = data.prismicLayout

  const seo = {
    meta_title: document.meta_title || prismicLayout.data.meta_title,
    meta_description: document.meta_description || prismicLayout.data.meta_description,
    meta_image: document.meta_image?.url || prismicLayout.data.meta_image?.url,
    url: url,
    article: false,
    lang: lang,
  }

  const hero = {
    title: document.hero_title,
    description: document.hero_description,
    link: document.hero_link,
    linkLabel: document.hero_link_label,
  }

  // console.log(prismicLayout)

  return (
    <Layout data={prismicLayout.data} seo={seo}>
      <Hero {...hero} />
      <SliceZone sliceZone={document.body} />
    </Layout>
  )
}

export const query = graphql`
  query Homepage {
    allPrismicHomepage {
      edges {
        node {
          url
          lang
          data {
            meta_title
            meta_description
            meta_image {
              url
            }
            hero_title {
              raw
            }
            hero_description {
              raw
            }
            hero_link {
              url
              type
              uid
              link_type
            }
            hero_link_label {
              raw
            }
            body {
              ... on PrismicHomepageBodyCustomerLogos {
                slice_type
                items {
                  logo {
                    alt
                    url
                  }
                }
              }
              ... on PrismicHomepageBodyFeatureGrid {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  description {
                    raw
                  }
                }
                items {
                  description {
                    raw
                  }
                  title {
                    raw
                  }
                  icon {
                    url
                    alt
                  }
                }
              }
              ... on PrismicHomepageBodyCallToActionCentered {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  paragraph {
                    raw
                  }
                  button_link {
                    url
                    type
                    uid
                    link_type
                  }
                  button_label {
                    raw
                  }
                }
              }
              ... on PrismicHomepageBodyCallToActionSplit {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  paragraph {
                    raw
                  }
                  button_link {
                    url
                    type
                    uid
                    link_type
                  }
                  button_label {
                    raw
                  }
                  image {
                    url
                    thumbnails
                    alt
                  }
                }
              }
              ... on PrismicHomepageBodyFeaturedBlogList {
                id
                slice_type
                primary {
                  description {
                    raw
                  }
                  title {
                    raw
                  }
                }
                items {
                  blog_post {
                    uid
                    document {
                      ... on PrismicBlogPost {
                        url
                        data {
                          meta_title
                          meta_description
                          meta_image {
                            url
                          }
                          title {
                            raw
                          }
                          description {
                            raw
                          }
                          publish_date
                          featured_image {
                            url
                            alt
                            dimensions {
                              width
                              height
                            }
                          }
                          blog_category {
                            uid
                            document {
                              ... on PrismicBlogCategory {
                                id
                                data {
                                  display_name {
                                    raw
                                  }
                                }
                              }
                            }
                          }
                          author {
                            document {
                              ... on PrismicAuthor {
                                data {
                                  avatar {
                                    url
                                    alt
                                  }
                                  name {
                                    raw
                                    text
                                  }
                                  bio {
                                    raw
                                  }
                                  company {
                                    raw
                                  }
                                  job_title {
                                    raw
                                  }
                                }
                              }
                            }
                          }
                          body {
                            ... on PrismicBlogPostBodyText {
                              slice_type
                              primary {
                                content {
                                  raw
                                  text
                                }
                              }
                            }
                            ... on PrismicBlogPostBodyQuote {
                              slice_type
                              primary {
                                quote {
                                  raw
                                }
                              }
                            }
                            ... on PrismicBlogPostBodyFullWidthImage {
                              slice_type
                              primary {
                                full_width_image {
                                  url
                                  thumbnails
                                }
                              }
                            }
                            ... on PrismicBlogPostBodyNewsletter {
                              slice_type
                              primary {
                                submit_label {
                                  raw
                                }
                                paragraph {
                                  raw
                                }
                                title {
                                  raw
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on PrismicHomepageBodyTestimonial {
                id
                slice_type
                primary {
                  testimonial {
                    document {
                      ... on PrismicTestimonial {
                        id
                        data {
                          quote {
                            raw
                          }
                          author {
                            raw
                          }
                          position {
                            raw
                          }
                          avatar {
                            url
                            alt
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    prismicLayout {
      data {
        ...SeoFragment
        ...HeaderFragment
        ...FooterFragment
      }
    }
  }
`

export default Homepage
