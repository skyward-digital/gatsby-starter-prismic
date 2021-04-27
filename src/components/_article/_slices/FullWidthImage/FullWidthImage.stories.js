import React from 'react'

import Component from './FullWidthImage'

export default {
  title: 'Slices/FullWidthImage',
  component: FullWidthImage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Component {...args} />

export const FullWidthImage = Template.bind({})
FullWidthImage.args = {
  primary: {
    full_width_image: {
      url:
        'https://images.prismic.io/getting-started-tutorial/4346f5ac-c050-4849-9893-5c5faf3eab0a_ski-lift-chairs.jpeg?auto=compress%2Cformat&rect=0%2C480%2C3396%2C1040&w=980&h=300',
      alt: 'Prismic Getting started image',
    },
  },
}
