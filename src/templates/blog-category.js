import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout/Layout'
import SEO from '../components/SEO'
import { BlogFeedFeatured } from '../components/_list/BlogFeedFeatured/BlogFeedFeatured'
import { BlogFeedList } from '../components/_list/BlogFeedList/BlogFeedList'
import { BlogFeedPagination } from '../components/_list/BlogFeedPagination/BlogFeedPagination'
import { SliceZone } from '../components/SliceZone/SliceZone'

const BlogCategory = ({ data, pageContext: { currentPage } }) => {
  if (!data) return null
  const { data: document, lang, url } = data.allPrismicBlogCategory.edges[0].node
  const postsInfo = data.allPrismicBlogPost.group[0].pageInfo
  const posts = data.allPrismicBlogPost.group[0].edges.map(edge => edge.node)
  const isFirst = currentPage === 1
  const prismicLayout = data.prismicLayout

  const topPosts = posts.slice(0, isFirst ? 5 : 8)
  const bottomPosts = posts.slice(isFirst ? 5 : 8, posts.length)

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

  return (
    <Layout data={prismicLayout.data} seo={seo}>
      {isFirst ? <BlogFeedFeatured {...hero} posts={topPosts} /> : <BlogFeedList {...hero} posts={topPosts} />}
      <SliceZone sliceZone={document.body} />
      {bottomPosts.length && <BlogFeedList posts={bottomPosts} />}
      <BlogFeedPagination
        prev={postsInfo.hasPreviousPage ? currentPage - 1 : null}
        next={postsInfo.hasNextPage ? currentPage + 1 : null}
      />
      <SliceZone sliceZone={document.preFooterSlices} />
    </Layout>
  )
}

export const query = graphql`
  query BlogCategoryQuery($fieldValue: String, $limit: Int!, $offset: Int!) {
    allPrismicBlogCategory(filter: { uid: { eq: $fieldValue } }) {
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
            body {
              ... on PrismicBlogCategoryBodyCallToActionCentered {
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
              ... on PrismicBlogCategoryBodyCallToActionSplit {
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
            }
            preFooterSlices {
              ... on PrismicBlogCategoryPreFooterSlicesCustomerLogos {
                slice_type
                items {
                  logo {
                    alt
                    url
                  }
                }
              }
              ... on PrismicBlogCategoryPreFooterSlicesFeatureGrid {
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
              ... on PrismicBlogCategoryPreFooterSlicesCallToActionCentered {
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
              ... on PrismicBlogCategoryPreFooterSlicesCallToActionSplit {
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
              ... on PrismicBlogCategoryPreFooterSlicesTestimonial {
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
              ... on PrismicBlogCategoryPreFooterSlicesNewsletter {
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
    allPrismicBlogPost(limit: $limit, skip: $offset) {
      group(field: data___blog_category___uid) {
        pageInfo {
          hasNextPage
          pageCount
          hasPreviousPage
        }
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

export default BlogCategory
