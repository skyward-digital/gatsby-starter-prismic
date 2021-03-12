import React from 'react'

import Component from './Header'

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Component {...args} />

export const Header = Template.bind({})
Header.args = {
  isHomepage: false,
}
