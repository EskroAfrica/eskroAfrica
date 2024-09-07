import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import StarRating from '../StarRating';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Button from '../Button';
import CountDown from '../CountDown';

const HotBids = () => {
    const [count, setCount] = useState<number>(0);
    const items = useSelector((state: RootState) => state.items.items);
    const [prevValue, setPrevValue] = useState<number>(items.length - 1);

    const increaseCount = () => {
        setCount((prevCount) => {
            const newCount = prevCount === items.length - 1 ? 0 : prevCount + 1;
            setPrevValue(newCount === 0 ? items.length - 1 : newCount - 1); // Update b to be count - 1, cycling as needed
            return newCount;
        });
    };

    const decreaseCount = () => {
        setCount((prevCount) => {
            const newCount = prevCount === 0 ? items.length - 1 : prevCount - 1;
            setPrevValue(newCount === 0 ? items.length - 1 : newCount - 1); // Update b to be count - 1, cycling as needed
            return newCount;
        });
    };

    return (
        <div className='bg-neutral-100'>
            <div className='pt-28 w-[90%] mx-auto'>
                <div className='flex justify-between items-center items space-x-6'>
                    <div className='w-[50%] lg:w-[33%] pe-10'>
                        <h3 className='text-3xl lg:text-4xl font-semibold lora-400  text-primary'> Hot Bids Of The Day</h3>
                        <p className='w-[90%] py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!</p>
                        <p className='font-semibold text-2xl text-neutral-500 pb-3'>Hurry, Before It's Too Late</p>
                        <CountDown />
                    </div>

                    <div key={items[count].id} className=" w-[50%] lg:w-[30%] bg-baseColor px-5 py-4 mb-4 rounded-xl">
                        <div className=''>
                            {/* <div className='h-48 w-full overflow-hidden'><img className='mx-auto h-full w-full object-contain' src={item.image} alt="" /></div> */}
                            <div className="h-60 w-full overflow-hidden">
                                <img className="w-full h-full object-cover md:object-contain" src={items[count].image} alt="" />
                            </div>
                            <p className='text-xl font-medium py-2 whitespace-nowrap'>{items[count].productName}</p>
                            <p className='text-sm pb-2 text-neutral-500'>{items[count].productState}</p>
                            <StarRating rating={items[count].rating} />
                            <p className='font-medium py-2'>{items[count].vendor}</p>
                            <div className='flex justify-between items-end'>
                                <p className='text-2xl font-medium'>N {items[count].price.toFixed(2)}</p>
                                <p className='text-sm text-error200'>{items[count].bid}</p>
                            </div>
                        </div>
                        <div className='w-[60%] mx-auto py-2 '><Button text='Place Bid' className='w-50 border border-primary px-8 xl:px-12 py-4 rounded-lg text-primary' /></div>
                    </div>

                    <div key={items[count + 1 >= items.length ? 0 : count + 1].id} className="w-[30%] hidden lg:block bg-baseColor px-5 py-4 mb-4 rounded-xl">
                        <div className=''>
                            {/* <div className='h-48 w-full overflow-hidden'><img className='mx-auto h-full w-full object-contain' src={item.image} alt="" /></div> */}
                            <div className="h-60 w-full overflow-hidden">
                                <img className="w-full h-full object-cover md:object-contain" src={items[count + 1 >= items.length ? 0 : count + 1].image} alt="" />
                            </div>
                            <p className='text-xl font-medium py-2 whitespace-nowrap'>{items[count + 1 >= items.length ? 0 : count + 1].productName}</p>
                            <p className='text-sm pb-2 text-neutral-500'>{items[count + 1 >= items.length ? 0 : count + 1].productState}</p>
                            <StarRating rating={items[count + 1 >= items.length ? 0 : count + 1].rating} />
                            <p className='font-medium py-2'>{items[count + 1 >= items.length ? 0 : count + 1].vendor}</p>
                            <div className='flex justify-between items-end'>
                                <p className='text-2xl font-medium'>N {items[count + 1 >= items.length ? 0 : count + 1].price.toFixed(2)}</p>
                                <p className='text-sm text-error200'>{items[count + 1 >= items.length ? 0 : count + 1].bid}</p>
                            </div>
                        </div>
                        <div className='w-[60%] mx-auto py-2 '><Button text='Place Bid' className='w-50 border border-primary px-8 xl:px-12 py-4 rounded-lg text-primary' /></div>
                    </div>

                </div>
            </div>

            <div className='flex justify-center gap-x-3 mx-auto w-20 py-10'>
                <div onClick={decreaseCount} className='bg-baseColor w-7 h-7 rounded-2xl border flex justify-center items-center border-neutral-300 cursor-pointer'> <FaArrowLeft /> </div>
                <div onClick={increaseCount} className='bg-baseColor w-7 h-7 rounded-2xl border flex justify-center items-center border-neutral-300 cursor-pointer'> <FaArrowRight /></div>
            </div>
        </div>
    )
}

export default HotBids