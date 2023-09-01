import { Download } from 'lucide-react'
import React from 'react'

const EmptyVideo = () => {
  return (
    <div className='h-64 flex flex-col items-center justify-center text-zinc-300 border-2 border-dashed border-zinc-200 rounded-md bg-zinc-50'>
      <Download />

      <span>Seu vídeo irá aparecer aqui</span>
    </div>
  )
}

export default EmptyVideo