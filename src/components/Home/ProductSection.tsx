import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { deleteItem, filterItemsById } from '../../store/itemsSlice';
import StarRating from '../StarRating';
import Button from '../Button';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Category, GetProductPayload } from '../../store/productApiSlice';
import { useGetProductsMutation, useGetCategoriesMutation } from '../../store/productApiSlice';

const ProductSection = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [categories, setCategories] = useState<Category[]>([])
  const items = useSelector((state: RootState) => state.items.items);
  const dispatch = useDispatch();

  //mutations
  const [getProducts, { isLoading, isSuccess, isError, error }] = useGetProductsMutation()
  const [getCategories] = useGetCategoriesMutation()

  const [count, setCount] = useState<number>(0);
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


  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
  };

  const fetchProducts = async () => {
    try {
      const payload: GetProductPayload = {
        PageNumber: 0,
        pageSize: 10
      };
      const response = await getProducts(payload).unwrap()
      console.log(response)
    } catch (error: any) {
      if (error?.status) {
        console.log(error?.status)
      }
    }
  }

  const fetchCategories = async() => {
    try {
      const response = await getCategories(undefined).unwrap()
      const categories: Category[] = response?.data || []; 
      setCategories(categories)
    } catch (error: any) {
      if (error?.status) {
        console.log(error?.status)
      }
    }
  }

  useEffect(() => {
    fetchProducts()
    fetchCategories()
  }, []);

  // const tabItems = ['All', "Men's Fashion", "Women Accessories", 'Men Accessories', 'Discount Deals'];

  return (
    <div className="bg-neutral-100">
      <div className='pb-10 pt-6'>
        <div className='pb-10'>
          <h3 className='text-4xl font-semibold lora-400 text-center text-primary'> Products</h3>
          <p className='text-center w-full md:w-[60%] xl:w-[40%] mx-auto py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!</p>
        </div>

        <div className="flex w-[90%] lg:w-[60%] mx-auto pb-6">
          {categories.map((tabItem, index) => (
            <div
              key={index}
              className={`px-4 py-4 text-xs xl:text-base cursor-pointer basis-1/5 text-center whitespace-nowrap overflow-hidden overflow-ellipsis ${selectedItem === index ? 'bg-primary rounded-xl text-white' : ' text-neutral-500'
                }`}
              onClick={() => setSelectedItem(index)}
            >
              {tabItem.name}
            </div>
          ))}
        </div>


        {/* <div className='flex w-[90%] lg:w-[70%] mx-auto justify-between flex-wrap '> */}
        <div className="w-[90%] lg:w-[90%] mx-auto hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(item => (
            <div key={item.id} className="bg-baseColor px-5 py-4 mb-4 rounded-xl">
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

        {/* show on small screen */}
        <div key={items[count].id} className="w-full  bg-baseColor px-5 py-4 mb-4 rounded-xl mt-6 md:mt-0 block sm:hidden">
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

        <div className='flex justify-center gap-x-3 mx-auto w-20 py-5 block sm:hidden'>
          <div onClick={decreaseCount} className='bg-baseColor w-7 h-7 rounded-2xl border flex justify-center items-center border-neutral-300 cursor-pointer'> <FaArrowLeft /> </div>
          <div onClick={increaseCount} className='bg-baseColor w-7 h-7 rounded-2xl border flex justify-center items-center border-neutral-300 cursor-pointer'> <FaArrowRight /></div>
        </div>

        <div className=' w-[50%] md:w-[20%] mx-auto py-2 '><Button text='View More' className='w-50 border bg-primary px-8 xl:px-12 py-4 rounded-lg text-white' /></div>

      </div>
    </div>
  )
}

export default ProductSection