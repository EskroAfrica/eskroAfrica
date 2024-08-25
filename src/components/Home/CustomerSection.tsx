import React, { useState, useEffect } from 'react'
import StarRating from '../StarRating'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const CustomerSection = () => {
  const [count, setCount] = useState<number>(0);
  const customerReviews = useSelector((state: RootState) => state.customerReviews.customerReviews);
  const [prevImage, setPrevImage] = useState<number>(customerReviews.length - 1);
  const [animation, setAnimation] = useState<boolean>(false);

  const increaseCount = () => {
    setAnimation(true)
    setCount((prevCount) => {
      const newCount = prevCount === customerReviews.length - 1 ? 0 : prevCount + 1;
      setPrevImage(newCount === 0 ? customerReviews.length - 1 : newCount - 1); // Update b to be count - 1, cycling as needed
      return newCount;
    });
  };

  const decreaseCount = () => {
    setAnimation(true)
    setCount((prevCount) => {
      const newCount = prevCount === 0 ? customerReviews.length - 1 : prevCount - 1;
      setPrevImage(newCount === 0 ? customerReviews.length - 1 : newCount - 1); // Update b to be count - 1, cycling as needed
      return newCount;
    });
  };

  useEffect(() => {
    if (animation) {
      // Reset animation state after transition
      const timer = setTimeout(() => setAnimation(false), 300); // Duration of transition (300ms)
      return () => clearTimeout(timer);
    }
  }, [count, animation]);


  return (
    <div className='py-14  bg-base'>
      <div className='pb-10'>
        <h3 className='text-4xl font-semibold lora-400 text-center text-primary'> Follow Us On Instagram</h3>
        <p className='text-center w-[40%] mx-auto py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!</p>
      </div>

      <div className='pb-24'>
        <div className="flex w-[70%] mx-auto justify-center items-center ">
          {[...Array(5)].map((_, index) => (
            <div key={index} className=''><img src={`/assets/person${index + 1}.png`} alt="" /></div>
          ))}
        </div>
      </div>

      <div className='pb-10'>
        <h3 className='text-4xl font-semibold lora-400 text-center text-primary'> This Is What Our Customers Say </h3>
        <p className='text-center w-[40%] mx-auto py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!</p>
      </div>

      <div className='flex justify-center items-center'>

        <div className='h-64 left-[10%] absolute w-1/2 bg-base rounded-xl shadow-lg px-10 flex items-center '>
          <div className='basis-1/3'>
            <div className='realtive mt-4 h-48 w-48 bg-neutral-300'></div>
            <div className='absolute left-14 bottom-10 h-48 w-48 '> <img className='object-cover w-full h-full' src={customerReviews[prevImage].image} alt="" /> </div>
          </div>
          <div className='basis-2/3 px-10'>
            <p className='pb-7'> "{customerReviews[prevImage].comment}"</p>
            <StarRating rating={customerReviews[prevImage].rating} />
            <hr className='mt-6 border-t-1 border-black w-[50%]' />
            <p className='text-2xl pt-6'>{customerReviews[prevImage].customerName}</p>
            <p>{customerReviews[prevImage].occupation}</p>
          </div>
        </div>

        {/* <div className='relative h-96  w-1/2 z-10 bg-base rounded-xl shadow-lg px-10 flex items-center'> */}
        <div className={`relative h-96 w-1/2 bg-base rounded-xl shadow-lg px-10 flex items-center transition-transform duration-300 ${animation ? 'translate-x-[-2%]' : 'translate-x-0'} z-10`}>
          <div className='basis-1/3'>
            <div className='relative mt-3 h-60 w-60 bg-neutral-300'></div>
            <div className='absolute left-14 bottom-20 h-60 w-60 '> <img className='object-cover w-full h-full' src={customerReviews[count].image} alt="" /></div>
          </div>
          <div className='basis-2/3 px-10'>
            <p className='pb-7 text-neutral-500'> "{customerReviews[count].comment}"</p>
            <StarRating rating={customerReviews[count].rating} />
            <hr className='mt-6 border-t-1 border-black w-[50%]' />
            <p className='text-2xl pt-6'>{customerReviews[count].customerName}</p>
            <p>{customerReviews[count].occupation}</p>
          </div>
        </div>

        <div className='h-64 right-[10%] absolute w-1/2 bg-base rounded-xl shadow-lg z-0 px-10 flex items-center'>
          <div className='basis-1/3'>
            <div className='relative mt-4 h-48 w-48 bg-neutral-300'></div>
            <div className='absolute left-14 bottom-10 h-48 w-48'><img className='object-cover w-full h-full' src={customerReviews[count].image} alt="" /></div>
          </div>
          <div className='basis-2/3 '>
            <p className='pb-7 text-neutral-500'> "{customerReviews[count].comment}"</p>
            <StarRating rating={customerReviews[count].rating} />
            <hr className='mt-6 border-t-1 border-black w-[50%]' />
            <p className='text-2xl pt-6'>{customerReviews[count].customerName}</p>
            <p>{customerReviews[count].occupation}</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center gap-x-3 mx-auto w-20 py-10'>
        <div onClick={decreaseCount} className='bg-base w-9 h-9 rounded-2xl border flex justify-center items-center border-neutral-300 cursor-pointer'> <FaArrowLeft /> </div>
        <div onClick={increaseCount} className='bg-base w-9 h-9 rounded-2xl border flex justify-center items-center border-neutral-300 cursor-pointer'> <FaArrowRight /></div>
      </div>

    </div>
  )
}

export default CustomerSection