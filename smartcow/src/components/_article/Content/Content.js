import React from 'react'
import { RichText } from 'prismic-reactjs'
import { SliceZone } from '../SliceZone/SliceZone'

export const Content = ({ description, publishDate, author, lang, readTime }) => (
  <div>
    <div className='flex gap-8 mb-6'>
      <div className='flex items-center gap-3 text-gray-500'>
        <div className='flex gap-4 items-center'>
          <img src={author.avatar.url} alt={author.avatar.alt} width={32} height={32} className='rounded-full' />
          <p className='text-lg font-semibold'>{RichText.asText(author.name.raw)}</p>
        </div>

        <p className='text-xs mb-0'>
          {new Date(publishDate).toLocaleDateString(lang, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
      <div className='flex items-center gap-3 text-gray-500'>
        <p className='text-xs mb-0'>{readTime} min read</p>
      </div>
    </div>
    <div>{RichText.render(description.raw)}</div>
  </div>
)
