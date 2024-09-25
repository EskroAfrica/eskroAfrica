import React from 'react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
    <div
      className="text-primary inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  )
}

export default Loader