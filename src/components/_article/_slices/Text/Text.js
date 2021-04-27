import React from 'react'
import { RichText } from 'prismic-reactjs'
import linkResolver from '../../../../utils/linkResolver'

export const Text = ({ primary: { content } }) => {
  return <RichText render={content.raw} linkResolver={linkResolver} />
}
