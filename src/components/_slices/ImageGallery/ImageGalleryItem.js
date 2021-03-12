import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from 'gatsby'

const ImageGalleryItem = ({ image, image_description, link, link_label }) => {
  return (
    <div className='gallery-item'>
      <img src={image.url} alt={image.alt} />
      <RichText render={image_description.raw} />
      {link && (
        <p className='gallery-link'>
          <Link to={link.url}>{RichText.asText(link_label.raw)}</Link>
        </p>
      )}
    </div>
  )
}

export default ImageGalleryItem
