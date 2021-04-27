import React from 'react'
import { RichText } from 'prismic-reactjs'

export const Quote = ({ primary: { quote } }) => <blockquote>{RichText.asText(quote.raw)}</blockquote>
