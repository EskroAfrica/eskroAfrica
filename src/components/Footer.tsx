import React from 'react'
import esk from '../assets/Frame7.png'

const Footer = () => {
  const tags = ["Game", "iPhone", "TV", "Asus Laptop", "Macbook", "SSD", "Graphics Card", "Power Bank", "Smart TV", "Speaker", "Tablet", "Microwave", "Samsung"]
  return (
    <div className="bg-baseColor py-10">
      <div className='sm:flex justify-between w-[95%] mx-auto'>
        <div className="basis-1/5 mb-5">
        <img className='' src={esk} alt="" />
        <p>Customer supports: </p>
        </div>
        <div className="basis-1/5 mb-5">
          <p className='pb-5 font-semibold'>Top Category</p>
          <ul className=" text-sm text-neutral-500 space-y-5">
          <li><a href="#" className="">Computer & Laptops</a></li>
          <li><a href="#" className="">Smartphone</a></li>
          <li><a href="#" className="">Headphone</a></li>
          <li><a href="#" className="">Camera & Photo</a></li>
          <li><a href="#" className="">TV & Homes</a></li>
        </ul>
        </div>
        <div className="basis-1/5 mb-5">
        <p className='pb-5 font-semibold'>Quick Links </p>
          <ul className="text-sm text-neutral-500 space-y-5">
          <li><a href="#" className="">Shop Product</a></li>
          <li><a href="#" className="">Shopping Cart</a></li>
          <li><a href="#" className="">Wishlist</a></li>
          <li><a href="#" className="">Compare</a></li>
          <li><a href="#" className="">Track Order</a></li>
          <li><a href="#" className="">Customer Help</a></li>
          <li><a href="#" className="">About Us</a></li>
        </ul>
        </div>
        <div className="basis-1/5 mb-5">
          <p className='pb-5 font-semibold'>Popular Tags</p>
          <div className='flex justify-between flex-wrap'>
            {tags.map((tag, index) => <p className='border mb-2 border-primary px-1 py-1 text-sm md:text-base md:px-2 md:py-2 ' key={index}> {tag} </p>)}
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>
    </div>
  )
}

export default Footer