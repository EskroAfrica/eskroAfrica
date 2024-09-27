import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import usePersist from '../hooks/usePersist'

const PersistLogin = () => {
    const [persist] = usePersist()

    if(!persist) {
        return (
           <Navigate to='/' replace />
          )
    }
    return <Outlet />
  
}

export default PersistLogin