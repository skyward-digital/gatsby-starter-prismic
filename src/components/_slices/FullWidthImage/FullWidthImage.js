import React from 'react'

const FullWidthImage = ({ primary: { full_width_image } }) => (
  <section className='full-width-image content-section'>
    <img src={full_width_image.url} alt={full_width_image.alt} />
  </section>
)

export default FullWidthImage
