import React from 'react'
import ProductsList from '../components/Products/ProductsList'
import { useLocation, useParams } from 'react-router-dom';

const Products = () => {
  const { name } = useParams();
  const location = useLocation();
  const id = location.state; //this is used to get the id as extra parameter 

  return (
    <div className='bg-neutral-100'>
    <ProductsList name={name} categoryId={id}/>
    </div>
  )
}

export default Products