import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../Button'
import Modal from './Modal'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useDispatch} from 'react-redux';
import { selectCurrentUser, setCredentials, SetCredentialsPayload } from '../../store/authSlice';
import useModal from '../../hooks/useModal';
import { Credentials, useLoginMutation } from '../../store/authApiSlice';
import { jwtDecode } from 'jwt-decode';
import usePersist from '../../hooks/usePersist';


const LoginModal = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isRequestLoading, setIsRequestLoading] = useState(false)
    const loginModal = useModal("LoginModal")
    const [login,  { isLoading, isSuccess, isError, error }] = useLoginMutation()
    

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [persist, setPersist] = usePersist()
    
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        const newErrors = { email: '', password: '' };
        let isValid = true
        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
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
            var payload: Credentials = {
                username: formData.email, 
                password: formData.password, 
                grant_type: "password", 
                client_id: "WebClient",
                client_secret: "default-secret"
            }
            const response = await login(payload).unwrap()
            const decoded: any = jwtDecode(response.access_token);
            const credentialPayload: SetCredentialsPayload = {user: decoded.email, accessToken: response.access_token, refreshToken: response.refresh_token}
            dispatch(setCredentials(credentialPayload))
            loginModal.close()
            setPersist(true)
             // Immediately set localStorage directly to avoid timing issues
    localStorage.setItem('persist', JSON.stringify(true));
            navigate('/dashboard', { replace: true })
        } catch (error:any) {
            setIsRequestLoading(false)
            if (error?.status) {
              setErrors({ ...errors, email:  error?.data?.error});
              }
        }

    };

    return (
        <Modal modalKey='LoginModal'>
            <div className="py-5 md:py-10 px-2 md:px-5 flex flex-col justify-center items-center">
                <div className="flex items-center justify-center h-full">
                    <img className="w-18 h-9" src="/assets/Frame7.png" alt="" />
                </div>
                <p className='text-xl md:text-3xl font-semibold pt-3'> Log In </p>
                <p className='text-xs text-neutral-500'>Full access to any of our products</p>

                <div className="flex-row w-full mx-auto justify-center mt-5">

                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="">
                            <label htmlFor="email" className="block text-base font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='johndoe@gmail.com'
                                className={`w-full py-4 px-3 rounded-md border-2 ${errors.email ? 'border-red-200' : 'border-primary200'}`}
                            />
                            {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div className="relative">
                            <label htmlFor="password" className="block text-base font-medium">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'} // Toggles between password and text type
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full py-4 px-3 rounded-md border-2 ${errors.email ? 'border-red-200' : 'border-primary200'}`}
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

                        <div className="py-2 ">
                            <Button
                                text="Log In"
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

export default LoginModal