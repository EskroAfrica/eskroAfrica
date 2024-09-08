import React from 'react'
import Modal from './Modal'
import Button from '../Button'
import { BsInfoCircleFill } from "react-icons/bs";

const SignUpModal = () => {
    return (
        <Modal modalKey="SignUpModal">
            <div className="py-5 md:py-10 px-2 md:px-5 flex flex-col justify-center items-center">
                <div className="flex items-center justify-center h-full">
                    <img className="w-18 h-9" src="/assets/Frame7.png" alt="" />
                </div>
                <p className='text-xl md:text-3xl font-semibold pt-3'>Create a new account </p>
                <p className='text-xs text-neutral-500'>Full access to any of our products</p>
                <div className="flex-row w-full mx-auto justify-center mt-5 ">

                    <input className='w-full py-4 px-3 rounded-md border border-neutral-400' type='email' placeholder='michael@ymail.com' />

                    <div className="flex items-center space-x-4 px-4 py-3 text-sm">
                        <span className="text-sm">I am onboarding as</span>

                        <label className="flex items-center space-x-2">
                            <input type="radio" name="option" className="form-radio" />
                            <span>Buyer</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="radio" name="option" className="form-radio" />
                            <span>Seller</span>
                        </label>
                    </div>

                    <div className='flex justify-start items-center '>
                    <BsInfoCircleFill className='text-2xl text-primary'/>
                    <p className='ps-2 text-sm'>Your activities on this platform goes beyond your selected role</p>
                    </div>

                    <Button text='Submit' className='mt-4 bg-primary text-baseColor px-10 mx-auto py-4 rounded-lg' />
                </div>
                <p className='w-[90%] py-6 text-neutral-500 text-sm text-center'>By continuing, you agree to our <span className='text-neutral-700 font-semibold'>Terms of Service</span>,
                    and acknowledge you've read our <span className='text-neutral-700 font-semibold'>Privacy Policy</span> </p>
                <p className='text-sm'>Already a member, <a className='text-primary'> Log in </a></p>
            </div>
        </Modal>
    )
}

export default SignUpModal