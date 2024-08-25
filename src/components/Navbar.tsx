import React from 'react'

const Navbar = () => {
    return (
        <div className="bg-neutral-100">
            <div className='flex justify-stretch items-center sf-font w-[95%] mx-auto'>
                <div className='basis-2/5 '>
                    <img className='' src="/assets/Frame7.png" alt="" />
                </div>
                <div className='basis-2/5 flex justify-around items-center '>
                    <p>Home</p>
                    <p>All Products</p>
                    <p>Hot Bids</p>
                    <p>New Products </p>
                    <p>About Us</p>
                </div>
                <div className='flex justify-between items-center basis-1/5 '>
                    <button className='bg-blue-900 px-16 py-4 rounded-lg text-white '>Sign Up</button>
                    <button className='border border-blue-900 px-16 py-4 rounded-lg text-blue-900'>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar