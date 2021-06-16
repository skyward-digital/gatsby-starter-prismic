import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from '../../Link/Link'

export const CTASimpleCentered = ({ primary: { title, paragraph, button_link, button_label } }) => (
  <section className='bg-indigo-700'>
    <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
      <div className='text-3xl font-extrabold text-white sm:text-4xl'>{RichText.render(title.raw)}</div>
      <div className='mt-4 text-lg leading-6 text-indigo-200'>{RichText.render(paragraph.raw)}</div>
      <Link to={button_link} className='btn btn-primary'>
        {RichText.asText(button_label.raw)}
      </Link>
    </div>
  </section>
)
