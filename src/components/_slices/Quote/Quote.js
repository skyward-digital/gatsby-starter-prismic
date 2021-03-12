import React from 'react'
import { RichText } from 'prismic-reactjs'

const Quote = ({ primary: { quote } }) => (
  <section className='content-section quote'>
    <blockquote>{RichText.asText(quote.raw)}</blockquote>
  </section>
)

export default Quote
