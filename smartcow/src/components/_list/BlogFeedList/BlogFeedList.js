import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from '../../../components/Link/Link'
import { calculateReadTime } from '../../../utils/calculateReadTime'

export const BlogFeedList = ({ title, description, posts, lang = 'en-us' }) => (
  <div>
    <section className='-mt-40 mb-32 pt-64 pb-32 text-center'>
      <div className='container mb-32'>
        <div className='text-4xl'>{RichText.render(title?.raw)}</div>
        {RichText.render(description?.raw)}
        Posts below
        {posts.map(post => (
          <div>
            <Link to={post.url}>
              {RichText.render(post.data.title.raw)}
              <div>
                <img src={post.data.author.document.data.avatar.url} alt={post.data.author.document.data.avatar.alt} />
                <p>
                  {RichText.render(post.data.author.document.data.name.raw)}
                  {post.data.blog_category.document && (
                    <span> in {RichText.render(post.data.blog_category.document.data.display_name.raw)}</span>
                  )}
                </p>
              </div>
              {new Date(post.data.publish_date).toLocaleDateString(lang, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              <br />
              {calculateReadTime(post.data.body)} min read
            </Link>
          </div>
        ))}
      </div>
    </section>
  </div>
)
