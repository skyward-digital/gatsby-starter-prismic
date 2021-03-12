import React from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'

const ImageHighlight = ({ primary: { title, description, link, link_label, featured_image } }) => (
  <section className='highlight content-section'>
    <div className='highlight-left'>
      <RichText render={title.raw} />
      <RichText render={description.raw} />
      {link && (
        <p>
          <Link to={link.url}>{RichText.asText(link_label.raw)}</Link>
        </p>
      )}
    </div>
    <div className='highlight-right'>
      <img src={featured_image.url} alt={featured_image.alt} />
    </div>
  </section>
)

export default ImageHighlight
