'use client'
import EmptyVideo from '@/components/EmptyVideo'
import FileGeneratorTitle from '@/components/FileGeneratorTitle'
import PromptForm from '@/components/PromptForm'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useTranscription } from '@/hooks/useTranscription'

const Generate = () => {

  const { handleSendURL, videoUrl } = useTranscription()

  return (
    <div className='flex flex-col w-full gap-5'>
      <FileGeneratorTitle />

      <form onSubmit={handleSendURL} className='flex gap-3'>
        <Input
          required
          placeholder='Insira a URL do vídeo do youtube...'
          name='url'
        />

        <Button type='submit'>
          Enviar
        </Button>
      </form>

      <div className='border border-zinc-200 p-4 rounded-md flex flex-col gap-3'>
        {
          videoUrl ? (
            <iframe src={videoUrl} className='aspect-video h-64 rounded-md w-full'></iframe>
          ) : <EmptyVideo />
        }

        <PromptForm />
      </div>
    </div>
  )
}

export default Generate