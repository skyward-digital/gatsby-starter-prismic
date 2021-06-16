import React from 'react'
import { FullWidthImage } from '../_slices/FullWidthImage/FullWidthImage'
import { NewsletterForm } from '../_slices/Newsletter/Newsletter'
import { Quote } from '../_slices/Quote/Quote'
import { Text } from '../_slices/Text/Text'

export const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    full_width_image: FullWidthImage,
    quote: Quote,
    text: Text,
    newsletter: NewsletterForm,
  }

  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (!SliceComponent) return null
    //Slices contain a static section (primary), and a repeating group (items) if available

    return <SliceComponent key={`slice-${index}`} {...slice} />
  })

  return <div>{sliceZoneContent}</div>
}
