import React from 'react'
import Navbar from '../components/Navbar'
import HomeHeroSection from '../components/Home/HomeHeroSection'
import ProductSection from '../components/Home/ProductSection'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HomeHeroSection />
        <ProductSection />
    </div>
  )
}

export default Home