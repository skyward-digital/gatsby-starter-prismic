import React from 'react'

export const FullWidthImage = ({ primary: { full_width_image } }) => (
  <img src={full_width_image.url} alt={full_width_image.alt} />
)
