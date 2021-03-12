import React from 'react'

import Component from './Quote'

export default {
  title: 'Slices/Quote',
  component: Quote,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Component {...args} />

export const Quote = Template.bind({})
Quote.args = {
  primary: {
    quote: {
      raw: [
        {
          spans: [],
          text: 'Lorem ipsum dolor sit amet',
          type: 'paragraph',
        },
      ],
    },
  },
}
