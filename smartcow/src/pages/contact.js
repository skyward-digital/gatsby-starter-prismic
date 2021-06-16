import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout/Layout'
import { Hero } from '../components/Hero/Hero'
import { ContactForm } from '../components/ContactForm/ContactForm'
import { SliceZone } from '../components/SliceZone/SliceZone'

const Contact = ({ data }) => {
  if (!data) return null
  const { data: document, lang, url } = data.allPrismicContact.edges[0].node
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
  }

  const contactForm = {
    title: document.form_title,
    description: document.form_description,
    address: document.address,
    telephone: document.telephone,
    email: document.email,
  }

  return (
    <Layout data={prismicLayout.data} seo={seo}>
      <Hero {...hero} />
      <ContactForm {...contactForm} />
      <SliceZone sliceZone={document.body} />
    </Layout>
  )
}

export const query = graphql`
  query Contact {
    allPrismicContact {
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
            form_description {
              raw
            }
            form_title {
              raw
            }
            address {
              raw
            }
            email {
              raw
            }
            telephone {
              raw
            }
            body {
              ... on PrismicContactBodyCustomerLogos {
                slice_type
                items {
                  logo {
                    alt
                    url
                  }
                }
              }
              ... on PrismicContactBodyTestimonial {
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

export default Contact
