import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCheckIcon } from 'lucide-react'
import EmptyVideo from '@/components/generate/EmptyVideo'
import PromptForm from '@/components/generate/PromptForm'
import TitleAndFileName from '@/components/generate/TitleAndFileName'

const Generate = () => {
  return (
    <div className='flex flex-col w-full gap-5'>
      <TitleAndFileName />

      <form className='flex gap-3'>
        <Input
          required
          placeholder='Insira a URL do vídeo do youtube...'
          name='url'
        />

        <Button type='submit'>
          Enviar
          <CheckCheckIcon size={15} />
        </Button>
      </form>

      <div className='border border-zinc-600 p-4 rounded-md flex flex-col gap-3'>
        <EmptyVideo />
        <PromptForm />
      </div>
    </div>
  )
}

export default Generate