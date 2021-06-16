import React from 'react'
import { RichText } from 'prismic-reactjs'

export const NewsletterForm = ({ primary: { title, paragraph, submit_label } }) => (
  <section>
    <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
      <div className='text-3xl font-extrabold text-white sm:text-4xl'>{RichText.render(title.raw)}</div>
      <div className='mt-4 text-lg leading-6 text-indigo-200'>{RichText.render(paragraph.raw)}</div>
      {/* TODO: This needs to submit to activecampaign */}
      <form>
        <input type='text' className='bg-gray-400' />
        <button type='submit'>{RichText.asText(submit_label.raw)}</button>
      </form>
    </div>
  </section>
)
