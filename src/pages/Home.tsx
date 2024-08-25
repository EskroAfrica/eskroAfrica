import React from 'react'
import Navbar from '../components/Navbar'
import HomeHeroSection from '../components/Home/HomeHeroSection'
import ProductSection from '../components/Home/ProductSection'
import CustomerSection from '../components/Home/CustomerSection'
import NewsletterSection from '../components/Home/NewsletterSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HomeHeroSection />
        <ProductSection />
        <CustomerSection /> 
        <NewsletterSection />
        <Footer /> 
    </div>
  )
}

export default Home