import React from 'react'
import { ButtonProps } from '../interfaces/ButtonProps'

const Button: React.FC<ButtonProps> = ({text, className}) => {
  return (
    <div className={`text-center ${className}`}>{text}</div>
  )
}

export default Button