import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-stretch items-center sf-font'>
            <div className='basis-1/3 '>
                <img className='' src="/assets/Frame7.png" alt="" />
            </div>
            <div className='basis-1/3 flex justify-around items-center '>
                <p>Home</p>
                <p>All Products</p>
                <p>Hot Bids</p>
                <p>New Products </p>
                <p>About Us</p>
            </div>
            <div className='flex justify-around items-center basis-1/3 '>
                <button className='bg-blue-900 px-20 py-3 rounded-lg text-white '>Sign Up</button>
                <button className='border border-blue-900 px-20 py-3 rounded-lg text-blue-900'>Log in</button>
            </div>
        </div>
    )
}

export default Navbar