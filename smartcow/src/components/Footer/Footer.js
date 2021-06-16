import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { Link } from '../Link/Link'
import { NewsletterForm } from '../NewsletterForm/NewsletterForm'
// import { Socials } from '../Socials/Socials'

export const Footer = ({ logo, linkGroups, socials }) => {
  return (
    <footer className='bg-white'>
      <div className='container'>
        <div className='flex flex-wrap justify-between py-8'>
          <div className='w-48 my-8'>
            {/* <img src={logo.url} alt={logo.alt} width={logo.dimensions.width} height={logo.dimensions.height} /> */}
          </div>
          <div className='flex my-8'>
            {linkGroups.map(({ id, primary: { list_title }, items }) => (
              <ul key={id} className='w-48'>
                <p className='font-semibold mb-4'>{RichText.asText(list_title.raw)}</p>
                {items.map(({ link, link_label }, index) => (
                  <li key={index} className='my-2'>
                    <Link
                      to={link}
                      className='text-gray-800 hover:text-black focus:text-black no-underline hover:underline focus:underline'
                    >
                      {RichText.asText(link_label.raw)}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className='w-auto my-8 flex flex-col justify-between'>
            <div className='mb-6'>
              <p className='font-semibold mb-4'>Join the newsletter</p>
              <NewsletterForm />
            </div>
            <div className='self-end'>{/* <Socials socials={socials} /> */}</div>
          </div>
        </div>
      </div>
      <div className='py-6'>
        <div className='container'>
          <p className='text-sm text-gray-700'>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

export const query = graphql`
  fragment FooterFragment on PrismicLayoutDataType {
    # footer_logo {
    #   url
    #   alt
    #   dimensions {
    #     width
    #     height
    #   }
    # }
    footer_body {
      ... on PrismicLayoutFooterBodyListOfArticles {
        id
        primary {
          list_title {
            raw
          }
        }
        items {
          link {
            url
            link_type
            type
            uid
          }
          link_label {
            raw
          }
        }
      }
    }
    github {
      url
      uid
      link_type
    }
    linkedin {
      url
      uid
      link_type
    }
    twitter {
      url
      uid
      link_type
    }
    instagram {
      url
      uid
      link_type
    }
  }
`
