import React from 'react'
import { App } from '../App'
import { SEO } from '../SEO'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export const Layout = ({ seo, data, children, ...rest }) => {
  const header = {
    logo: data.header_logo,
    navigation: data.header_body,
  }

  const footer = {
    logo: data.footer_logo,
    linkGroups: data.footer_body,
    socials: [
      { type: 'twitter', ...data.twitter },
      { type: 'linkedin', ...data.linkedin },
      { type: 'instagram', ...data.instagram },
      { type: 'github', ...data.github },
    ],
  }

  return (
    <App {...rest}>
      <SEO {...seo} />
      <Header {...header} />
      <main>{children}</main>
      <Footer {...footer} />
    </App>
  )
}
