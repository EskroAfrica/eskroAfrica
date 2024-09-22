import React, { ChangeEvent, useState } from 'react'
import useModal from '../../hooks/useModal';
import { useDispatch } from 'react-redux';
import Modal from './Modal';
import Button from '../Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { IoMdCheckmarkCircle, IoMdCloseCircle } from 'react-icons/io';
import { useCreatePasswordMutation } from '../../store/authApiSlice';


interface PasswordCondition {
    label: string;
    test: (password: string) => boolean;
}

const passwordConditions: PasswordCondition[] = [
    {
        label: 'At least 8 characters',
        test: (password) => password.length >= 8,
    },
    {
        label: 'At least one non-alphanumeric character',
        test: (password) => /[^a-zA-Z0-9]/.test(password),
    },
    {
        label: 'At least one lowercase letter (a-z)',
        test: (password) => /[a-z]/.test(password),
    },
    {
        label: 'At least one uppercase letter (A-Z)',
        test: (password) => /[A-Z]/.test(password),
    },
];



const CreatePasswordModal = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [createPassword,  { isLoading, isSuccess, isError, error }] = useCreatePasswordMutation()

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, password: e.target.value });
    };

    const [isRequestLoading, setIsRequestLoading] = useState(false)
    const loginModal = useModal("LoginModal")

    const dispatch = useDispatch()

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });


    const [errors, setErrors] = useState({
        password: '',
        confirmPassword: '',
        passwordMismatch: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handlePasswordChange(e)
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const validate = () => {
        const newErrors = { password: '', confirmPassword: '', passwordMismatch: '' };
        let isValid = true
        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Password is required';
            isValid = false
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.passwordMismatch = 'Password Mismatch';
            isValid = false
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }
        // Submit form data
        setIsRequestLoading(true)

        try {
            var confirmEmailPayload = {
                ...formData,
                userId: "userId",
                code: "hey"
            }
            console.log(confirmEmailPayload)
            const response = await createPassword(confirmEmailPayload).unwrap()
            loginModal.open()
            setIsRequestLoading(false)
            // dispatch(setCredentials({ ...tst, user: "Seun Jay" }))
            // congratulationsModal.open()
        } catch (error:any) {
            setIsRequestLoading(false)
            if (error?.status) {
              console.log(error?.status)
              }
        }
    };

    return (
        <Modal modalKey="CreatePasswordModal">
            <div className="py-5 md:py-10 px-2 md:px-5 flex flex-col justify-center items-center">
                <div className="flex items-center justify-center h-full">
                    <img className="w-18 h-9" src="/assets/Frame7.png" alt="" />
                </div>
                <p className='text-xl md:text-3xl font-semibold pt-3'> Create Password </p>
                <p className='text-xs text-neutral-500'>Full access to any of our products</p>

                <div className="flex-row w-full mx-auto justify-center mt-5">

                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="relative">
                            <label htmlFor="password" className="block text-base font-medium">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'} // Toggles between password and text type
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full py-4 px-3 rounded-md border-2 ${errors.password ? 'border-red-200' : 'border-primary200'}`}
                            />
                            <div
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <IoMdEyeOff className="text-2xl text-primary" />
                                ) : (
                                    <IoMdEye className="text-2xl text-primary" />
                                )}
                            </div>
                            <div className="min-h-[20px]">
                                {errors.password && <p className="text-red-300 text-xs mt-1">{errors.password}</p>}
                            </div>
                        </div>
                        <ul className="space-y-1">
                            {passwordConditions.map((condition, index) => (
                                <li key={index} className="flex items-center">
                                    {condition.test(formData.password) ? (
                                        <IoMdCheckmarkCircle className="text-green-500" />
                                    ) : (
                                        <IoMdCloseCircle className="text-red-500" />
                                    )}
                                    <span className="ml-2">{condition.label}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="relative pt-2">
                            <label htmlFor="confirmPassword" className="block text-base font-medium">Confirm Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'} // Toggles between password and text type
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`w-full py-4 px-3 rounded-md border-2 ${errors.confirmPassword ? 'border-red-200' : 'border-primary200'} ${errors.passwordMismatch ? 'border-red-200' : 'border-primary200'} `}
                            />
                            <div
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <IoMdEyeOff className="text-2xl text-primary" />
                                ) : (
                                    <IoMdEye className="text-2xl text-primary" />
                                )}
                            </div>
                            <div className="min-h-[20px]">
                                {errors.password && <p className="text-red-300 text-xs mt-1">{errors.password}</p>}
                                {errors.passwordMismatch && <p className="text-red-300 text-xs mt-1">{errors.passwordMismatch}</p>}
                            </div>
                        </div>

                        <div className="py-2 ">
                            <Button
                                text="Create Password"
                                className="mt-4 bg-primary text-baseColor px-10 mx-auto py-4 rounded-lg"
                                type="submit" isLoading={isRequestLoading}
                            />
                        </div>
                    </form>
                </div>

                <p className='w-[90%] py-6 text-neutral-500 text-sm text-center'>By continuing, you agree to our <span className='text-neutral-700 font-semibold'>Terms of Service</span>,
                    and acknowledge you've read our <span className='text-neutral-700 font-semibold'>Privacy Policy</span> </p>
                {/* <p className='text-sm'>Already a member, <a className='text-primary'> Log in </a></p> */}
            </div>
        </Modal>
    )
}

export default CreatePasswordModal