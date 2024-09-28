import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import usePersist from '../hooks/usePersist'
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './userDetailsSlice';

interface JwtPayload {
    email: string;
}

const PersistLogin = () => {
    const [persist] = usePersist()
    const dispatch = useDispatch()

    const decodeToken = () => {
        const token = localStorage.getItem('accessToken'); // Get token from localStorage
        if (token) {
            try {
                const decoded = jwtDecode<JwtPayload>(token);
                dispatch(setUserDetails(decoded.email))
            } catch (error) {

            }
        }
    }
    
    useEffect(() => {
        decodeToken()
    }, [dispatch])
    

    if (!persist) {
        return (
            <Navigate to='/' replace />
        )
    } else {
        return (
        <div className='flex-grow'>
            <Outlet />
        </div>) 
    }


}

export default PersistLogin