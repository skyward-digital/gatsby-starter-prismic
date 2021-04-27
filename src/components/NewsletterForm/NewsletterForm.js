import React, { useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { useForm } from 'react-hook-form'

export const NewsletterForm = ({ buttonLabel, isPrimary }) => {
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const buttonText = RichText.asText(buttonLabel?.raw) ?? 'Subscribe'

  const { register, handleSubmit, watch, errors } = useForm()

  // const asyncSubmitEmailToServer = async (data: { newsletter: string }) => {
  //   const request = await fetch(`/email-signup`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: data.newsletter,
  //     }),
  //   })

  //   const response = await request.json()

  //   if (!response.success) throw Error('Not successful')
  // }

  const onSubmit = async data => {
    // await asyncSubmitEmailToServer(data)
    console.log(data)
    setHasSubmitted(true)
  }

  return (
    <form className='flex flex-wrap gap-2 justify-center mx-auto mb-4' onSubmit={handleSubmit(onSubmit)}>
      {/* Instead of jumping, it would be nice if this transitioned out */}
      {!hasSubmitted ? (
        <>
          <input
            name='newsletter'
            type='email'
            {...register('newsletter', { required: true })}
            className={`rounded-lg shadow-soft px-4 py-3 placeholder-gray-400 w-full md:w-80 ${
              isPrimary ? 'bg-white' : 'bg-gray-100'
            }`}
            placeholder='Enter your email'
          />
          {errors?.newsletter && <p>Please enter a valid email address</p>}
        </>
      ) : null}

      <button
        className={`btn ${isPrimary ? 'btn-primary' : 'btn-secondary'} w-full md:w-auto`}
        type='submit'
        disabled={hasSubmitted}
      >
        {!hasSubmitted ? buttonText : 'Thanks for joining us 🚀'}
      </button>
    </form>
  )
}
