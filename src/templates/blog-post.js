import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout/Layout'
import { Content } from '../components/_article/Content/Content'
import { Author } from '../components/_article/Author/Author'
import { Heading } from '../components/_article/Heading/Heading'
import { SliceZone } from '../components/_article/SliceZone/SliceZone'
import { BlogFeedList } from '../components/_list/BlogFeedList/BlogFeedList'
import { calculateReadTime } from '../utils/calculateReadTime'

const Post = ({ data }) => {
  if (!data) return null
  const { data: document, lang, url } = data.allPrismicBlogPost.edges[0].node
  const relatedPosts = data.relatedPosts.edges.map(edge => edge.node)
  const prismicLayout = data.prismicLayout

  const seo = {
    meta_title: document.meta_title || prismicLayout.data.meta_title,
    meta_description: document.meta_description || prismicLayout.data.meta_description,
    meta_image: document.meta_image?.url || prismicLayout.data.meta_image?.url,
    url: url,
    article: false,
    lang: lang,
  }

  const heading = {
    title: document.title,
    featuredImage: document.featured_image,
  }

  const content = {
    description: document.description,
    publishDate: document.publish_date,
    author: document.author.document.data,
    lang,
    readTime: calculateReadTime(document.body),
  }

  return (
    <Layout data={prismicLayout.data} seo={seo}>
      <Heading {...heading} />
      <div className='container xl:max-w-6xl'>
        <div className='my-24'>
          <div className='max-w-2xl mx-auto'>
            <Content {...content} />
            <div className='prose'>
              <SliceZone sliceZone={document.body} />
            </div>
          </div>
        </div>
      </div>
      <Author {...content.author} />
      {relatedPosts.length && <BlogFeedList posts={relatedPosts} />}
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($uid: String, $category: String) {
    allPrismicBlogPost(filter: { uid: { eq: $uid } }) {
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
    relatedPosts: allPrismicBlogPost(filter: { data: { blog_category: { uid: { eq: $category } } } }, limit: 4) {
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
    prismicLayout {
      data {
        ...SeoFragment
        ...HeaderFragment
        ...FooterFragment
      }
    }
  }
`

export default Post
