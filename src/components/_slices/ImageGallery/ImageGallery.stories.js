import React from 'react'

import Component from './ImageGallery'
import { ImageGalleryItem } from './ImageGalleryItem.stories'

export default {
  title: 'Slices/ImageGallery',
  component: ImageGallery,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Component {...args} />

export const ImageGallery = Template.bind({})
ImageGallery.args = {
  primary: {
    gallery_title: {
      raw: [
        {
          spans: [],
          text: 'Lorem ipsum dolor sit amet',
          type: 'paragraph',
        },
      ],
    },
  },
  items: [ImageGalleryItem.args, ImageGalleryItem.args],
}
