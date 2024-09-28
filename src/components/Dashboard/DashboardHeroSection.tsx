import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const DashboardHeroSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : 4));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < 4 ? prev + 1 : 0));
    };
    return (

        <div className="py-5">
            <div className="w-[85%] mx-auto relative h-80 bg-gradient-to-r from-primary700 via-primary900 to-primary1000 flex items-center rounded-xl">
                <div onClick={handlePrev} className="absolute left-10 top-[40%] h-20 w-20 flex justify-center items-center transform -translate-x-full rounded-full bg-baseColor cursor-pointer">
                    <IoIosArrowBack className="text-gray-500" size={24} />
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className="flex-grow px-16 text-baseColor ">
                            <p className='text-2xl'>Best deal online on home kits</p>
                            <p className='text-7xl w-[70%] font-semibold'>SMART WEARABLE. </p>
                            <p className='text-3xl'>UP TO 80% OFF</p>
                        </div>
                        <div className="flex space-x-2 px-16 pt-3">
                            {[0, 1, 2, 3, 4].map((index) => (
                                <div
                                    key={index}
                                    className={`h-2 rounded-full bg-white border border-gray-300 transition-all duration-300 ${activeIndex === index ? 'w-8' : 'w-2'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div onClick={handleNext} className="absolute right-10 top-[40%] h-20 w-20 flex justify-center items-center transform translate-x-full rounded-full bg-baseColor cursor-pointer">
                    <IoIosArrowForward className="text-gray-500 text-center" size={24} />
                </div>
            </div>
        </div>
    )
}

export default DashboardHeroSection