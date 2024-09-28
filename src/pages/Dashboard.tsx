import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import DashboardHeroSection from '../components/Dashboard/DashboardHeroSection'
import DashboardCategories from '../components/Dashboard/DashboardCategories'

const Dashboard = () => {
  return (
   <div className='bg-neutral-100'>
      <DashboardHeroSection/>
      <DashboardCategories />
   </div>
  )
}

export default Dashboard