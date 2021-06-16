import React from 'react'

import Component from './Footer'

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Component {...args} />

export const Footer = Template.bind({})
Footer.args = {}
