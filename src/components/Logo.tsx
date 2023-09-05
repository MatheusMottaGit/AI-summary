import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo.jpg'

const Logo = () => {
  return (
    <div className='flex items-center gap-1'>
      <span className='text-white font-bold'>
        Luna
      </span>

      <div className='grid place-items-center bg-zinc-950 w-7 h-7 rounded-md text-white font-bold'>
        AI
      </div>
    </div>
  )
}

export default Logo