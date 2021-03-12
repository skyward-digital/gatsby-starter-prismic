import React from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'

const HomepageBanner = ({ bannerContent }) => (
  <section
    className='homepage-banner'
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${bannerContent.background.url})`,
    }}
  >
    <div className='banner-content container'>
      <h2 className='banner-title'>{RichText.asText(bannerContent.title.raw)}</h2>
      <p className='banner-description'>{RichText.asText(bannerContent.description.raw)}</p>
      <Link to={bannerContent.link.url} className='banner-button'>
        {RichText.asText(bannerContent.linkLabel.raw)}
      </Link>
    </div>
  </section>
)

export default HomepageBanner
