import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const FileGeneratorTitle = () => {
  return (
    <div className='flex items-center justify-between gap-2'>
      <h1 className='font-bold text-xl'>Gerador de arquivos</h1>

      <Select>
        <SelectTrigger className='w-40 text-zinc-400'>
          <SelectValue placeholder='Tipo do arquivo' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='.pdf'>PDF</SelectItem>
          <SelectItem value='.pdf'>TXT</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default FileGeneratorTitle