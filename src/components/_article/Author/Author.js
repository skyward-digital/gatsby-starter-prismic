import { RichText } from 'prismic-reactjs'
import React from 'react'

export const Author = ({ name, bio, avatar, company, job_title }) => (
  <section className='bg-white overflow-hidden'>
    <div className='relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20'>
      <div className='relative lg:flex lg:items-center'>
        <div className='hidden lg:block lg:flex-shrink-0'>
          <img className='h-64 w-64 rounded-full xl:h-80 xl:w-80' src={avatar.url} alt={avatar.alt} />
        </div>

        <div className='relative lg:ml-10'>
          <div className='text-2xl leading-9 font-medium text-gray-900'>{RichText.asText(bio.raw)}</div>
          <div className='mt-8'>
            <div className='text-base font-medium text-gray-900'>{RichText.asText(name.raw)}</div>
            <div className='text-base font-medium text-indigo-600'>
              {RichText.asText(job_title.raw)} <span>at</span> {RichText.asText(company.raw)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
