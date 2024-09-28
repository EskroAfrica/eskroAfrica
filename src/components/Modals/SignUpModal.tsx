import React, { useState } from 'react'
import Modal from './Modal'
import Button from '../Button'
import { BsInfoCircleFill } from "react-icons/bs";
import useModal from '../../hooks/useModal';
import { useSignupMutation } from '../../store/authApiSlice';

const SignUpModal = () => {
    const [isRequestLoading, setIsRequestLoading] = useState(false)
    const congratulationsModal = useModal("CongratulationsModal")
    const loginModal = useModal("LoginModal")

    const [signup,  { isLoading, isSuccess, isError, error }] = useSignupMutation()

    const [formData, setFormData] = useState({
        email: '',
        isSeller: false, 
    });

    // State for validation errors
    const [errors, setErrors] = useState({
        email: '',
        role: '', 
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        if (name === 'role') {
            setFormData((prevState) => ({
                ...prevState,
                isSeller: value === 'Seller', 
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: type === 'radio' ? (checked ? value : '') : value,
            }));
        }
    };

    // Validate form data
    const validate = () => {
        const newErrors = { email: '', role: '' };
        let isValid = true;

        // Validate email
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
            isValid = false;
        }

        // Validate role
        if (!formData.isSeller && !formData.email) { // Adjust validation based on isSeller
            newErrors.role = 'Role is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setIsRequestLoading(true)

        try {
            const response = await signup(formData).unwrap()
            setIsRequestLoading(false)
            congratulationsModal.open() //redirect tol the congratulations modal
            setFormData(prevState => ({ ...prevState, email: '' })); //clear form data
        } catch (error: any) {
            setIsRequestLoading(false)
            if (error?.status) {
               setErrors({ ...errors, email:  error?.data?.message});
              }
            
        }
    };

    return (
        <Modal modalKey="SignUpModal">
            <div className="py-5 md:py-10 px-2 md:px-5 flex flex-col justify-center items-center">
                <div className="flex items-center justify-center h-full">
                    <img className="w-18 h-9" src="/assets/Frame7.png" alt="" />
                </div>
                <p className='text-xl md:text-3xl font-semibold pt-3'>Create a new account </p>
                <p className='text-xs text-neutral-500'>Full access to any of our products</p>



                <div className="flex-row w-full mx-auto justify-center mt-5">
                    <form onSubmit={handleSubmit} className="w-full">
                        <input
                           className={`w-full py-4 px-3 rounded-md border-2 ${errors.email ? 'border-red-200' : 'border-primary200'}`}
                            type="email"
                            name="email"
                            placeholder="michael@ymail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-300 text-sm">{errors.email}</p>}

                        <div className="flex items-center space-x-4 px-4 py-3 text-sm">
                            <span className="text-sm">I am onboarding as</span>

                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Buyer"
                                    className="form-radio"
                                    checked={!formData.isSeller} // Checked if not seller
                                    onChange={handleChange}
                                />
                                <span>Buyer</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Seller"
                                    className="form-radio"
                                    checked={formData.isSeller} // Checked if seller
                                    onChange={handleChange}
                                />
                                <span>Seller</span>
                            </label>
                        </div>
                        {/* {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>} */}

                        <div className="flex justify-start items-center">
                            <BsInfoCircleFill className="text-2xl text-primary" />
                            <p className="ps-2 text-sm">
                                Your activities on this platform go beyond your selected role
                            </p>
                        </div>

                        <Button
                            text="Submit"
                            className="mt-4 bg-primary text-baseColor px-10 mx-auto py-4 rounded-lg"
                            type="submit" isLoading={isRequestLoading}
                        />
                    </form>
                </div>

                <p className='w-[90%] py-6 text-neutral-500 text-sm text-center'>By continuing, you agree to our <span className='text-neutral-700 font-semibold'>Terms of Service</span>,
                    and acknowledge you've read our <span className='text-neutral-700 font-semibold'>Privacy Policy</span> </p>
                <p onClick={loginModal.open} className='text-sm cursor-pointer'>Already a member, <a className='text-primary'> Log in </a></p>
            </div>
        </Modal>
    )
}

export default SignUpModal