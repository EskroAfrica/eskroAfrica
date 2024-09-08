import React from 'react'
import useModal from '../hooks/useModal';
import esk from '../assets/Frame7.png'
import { IoHomeSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { FaFire } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const Navbar = () => {
    const loginModal = useModal('LoginModal');
    const registerModal = useModal('SignUpModal')
    
    return (
        <div className="bg-neutral-100">
            <div className='flex justify-between items-center sf-font w-[95%] mx-auto '>
                <div className='flex justify-between items-center basis-1/5'>
                    <img className='' src={esk} alt="Logo" />
                </div>

                {/* Main Navigation Links - Hidden on small screens */}
                <div className='hidden sm:flex justify-end space-x-2 lg:space-x-4 font-medium items-center basis-4/5 text-sm lg:text-base'>
                    <p>Home</p>
                    <p>All Products</p>
                    <p>Hot Bids</p>
                    <p>New Products</p>
                    <p>About Us</p>
                    <button onClick={registerModal.open} className='bg-primary px-5 lg:px-16 py-3 rounded-lg text-white font-normal'>Register</button>
                    <button onClick={loginModal.open} className='border border-blue-900 px-5 lg:px-16 py-3 rounded-lg font-normal text-blue-900'>Log In</button>
                </div>

                {/* Sign Up and Log In - Always visible on small screens */}
                <div className='flex sm:hidden space-x-2 items-center '>
                    <button onClick={registerModal.open} className='bg-primary px-5 py-3 rounded-lg text-xs text-white font-normal'>Register</button>
                    <button onClick={loginModal.open} className='border border-blue-900 px-5 py-3 rounded-lg font-normal text-blue-900 text-xs'>Log In</button>
                </div>
            </div>

            {/* Fixed Bottom Navigation for Small Screens */}
            <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-white shadow-lg py-4 z-50">
                <div className="flex justify-around items-center text-center">
                    <div className='flex flex-col justify-center items-center'> 
                    <p className='text-xl'>
                        <IoHomeSharp />
                    </p>  
                    <p className='text-xs'>Home</p></div>
                    <div className='flex flex-col justify-center items-center'> 
                    <p className='text-xl'>
                        <AiFillProduct />
                    </p>  
                    <p  className='text-xs'>Products</p></div>
                    <div className='flex flex-col justify-center items-center'> 
                    <p className='text-xl'>
                        <FaFire />
                    </p>  
                    <p  className='text-xs'>Hot Bids</p></div>
                    <div className='flex flex-col justify-center items-center'> 
                    <p className='text-xl'>
                        <FaCircleInfo />
                    </p>  
                    <p  className='text-xs'>About Us</p></div>
                </div>
            </div>
        </div>

    )
}

export default Navbar