import { IoHomeSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { FaFire } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/userDetailsSlice';
import NavbarLinks from './NavbarLinks';
import AuthNavbarLinks from './AuthNavbarLinks';

const Navbar = () => {
    
    return (
        <div className="bg-neutral-100">
            <div className='flex justify-between items-center sf-font w-[95%] mx-auto '>
               <NavbarLinks />
               <AuthNavbarLinks/>
            </div>

            {/* Fixed Bottom Navigation for Small Screens */}
            <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-white shadow-lg py-4 z-20">
                <div className="flex justify-around items-center text-center">
                    <div className='flex flex-col justify-center items-center'> 
                    <p className='text-xl'>
                        <IoHomeSharp />
                    </p>  
                    <p className='text-xs'>Home</p></div>
                    <div className='flex flex-col justify-center items-center'> 
                    <p className='text-xl'>
                        <AiFillProduct />
                    </p>  
                    <p  className='text-xs'>Products</p></div>
                    <div className='flex flex-col justify-center items-center'> 
                    <p className='text-xl'>
                        <FaFire />
                    </p>  
                    <p  className='text-xs'>Hot Bids</p></div>
                    <div className='flex flex-col justify-center items-center'> 
                    <p className='text-xl'>
                        <FaCircleInfo />
                    </p>  
                    <p  className='text-xs'>About Us</p></div>
                </div>
            </div>
        </div>

    )
}

export default Navbar