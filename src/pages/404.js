import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title='Not found' />
    <div className='container'>
      <h1>Oh no!</h1>
      <h3>We can't seem to find the page you're looking for.</h3>
      <br />
    </div>
  </Layout>
)

export default NotFoundPage
