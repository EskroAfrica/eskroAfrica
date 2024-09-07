import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { deleteItem, filterItemsById } from '../../store/itemsSlice';
import StarRating from '../StarRating';
import Button from '../Button';

const ProductSection = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const items = useSelector((state: RootState) => state.items.items);
  const dispatch = useDispatch();


  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
  };

  const tabItems = ['All', "Men's Fashion", "Women Accessories", 'Men Accessories', 'Discount Deals'];

  return (
    <div className="bg-neutral-100">
      <div className='pb-10 pt-6'>
        <div className='pb-10'>
          <h3 className='text-4xl font-semibold lora-400 text-center text-primary'> Products</h3>
          <p className='text-center w-[60%] xl:w-[40%] mx-auto py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!</p>
        </div>
        <div className="flex w-[90%] lg::w-[60%] mx-auto pb-6">
          {tabItems.map((tabItem, index) => (
            <div
              key={index}
              className={`px-4 py-4 text-xs xl:text-base cursor-pointer basis-1/5 text-center ${selectedItem === index ? 'bg-primary rounded-xl text-white' : ' text-neutral-500' 
                }`}
              onClick={() => setSelectedItem(index)}
            >
              {tabItem}
            </div>
          ))}
        </div>
        <div className='flex w-[90%] lg::w-[70%] mx-auto  justify-between flex-wrap'>
          {items.map(item => (
            <div key={item.id} className="w-[50%] xl:w-[30%] bg-baseColor px-5 py-4 mb-4 rounded-xl">
              <div className=''>
                {/* <div className='h-48 w-full overflow-hidden'><img className='mx-auto h-full w-full object-contain' src={item.image} alt="" /></div> */}
                <div className="h-60 w-full overflow-hidden">
                  <img className="w-full h-full object-cover md:object-contain" src={item.image} alt="" />
                </div>
                <p className='text-xl font-medium py-2 whitespace-nowrap'>{item.productName}</p>
                <p className='text-sm pb-2 text-neutral-500'>{item.productState}</p>
                <StarRating rating={item.rating} />
                <p className='font-medium py-2'>{item.vendor}</p>
                <div className='flex justify-between items-end'>
                  <p className='text-2xl font-medium'>N {item.price.toFixed(2)}</p>
                  <p className='text-sm text-error200'>{item.bid}</p>
                </div>
              </div>
              <div className='w-[60%] mx-auto py-2 '><Button text='Place Bid' className='w-50 border border-primary px-8 xl:px-12 py-4 rounded-lg text-primary' /></div>
            </div>
          ))}
        </div>
        <div className='w-[20%]  mx-auto py-2 '><Button text='View More' className='w-50 border bg-primary px-8 xl:px-12 py-4 rounded-lg text-white' /></div>
      
      </div>
    </div>
  )
}

export default ProductSection