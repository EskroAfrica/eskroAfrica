import React, { useEffect, useState } from 'react'
import { Category, useGetCategoriesMutation } from '../../store/productApiSlice'
import DashboardProducts from './DashboardProducts'
import { Link } from 'react-router-dom'
import Loader from '../Loader'

const DashboardCategories = () => {
    const [categories, setCategories] = useState<Category[]>([])

  const [getCategories, { isLoading, isSuccess, isError, error }] = useGetCategoriesMutation()


    const fetchCategories = async () => {
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
        fetchCategories()
      }, []);

  return (
    <>
      {(isLoading) ? 

        (<Loader />) :   
        
        <div className='w-[90%] mx-auto'>
        {categories.map((item, index) => (
            <div key={index}>
                <div className='flex justify-between items-center border-b border-neutral-300'>
                    <p className='text-2xl text-primary font-semibold border-b-2 border-primary'> {item.name}</p>
                    <Link to={`/products/${encodeURIComponent(item.name)}`} state={item.id} className='text-2xl text-primary font-semibold' >See all &gt;</Link>
                </div>
                <DashboardProducts id={item.id} /> 
            </div>
        ))}

    </div>
    }
    </>

  )
}

export default DashboardCategories