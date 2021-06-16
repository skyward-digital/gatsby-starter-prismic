import React from 'react'
import { Link } from '../Link/Link'
import { RichText } from 'prismic-reactjs'

export const Hero = ({ title, description, link, linkLabel }) => (
  <section className='text-white bg-theme -mt-40 mb-32 pt-64 pb-32 text-center'>
    <div className='container mb-32'>
      <div className='text-4xl prose'>{RichText.render(title.raw)}</div>
      {RichText.render(description.raw)}

      {link && (
        <Link to={link} className='btn btn-primary'>
          {RichText.asText(linkLabel.raw)}
        </Link>
      )}
    </div>
  </section>
)
