import React, { useState, useEffect } from 'react'
import StarRating from '../StarRating'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import person1 from '../../assets/person1.png'
import person2 from '../../assets/person2.png'
import person3 from '../../assets/person3.png'
import person4 from '../../assets/person4.png'
import person5 from '../../assets/person5.png'

const CustomerSection = () => {
  const [count, setCount] = useState<number>(0);
  const customerReviews = useSelector((state: RootState) => state.customerReviews.customerReviews);
  const [prevImage, setPrevImage] = useState<number>(customerReviews.length - 1);
  const [animation, setAnimation] = useState<boolean>(false);
  let pictureArray: any[] = [person1, person2, person3, person4, person5]

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
    <div className='py-14  bg-baseColor'>
      <div className='pb-10'>
        <h3 className='text-4xl font-semibold lora-400 text-center text-primary'> Follow Us On Instagram</h3>
        <p className='text-center w-full md:w-[60%] xl:w-[40%] mx-auto py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!</p>
      </div>

      <div className='pb-24 px-10'>
        <div className="flex justify-center items-center ">
          {[...Array(5)].map((_, index) => (
            <div key={index} className=''><img src={pictureArray[index]} alt="customer's images" /></div>
          ))}
        </div>
      </div>

      <div className='pb-10'>
        <h3 className='text-4xl font-semibold lora-400 text-center text-primary'> This Is What Our Customers Say </h3>
        <p className='text-center w-full md:w-[60%] xl:w-[40%] mx-auto py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!</p>
      </div>

      <div className='hidden lg:block'>
        <div className='flex justify-center items-center'>
          <div className='h-64 left-[10%] absolute w-1/2 bg-baseColor rounded-xl shadow-lg px-10 flex items-center '>
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
          <div className={`relative h-96 w-1/2 bg-baseColor rounded-xl shadow-lg px-10 flex items-center transition-transform duration-300 ${animation ? 'translate-x-[-2%]' : 'translate-x-0'} z-10`}>
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
          <div className='h-64 right-[10%] absolute w-1/2 bg-baseColor rounded-xl shadow-lg z-0 px-10 flex items-center'>
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
      </div>


          {/* for small screens */}
      <div className='w-[90%] mx-auto block lg:hidden '>
        {/* <div className={`relative h-80 bg-baseColor rounded-xl shadow-lg px-4 flex-col  justify-between items-start transition-transform duration-300 ${animation ? 'translate-x-[-2%]' : 'translate-x-0'}`}>
            <div className=''>
              <div className='relative mt-3 h-32 w-32 bg-neutral-300'></div>
              <div className='absolute left-6 top-2 h-32 w-32 '> <img className='object-cover w-full h-full' src={customerReviews[count].image} alt="" /></div>
            </div>
            <div className='px-2 pt-6'>
              <p className='pb-3 text-sm text-neutral-500'> "{customerReviews[count].comment}"</p>
              <StarRating rating={customerReviews[count].rating} />
              <hr className='mt-3 border-t-1 border-black w-[50%]' />
              <p className='text-xl pt-3'>{customerReviews[count].customerName}</p>
              <p>{customerReviews[count].occupation}</p>
            </div>
          </div> */}
          <div className={`relative min-h-[20rem] bg-baseColor rounded-xl shadow-lg px-4 flex flex-col justify-between items-start transition-transform duration-300 ${animation ? 'translate-x-[-2%]' : 'translate-x-0'}`}>
  <div className=''>
    <div className='relative mt-3 h-32 w-32 bg-neutral-300'></div>
    <div className='absolute left-6 top-2 h-32 w-32'>
      <img className='object-cover w-full h-full' src={customerReviews[count].image} alt="" />
    </div>
  </div>
  <div className='px-2 py-6'>
    <p className='pb-3 text-sm text-neutral-500'>"{customerReviews[count].comment}"</p>
    <StarRating rating={customerReviews[count].rating} />
    <hr className='mt-3 border-t-1 border-black w-[50%]' />
    <p className='text-xl pt-3'>{customerReviews[count].customerName}</p>
    <p>{customerReviews[count].occupation}</p>
  </div>
</div>

      </div>
      

      <div className='flex justify-center gap-x-3 mx-auto w-20 py-10'>
        <div onClick={decreaseCount} className='bg-baseColor w-9 h-9 rounded-2xl border flex justify-center items-center border-neutral-300 cursor-pointer'> <FaArrowLeft /> </div>
        <div onClick={increaseCount} className='bg-baseColor w-9 h-9 rounded-2xl border flex justify-center items-center border-neutral-300 cursor-pointer'> <FaArrowRight /></div>
      </div>

    </div>
  )
}

export default CustomerSection