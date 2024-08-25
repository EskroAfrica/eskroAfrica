import React from 'react'

const Footer = () => {
  const tags = ["Game", "iPhone", "TV", "Asus Laptop", "Macbook", "SSD", "Graphics Card", "Power Bank", "Smart TV", "Speaker", "Tablet", "Microwave", "Samsung"]
  return (
    <div className="bg-base py-10">
      <div className='flex justify-between w-[95%] mx-auto'>
        <div className="basis-1/5">
        <img className='' src="/assets/Frame7.png" alt="" />
        <p>Customer supports: </p>
        </div>
        <div className="basis-1/5">
          <p className='pb-5 font-semibold'>Top Category</p>
          <ul className=" text-sm text-neutral-500 space-y-5">
          <li><a href="#" className="">Computer & Laptops</a></li>
          <li><a href="#" className="">Smartphone</a></li>
          <li><a href="#" className="">Headphone</a></li>
          <li><a href="#" className="">Camera & Photo</a></li>
          <li><a href="#" className="">TV & Homes</a></li>
        </ul>
        </div>
        <div className="basis-1/5">
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
        <div className="basis-1/5">
          <p className='pb-5 font-semibold'>Popular Tags</p>
          <div className='flex justify-between flex-wrap'>
            {tags.map((tag, index) => <p className='border mb-2 border-primary px-2 py-2 ' key={index}> {tag} </p>)}
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>
    </div>
  )
}

export default Footer