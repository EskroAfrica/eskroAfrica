import React from 'react'
import esk from '../../assets/Frame7.png'
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/userDetailsSlice';
import useModal from '../../hooks/useModal';
import { Link } from 'react-router-dom';

const NavbarLinks = () => {
    const registerModal = useModal('RegisterModal');
    const loginModal = useModal("LoginModal")
    const user = useSelector(selectCurrentUser);
    return (
        <>
            {!user &&
                <div className='flex justify-between items-center basis-1/5'>
                    <img className='' src={esk} alt="Logo" />
                </div>
            }
            {/* Main Navigation Links - Hidden on small screens */}
            {!user &&
                <div className='hidden sm:flex justify-end space-x-2 lg:space-x-4 font-medium items-center basis-4/5 text-sm lg:text-base'>
                    <p>Home</p>
                    <p>All Products</p>
                    <p>Hot Bids</p>
                    <p>New Products</p>
                    <p>About Us</p>
                    <button onClick={registerModal.open} className='bg-primary px-5 lg:px-16 py-3 rounded-lg text-white font-normal'>Register</button>
                    <button onClick={loginModal.open} className='border border-blue-900 px-5 lg:px-16 py-3 rounded-lg font-normal text-blue-900'>Log In</button>
                </div>}

            {/* Sign Up and Log In - Always visible on small screens */}
            {!user &&
                <div className='flex sm:hidden space-x-2 items-center '>
                    <button onClick={registerModal.open} className='bg-primary px-5 py-3 rounded-lg text-xs text-white font-normal'>Register</button>
                    <button onClick={loginModal.open} className='border border-blue-900 px-5 py-3 rounded-lg font-normal text-blue-900 text-xs'>Log In</button>
                </div>}
        </>
    )
}

export default NavbarLinks