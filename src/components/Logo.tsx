import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo.jpg'

const Logo = () => {
  return (
    <>
      <Image
        src={logo}
        alt=''
        className='w-10 h-10 rounded-full'
      />
    </>
  )
}

export default Logo