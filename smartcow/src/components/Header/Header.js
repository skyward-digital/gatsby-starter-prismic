import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { Link } from '../Link/Link'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'
const linkResolver = require('../../utils/linkResolver')

export const Header = ({ logo, navigation }) => {
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  return (
    <header className='bg-red-500'>
      <Link to='/'>
        <img className='w-32 h-32' src={logo.url} alt={logo.alt} />
      </Link>
      <div>
        <nav className='h-full flex flex-col md:flex-row w-full justify-start md:justify-between items-center'>
          <div className='flex flex-col md:flex-row gap-2 mt-12 md:mt-0'>
            {navigation.map(({ id, primary: { link, link_label } }) => {
              const current = currentPath === linkResolver(link)

              return (
                <Link key={id} to={link} className={current ? 'font-bold' : null}>
                  <span>{RichText.asText(link_label.raw)}</span>
                </Link>
              )
            })}
          </div>
          <div className='flex flex-col md:flex-row gap-2 mt-32 md:mt-0'>
            <Link to='#' className='btn text-lg md:text-base'>
              Login
            </Link>
            <Link to='#' className='btn text-lg md:text-base order-first md:order-none'>
              Get started for free
            </Link>
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}

export const query = graphql`
  fragment HeaderFragment on PrismicLayoutDataType {
    header_logo {
      url
      alt
      dimensions {
        width
        height
      }
    }
    header_body {
      ... on PrismicLayoutHeaderBodyNav {
        slice_type
        primary {
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
  }
`
