import React from 'react'
import { RichText } from 'prismic-reactjs'

export const Features = ({ primary: { title, description }, items }) => (
  <section className='bg-indigo-700'>
    <div className='container py-16 sm:pt-20 sm:pb-24'>
      <div className='text-3xl font-extrabold text-white tracking-tight'>{RichText.render(title.raw)}</div>
      <div className='mt-4 max-w-3xl text-lg text-indigo-200'>{RichText.render(description.raw)}</div>
      <div className='mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16'>
        {items.map(({ title, description, icon }, index) => (
          <div key={index}>
            <div>
              <span className='flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10'>
                <img src={icon.url} alt={icon.alt} />
              </span>
            </div>
            <div className='mt-6'>
              <h3 className='text-lg font-medium text-white'>{RichText.asText(title.raw)}</h3>
              <div className='mt-2 text-base text-indigo-200'>{RichText.render(description.raw)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
