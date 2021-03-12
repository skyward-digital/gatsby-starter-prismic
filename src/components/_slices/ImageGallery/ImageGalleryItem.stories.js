import React from 'react'

import Component from './ImageGalleryItem'

export default {
  title: 'Slices/ImageGalleryItem',
  component: ImageGalleryItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Component {...args} />

export const ImageGalleryItem = Template.bind({})
ImageGalleryItem.args = {
  image: {
    url:
      'https://images.prismic.io/getting-started-tutorial/4346f5ac-c050-4849-9893-5c5faf3eab0a_ski-lift-chairs.jpeg?auto=compress%2Cformat&rect=0%2C480%2C3396%2C1040&w=980&h=300',
    alt: 'Image',
    thumbnails: null,
  },
  image_description: {
    raw: [
      {
        spans: [],
        text: 'Lorem ipsum dolor sit amet',
        type: 'paragraph',
      },
    ],
  },
  link: {
    type: 'page',
    uid: 'more-info',
    url: '/more-info',
  },
  link_label: {
    raw: [
      {
        spans: [],
        text: 'More info',
        type: 'paragraph',
      },
    ],
  },
}
