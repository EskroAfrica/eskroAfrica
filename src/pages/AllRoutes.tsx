import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import PersistLogin from '../store/PersistLogin'
import Home from './Home'
import Footer from '../components/Footer'
import SignInModal from '../components/Modals/RegisterModal'
import SignUpModal from '../components/Modals/SignUpModal'
import Dashboard from './Dashboard'
import usePersist from '../hooks/usePersist'
import CongratulationsModal from '../components/Modals/CongratulationsModal'
import LoginModal from '../components/Modals/LoginModal'
import CreatePasswordModal from '../components/Modals/CreatePasswordModal'
import ChangePassword from './ChangePassword'
import Products from './Products'

const AllRoutes = () => {
    const [persist] = usePersist();
    const navigate = useNavigate();
    const location = useLocation()
  
    useEffect(() => {
        // Only redirect if on the homepage ('/')
        if (location.pathname === '/' && persist) {
          navigate('/dashboard');  // Redirect to dashboard if persist is true
        }
      }, [persist, navigate, location]);

  return (
    <div className='flex flex-col min-h-screen'>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route element={<PersistLogin />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/products/:name' element={<Products/>}/>
        </Route>
      </Routes>
      <Footer />
      <SignInModal />
      <SignUpModal />
      <CongratulationsModal />
      <LoginModal /> 
      <CreatePasswordModal/>
    </div>
  )
}

export default AllRoutes