import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from '../../../components/Link/Link'

export const BlogFeedFeatured = ({ title, description, posts }) => (
  <div>
    <section className='text-white bg-blue-700 -mt-40 mb-32 pt-64 pb-32 text-center'>
      <div className='container mb-32'>
        <div className='text-4xl'>{RichText.render(title.raw)}</div>
        {RichText.render(description.raw)}

        <div className='text-xl'>
          <Link to={posts[0].url}>{RichText.asText(posts[0].data.title.raw)}</Link>
        </div>

        {posts.slice(1, posts.length).map(post => (
          <div>
            <Link to={post.url}>{RichText.asText(post.data.title.raw)}</Link>
          </div>
        ))}
      </div>
    </section>
  </div>
)
