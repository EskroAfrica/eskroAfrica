import React from 'react'
import Modal from './Modal'
import { FaRegEnvelope } from "react-icons/fa6";
import useModal from '../../hooks/useModal';

const CongratulationsModal = () => {
  const createPasswordModal = useModal("CreatePasswordModal")
  return (
    <Modal modalKey='CongratulationsModal'>
            <div className="py-5 md:py-10 px-2 md:px-5 flex flex-col justify-center items-center">
                <div className="flex items-center justify-center h-full">
                    <img className="w-18 h-9" src="/assets/Frame7.png" alt="" />
                </div>
                    <div className='text-center space-y-8'>
                        <p className='text-xl md:text-3xl font-semibold pt-3'>Congratulations!!!</p>
                        <div className='mx-auto bg-baseColor w-14 h-14 rounded-full border flex justify-center items-center text-primary cursor-pointer'> <FaRegEnvelope/> </div>
                        <p className='text-sm w-[70%] md:w-[50%] mx-auto'>Welcome to Eskro Africa, please check your email address to finish up your registration</p>
                        <p className='text-xs text-primary cursor-pointer ' onClick={createPasswordModal.open}> Proceed To Create Password </p>
                    </div>
            </div>
    </Modal>
  )
}

export default CongratulationsModal