import React from 'react'

export const CustomerLogos = ({ items }) => (
  <section>
    <div className='container py-10'>
      <div className='flex'>
        {items.map(({ logo }, index) => (
          <img key={index} src={logo.url} alt={logo.alt} />
        ))}
      </div>
    </div>
  </section>
)
