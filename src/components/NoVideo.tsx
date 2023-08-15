import React from 'react'
import Image from 'next/image'
import screen from '@/assets/Screen.svg'

const NoVideo = () => {
  return (
    <>
      <Image
        src={screen}
        alt=''
        width={100}
        height={100}
        className='h-6 w-6'
      />

      <span className='text-zinc-300 text-sm'>Your video will appear here</span>
    </>
  )
}

export default NoVideo