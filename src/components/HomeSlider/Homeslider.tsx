import React from 'react'
import './Homeslider.css'

interface HomeSliderProp {
  text: string;
}

const Homeslider : React.FC<HomeSliderProp> = ({text}) => {
  return (
    <div className='text-white p-5'>
        <div className='container text-nowrap' id="scroll-container">
            <h6 id="scroll-text"> {text}</h6>
        </div>
    </div>
  )
}

export default Homeslider