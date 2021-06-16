import React from 'react'
import { RichText } from 'prismic-reactjs'

export const Heading = ({ title, featuredImage }) => (
  <div className='container xl:max-w-6xl'>
    <div className='my-24'>
      <div className='mb-20 items-center gap-4 py-8'>
        <h1 className='text-4xl md:text-5xl mb-8'>{RichText.asText(title.raw)}</h1>

        <img
          src={featuredImage.url}
          alt={featuredImage.alt}
          width={featuredImage.dimensions.width}
          height={featuredImage.dimensions.height}
          className='rounded-lg'
        />
      </div>
    </div>
  </div>
)
