import React from 'react'
import { RichText } from 'prismic-reactjs'
import ImageGalleryItem from './ImageGalleryItem'

const ImageGallery = ({ primary: { gallery_title }, items }) => {
  return (
    <section className='image-gallery content-section'>
      <RichText render={gallery_title.raw} />
      <div className='gallery'>
        {items.map((item, index) => (
          <ImageGalleryItem key={`gallery-item=${index}`} {...item} />
        ))}
      </div>
    </section>
  )
}

export default ImageGallery
