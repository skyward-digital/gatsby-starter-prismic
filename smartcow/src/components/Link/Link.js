import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link as PrismicLink } from 'prismic-reactjs'
const linkResolver = require('../../utils/linkResolver')

export const Link = ({ to: link, children, ...rest }) => {
  //Standard link
  if (typeof link === 'string') {
    if (link[0] === '/') {
      return (
        <GatsbyLink to={link} {...rest}>
          {children}
        </GatsbyLink>
      )
    }

    return (
      <a href={link} {...rest}>
        {children}
      </a>
    )
  }

  //Prismic Link
  if (link.link_type === 'Web') {
    //Same page anchor links
    if (link.url.includes('://#')) {
      const anchor = link.url.split('://')[1]
      return (
        <a href={anchor} {...rest}>
          {children}
        </a>
      )
    }

    return (
      <a href={PrismicLink.url(link, linkResolver)} {...rest}>
        {children}
      </a>
    )
  }

  if (link.link_type === 'Document') {
    return (
      <GatsbyLink to={linkResolver(link)} {...rest}>
        {children}
      </GatsbyLink>
    )
  }

  if (link.link_type === 'Image') {
    return (
      <a href={PrismicLink.url(link, linkResolver)} {...rest}>
        {children}
      </a>
    )
  }

  return null
}
