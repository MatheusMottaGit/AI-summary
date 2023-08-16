import React from 'react'
import Image from 'next/image'
import upload from '@/assets/Upload.svg'

const NoFile = () => {
  return (
    <>
      <Image
        src={upload}
        alt=''
        width={100}
        height={100}
        className='h-6 w-6'
      />

      <span className='text-zinc-300 text-sm'>And here your document</span>
    </>
  )
}

export default NoFile