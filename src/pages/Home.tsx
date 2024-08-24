import React from 'react'
import Navbar from '../components/Navbar'
import HomeHeroSection from '../components/Home/HomeHeroSection'
import ProductSection from '../components/Home/ProductSection'
import CustomerSection from '../components/Home/CustomerSection'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HomeHeroSection />
        <ProductSection />
        <CustomerSection /> 
    </div>
  )
}

export default Home