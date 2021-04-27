import React from 'react'
import { RichText } from 'prismic-reactjs'
import { PhoneIcon, MailIcon } from '@heroicons/react/solid'

export const ContactForm = ({ title, description, address, telephone, email }) => {
  console.log(telephone)
  return (
    <div className='relative bg-theme'>
      <div className='relative max-w-7xl mx-auto lg:grid lg:grid-cols-5'>
        <div className='py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
          <div className='max-w-lg mx-auto'>
            <div className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
              {RichText.render(title.raw)}
            </div>
            <div className='mt-3 text-lg leading-6 text-gray-500'>{RichText.render(description.raw)}</div>
            <dl className='mt-8 text-base text-gray-500'>
              {address.raw.length ? (
                <div>
                  <dt className='sr-only'>Address</dt>
                  <dd>{RichText.asText(address.raw)}</dd>
                </div>
              ) : null}
              {telephone.raw.length ? (
                <div className='mt-6'>
                  <dt className='sr-only'>Phone number</dt>
                  <dd className='flex'>
                    <PhoneIcon className='flex-shrink-0 h-6 w-6 text-gray-400' aria-hidden='true' />
                    <span className='ml-3'>{RichText.render(telephone.raw)}</span>
                  </dd>
                </div>
              ) : null}
              {email.raw.length ? (
                <div className='mt-3'>
                  <dt className='sr-only'>Email</dt>
                  <dd className='flex'>
                    <MailIcon className='flex-shrink-0 h-6 w-6 text-gray-400' aria-hidden='true' />
                    <span className='ml-3'>{RichText.render(email.raw)}</span>
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>
        </div>
        <div className='py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
          <div className='max-w-lg mx-auto lg:max-w-none'>
            <form action='#' method='POST' className='grid grid-cols-1 gap-y-6'>
              <div>
                <label htmlFor='full_name' className='sr-only'>
                  Full name
                </label>
                <input
                  type='text'
                  name='full_name'
                  id='full_name'
                  autoComplete='name'
                  className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                  placeholder='Full name'
                />
              </div>
              <div>
                <label htmlFor='email' className='sr-only'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                  placeholder='Email'
                />
              </div>
              <div>
                <label htmlFor='phone' className='sr-only'>
                  Phone
                </label>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  autoComplete='tel'
                  className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                  placeholder='Phone'
                />
              </div>
              <div>
                <label htmlFor='message' className='sr-only'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                  placeholder='Message'
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type='submit'
                  className='inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
