import React from 'react'
import useModal from '../hooks/useModal';
import esk from '../assets/Frame7.png'

const Navbar = () => {
    const loginModal = useModal('LoginModal');
    return (
        <div className="bg-neutral-100">
            <div className='flex justify-normal items-center sf-font w-[95%] mx-auto'>
                <div className='flex justify-between items-center basis-1/5 '>
                    <img className='' src={esk} alt="" />
                </div>
                <div className='flex justify-end space-x-2 lg:space-x-4 font-medium items-center basis-4/5 text-sm lg:text-base'>
                    <p>Home</p>
                    <p>All Products</p>
                    <p>Hot Bids</p>
                    <p>New Products </p>
                    <p>About Us</p>
                    <button className='bg-primary px-5 lg:px-16 py-3 rounded-lg text-white font-normal'>Sign Up</button>
                    <button onClick={loginModal.open} className='border border-blue-900 px-5 lg:px-16 py-3 rounded-lg font-normal text-blue-900'>Log In</button>
                </div>
                {/* <div className=' justify-between items-center'>
                    <button className='bg-primary px-16 py-3 rounded-lg text-white'>Sign Up</button>
                    <button onClick={loginModal.open} className='border border-blue-900 px-16 py-3 rounded-lg  text-blue-900'>Log In</button>
                </div> */}
            </div>
        </div>
    )
}

export default Navbar