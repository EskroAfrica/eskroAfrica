import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HomeHeroSection from '../components/Home/HomeHeroSection'
import ProductSection from '../components/Home/ProductSection'
import CustomerSection from '../components/Home/CustomerSection'
import NewsletterSection from '../components/Home/NewsletterSection'
import Footer from '../components/Footer'
import HotBids from '../components/Home/HotBids'

const Home = () => {
  return (
    <div>
        <HomeHeroSection />
        <HotBids />
        <ProductSection />
        <CustomerSection /> 
        <NewsletterSection />
    </div>
  )
}

export default Home