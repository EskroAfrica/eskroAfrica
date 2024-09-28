import React from 'react'
import esk from '../../assets/Frame7.png'
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/userDetailsSlice';
import { Link } from 'react-router-dom';
import { FaBell, FaUserCircle } from "react-icons/fa";
import { RiHandHeartFill } from "react-icons/ri";
import { FaCartShopping, FaSquarePlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const AuthNavbarLinks = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <>
      {user &&
        <div className='flex justify-between items-center'>
          <img className='h-12' src={esk} alt="Logo" />
        </div>
      }
      {user &&
        <div className='hidden sm:flex justify-between space-x-2 lg:space-x-4 font-medium items-center basis-4/5 text-sm lg:text-base '>
          <input className='w-[40%] py-3 px-3 rounded-xl border border-primary500' type='email' placeholder='search' />
          <p className="text-3xl text-primary"><FaBell /></p>
          <p className="text-3xl text-primary"><RiHandHeartFill /> </p>
          <p className="text-3xl text-primary"><FaCartShopping /></p>
          <div className='flex items-center rounded-full bg-neutral-100 px-4 py-3 border border-neutral-300'>
            <p className='text-3xl pe-3 text-neutral-500'><FaUserCircle /></p>
            <p className='font-normal flex items-center'>{user} <span className='ps-6'><IoIosArrowDown/></span></p>
          </div>
          <button className='bg-primary px-2 md:px-2 xl:px-4 py-3 rounded-lg text-white font-normal flex items-center'> <span className='text-2xl pe-2'><FaSquarePlus/></span> Sell Product </button>
        </div>
      }
    </>

  )
}

export default AuthNavbarLinks