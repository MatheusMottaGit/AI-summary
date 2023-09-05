import { Download } from 'lucide-react'
import React from 'react'

const EmptyVideo = () => {
  return (
    <div className='h-64 flex flex-col items-center justify-center text-zinc-600 border-2 border-dashed border-zinc-600 rounded-md bg-zinc-800'>
      <Download />

      <span>Seu vídeo irá aparecer aqui</span>
    </div>
  )
}

export default EmptyVideo