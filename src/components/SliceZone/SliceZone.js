import React from 'react'
import FullWidthImage from '../_slices/FullWidthImage/FullWidthImage'
import ImageGallery from '../_slices/ImageGallery/ImageGallery'
import ImageHighlight from '../_slices/ImageHighlight/ImageHighlight'
import Quote from '../_slices/Quote/Quote'
import Text from '../_slices/Text/Text'

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    full_width_image: FullWidthImage,
    image_gallery: ImageGallery,
    image_highlight: ImageHighlight,
    quote: Quote,
    text: Text,
  }

  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      //Slices contain a static section (primary), and a repeating group (items) if available
      return <SliceComponent key={`slice-${index}`} {...slice} />
    }
    return null
  })

  return <main className='container'>{sliceZoneContent}</main>
}

export default SliceZone
