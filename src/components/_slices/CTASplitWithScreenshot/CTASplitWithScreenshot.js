import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from '../../Link/Link'

export const CTASplitWithScreenshot = ({ primary: { title, paragraph, button_link, button_label, image } }) => (
  <section className='bg-white'>
    <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
      <div className='bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4'>
        <div className='pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20'>
          <div className='lg:self-center'>
            <div className='text-3xl font-extrabold text-white sm:text-4xl'>{RichText.render(title.raw)}</div>
            <div className='mt-4 text-lg leading-6 text-indigo-200'>{RichText.render(paragraph.raw)}</div>
            <Link to={button_link} className='btn btn-primary'>
              {RichText.asText(button_label.raw)}
            </Link>
          </div>
        </div>
        <div className='-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1'>
          <img
            className='transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20'
            src={image.url}
            alt={image.alt}
          />
        </div>
      </div>
    </div>
  </section>
)
