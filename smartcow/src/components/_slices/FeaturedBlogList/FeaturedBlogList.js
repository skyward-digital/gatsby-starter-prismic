import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { BlogFeedFeatured } from '../../_list/BlogFeedFeatured/BlogFeedFeatured'

/**
 * This is just a wrapper component that passes the correct props to BlogFeedFeatured
 * It also statically gets data in case no posts are provided from Prismic
 */
export const FeaturedBlogList = ({ primary, items }) => {
  const posts = items.map(item => item.blog_post.document)

  if (posts[0] !== null) {
    return <BlogFeedFeatured {...primary} posts={posts} />
  }

  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allPrismicBlogPost(limit: 5, sort: { fields: data___publish_date, order: DESC }) {
            edges {
              node {
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
      `}
      render={data => <BlogFeedFeatured {...primary} posts={data.allPrismicBlogPost.edges.map(edge => edge.node)} />}
    />
  )
}
