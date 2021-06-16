import React from 'react'

import Component from './Layout'

export default {
  title: 'Layout',
  component: Layout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = args => <Component {...args} />

export const Layout = Template.bind({})
Layout.args = {
  isHomepage: false,
}
