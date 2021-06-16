import { RichText } from 'prismic-reactjs'
import React from 'react'

export const Testimonial = ({ primary: { testimonial } }) => {
  const { author, avatar, position, quote } = testimonial.document.data

  return (
    <section className='bg-white overflow-hidden'>
      <div className='relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20'>
        <div className='relative lg:flex lg:items-center'>
          <div className='hidden lg:block lg:flex-shrink-0'>
            <img className='h-64 w-64 rounded-full xl:h-80 xl:w-80' src={avatar.url} alt={avatar.alt} />
          </div>

          <blockquote className='relative lg:ml-10'>
            <div className='text-2xl leading-9 font-medium text-gray-900'>{RichText.asText(quote.raw)}</div>
            <div className='mt-8'>
              <div className='text-base font-medium text-gray-900'>{RichText.asText(author.raw)}</div>
              <div className='text-base font-medium text-indigo-600'>{RichText.asText(position.raw)}</div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
