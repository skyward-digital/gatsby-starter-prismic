import React from 'react'

import Component from './Hero'

export default {
  title: 'Hero',
  component: Hero,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Component {...args} />

export const Hero = Template.bind({})
Hero.args = {}
