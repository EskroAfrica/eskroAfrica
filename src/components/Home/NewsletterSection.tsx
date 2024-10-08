import React from 'react'
import Button from '../Button'

const NewsletterSection = () => {
  return (
    <div className='bg-neutral-100'>
      <div className='mx-auto w-full md:w-[70%] xl:w-[50%] py-20'>
          <div className='pb-10'>
          <h3 className='text-4xl font-semibold lora-400 text-center text-primary'> Subscribe To Our Newsletter </h3>
          <p className='text-center w-full md:w-[70%] lg:w-[60%] xl:w-[60%] mx-auto py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!</p>
        </div>
        <div className="flex-row w-[90%] md:w-[70%] xl:w-[50%] mx-auto justify-center ">
          <input className='w-full py-4 px-3 rounded-md border border-neutral-400' type='email' placeholder='michael@ymail.com'/>
          <div className='w-[50%] mx-auto '><Button text='Subscribe' className='mt-4 bg-primary text-baseColor px-10 mx-auto py-4 rounded-lg' /></div>
          </div>
      </div>
    </div>
  )
}

export default NewsletterSection