import React from 'react'

import Component from './ImageHighlight'

export default {
  title: 'Slices/ImageHighlight',
  component: ImageHighlight,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Component {...args} />

export const ImageHighlight = Template.bind({})
ImageHighlight.args = {
  primary: {
    title: {
      raw: [
        {
          spans: [],
          text: 'Lorem ipsum dolor sit amet',
          type: 'paragraph',
        },
      ],
    },
    description: {
      raw: [
        {
          spans: [],
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    featured_image: {
      url:
        'https://images.prismic.io/getting-started-tutorial/4346f5ac-c050-4849-9893-5c5faf3eab0a_ski-lift-chairs.jpeg?auto=compress%2Cformat&rect=0%2C480%2C3396%2C1040&w=980&h=300',
      alt: 'Image',
      thumbnails: null,
    },
  },
}
