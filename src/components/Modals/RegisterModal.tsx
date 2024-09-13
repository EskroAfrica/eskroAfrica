import React, {useCallback, useEffect, useState} from 'react'
import Modal from './Modal'
import Button from '../Button'
import { FcGoogle } from "react-icons/fc";
import useModal from '../../hooks/useModal';
import usePersist from '../../hooks/usePersist';
import { useNavigate } from 'react-router-dom';

const SignInModal = () => {
    const registerModal = useModal("RegisterModal")
    const signUpModal = useModal("SignUpModal")
    const [persist, setPersist] = usePersist()
    const navigate = useNavigate();
    const [shouldNavigate, setShouldNavigate] = useState(false);
    
    // const handleToggle = useCallback(() => {
    //     setPersist(prevState => !prevState);
    //     setShouldNavigate(true);
    //   }, [setPersist]);
    
    //   useEffect(() => {
    //     if (shouldNavigate) {
    //       navigate('/dashboard'); 
    //       registerModal.close()
    //       setShouldNavigate(false);
    //     }
    //   }, [shouldNavigate, navigate]);

    return (
        <Modal modalKey='RegisterModal'>
            <div className="py-5 md:py-10 px-2 md:px-5 flex flex-col justify-center items-center">
                <div className="flex items-center justify-center h-full">
                    <img className="w-18 h-9" src="/assets/Frame7.png" alt="" />
                </div>
                <p className='text-xl md:text-3xl font-semibold pt-3'>Create a new account </p>
                <p className='text-xs text-neutral-500'>Full access to any of our products</p>
                <Button onClick={signUpModal.open} text='Continue with email' className='mt-5 font-light bg-primary text-baseColor px-10 w-full mx-auto py-4 rounded-lg cursor-pointer' />
                <div className='flex justify-center items-center mt-3 py-4 rounded-lg w-full border text-center border-primary '>
                    <FcGoogle className='text-2xl'/>
                    <p className='ps-4'>Sign in with Google</p>
                </div>
                <p className='w-[90%] py-6 text-neutral-500 text-sm text-center'>By continuing, you agree to our <span className='text-neutral-700 font-semibold'>Terms of Service</span>, 
                and acknowledge you've read our <span className='text-neutral-700 font-semibold'>Privacy Policy</span> </p>
                <p className='text-sm'>Already a member, <a className='text-primary'> Log in </a></p>
            </div>
        </Modal>
    )
}

export default SignInModal