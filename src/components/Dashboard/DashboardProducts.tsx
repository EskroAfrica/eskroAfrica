import React, { useEffect, useState } from 'react'
import { GetProductPayload, Product, ProductStatus, useGetProductsMutation } from '../../store/productApiSlice';
import Loader from '../Loader';
import Button from '../Button';

interface MyComponentProps {
  id: string;
}


const DashboardProducts: React.FC<MyComponentProps> = ({ id }) => {
  const [getProducts, { isLoading, isSuccess, isError, error }] = useGetProductsMutation()
  const [products, setProducts] = useState<Product[]>([]);


  const fetchProducts = async () => {
    try {
      const payload: GetProductPayload = {
        CategoryId: id,
        PageNumber: 0,
        pageSize: 3
      };
      const response = await getProducts(payload).unwrap()
      const products: Product[] = response?.data || []
      setProducts(products)
    } catch (error: any) {
      if (error?.status) {
        // console.log(error?.status)
      }
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [products]);

  return (
    <>
      {isLoading ?

        (<Loader />)

        :

        <div className='pt-4'>
          <div className="w-[95%] lg:w-[95%] mx-auto hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(item => (
              <div key={item.id} className="bg-baseColor px-5 py-4 mb-4 rounded-xl">
                <div className=''>
                  <div className="h-60 w-full overflow-hidden">
                    <img className="w-full h-full object-cover md:object-contain" src={item.featuredImage} alt="" />
                  </div>
                  <p className='text-xl font-medium py-2 whitespace-nowrap'>{item.name}</p>
                  <p className='text-sm pb-2 text-neutral-500'>{ProductStatus[item.status]}</p>
                  {/* <StarRating rating={item.rating} /> */}
                  <p className='font-medium py-2'>{item.state}</p>
                  <div className='flex justify-between items-end'>
                    <p className='text-2xl font-medium'>N {item.price.toFixed(2)}</p>
                    <p className='text-sm text-error200'>{item.status}</p>
                  </div>
                </div>
                <div className='w-[60%] mx-auto py-2 '><Button text='Place Bid' className='w-50 border border-primary px-8 xl:px-12 py-4 rounded-lg text-primary' /></div>
              </div>
            ))}
          </div>

          {/* for small screens  */}

          <div key={products[0]?.id} className="w-full  bg-baseColor px-5 py-4 mb-4 rounded-xl mt-6 md:mt-0 block sm:hidden">
            <div className=''>
              {/* <div className='h-48 w-full overflow-hidden'><img className='mx-auto h-full w-full object-contain' src={item.image} alt="" /></div> */}
              <div className="h-60 w-full overflow-hidden">
                <img className="w-full h-full object-cover md:object-contain" src={products[0]?.featuredImage} alt="" />
              </div>
              <p className='text-xl font-medium py-2 whitespace-nowrap'>{products[0]?.name}</p>
              <p className='text-sm pb-2 text-neutral-500'>{products[0]?.status}</p>
              {/* <StarRating rating={items[0]?.rating} /> */}
              <p className='font-medium py-2'>{products[0]?.state}</p>
              <div className='flex justify-between items-end'>
                <p className='text-2xl font-medium'>N {products[0]?.price.toFixed(2)}</p>
                <p className='text-sm text-error200'>{products[0]?.status}</p>
              </div>
            </div>
            <div className='w-[60%] mx-auto py-2 '><Button text='Place Bid' className='w-50 border border-primary px-8 xl:px-12 py-4 rounded-lg text-primary' /></div>
          </div>

        </div>
      }
    </>
  )
}

export default DashboardProducts