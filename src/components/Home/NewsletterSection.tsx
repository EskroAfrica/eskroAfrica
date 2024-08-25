import React from 'react'
import Button from '../Button'

const NewsletterSection = () => {
  return (
    <div className='bg-neutral-100'>
      <div className='mx-auto w-[50%] py-20'>
          <div className='pb-10'>
          <h3 className='text-4xl font-semibold lora-400 text-center text-primary'> Subscribe To Our Newsletter </h3>
          <p className='text-center w-[40%] mx-auto py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!</p>
        </div>
        <div className="flex-row w-[50%] mx-auto justify-center ">
          <input className='w-full py-4 px-3 rounded-md border border-neutral-400' type='email' placeholder='michael@ymail.com'/>
          <Button text='Subscribe' className='mt-4 bg-primary text-base px-10 w-44 mx-auto py-4 rounded-lg' />
          </div>
      </div>
    </div>
  )
}

export default NewsletterSection