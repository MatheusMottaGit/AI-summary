import React from 'react'

const Header = () => {
  return (
    <header className='inline-flex items-center justify-start'>
      <div className='flex gap-1 text-black font-semibold px-4 py-4 justify-start'>
        <div className='uppercase text-white bg-black rounded-md h-8 w-8 flex items-center justify-center text-xl'>
          Ai
        </div>

        <span className='text-2xl'>Summary</span>
      </div>
    </header>
  )
}

export default Header