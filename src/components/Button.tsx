import React from 'react'
import { ButtonProps } from '../interfaces/ButtonProps'

const Button: React.FC<ButtonProps> = ({ text, className, onClick, type, isLoading }) => {
  return (
    <button disabled= {isLoading} type={type} onClick={onClick} className={`text-center  w-full ${className}`}>

      {isLoading ? 
      <div
      className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status">
    </div>
       : text } 
    </button>
  )
}

export default Button