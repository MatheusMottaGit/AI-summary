'use client'
import React, { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCheckIcon } from 'lucide-react'
import EmptyVideo from '@/components/generate/EmptyVideo'
import PromptForm from '@/components/generate/PromptForm'
import TitleAndFileName from '@/components/generate/TitleAndFileName'
import { formatVideoURL } from '@/utils/urlFormater'
import { api } from '@/lib/api'

const Generate = () => {
  const [videoUrl, setVideoUrl] = useState('')

  async function handleVideoURL(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const inputUrl = String(formData.get('url'))

    const { embedURL, videoID } = formatVideoURL(inputUrl)
    setVideoUrl(embedURL)

    await api.get('/audio', {
      params: {
        videoID: videoID
      }
    })
  }
  return (
    <div className='flex flex-col w-full gap-5'>
      <TitleAndFileName />

      <form onSubmit={handleVideoURL} className='flex gap-3'>
        <Input
          required
          placeholder='Insira a URL do vídeo do youtube...'
          name='url'
        />

        <Button type='submit'>
          {videoUrl ? 'Enviado' : 'Enviar'}
          <CheckCheckIcon size={15} />
        </Button>
      </form>

      <div className='border border-zinc-600 p-4 rounded-md flex flex-col gap-3'>
        {
          videoUrl ? (
            <iframe src={videoUrl} className='aspect-video h-64 rounded-md'>

            </iframe>
          ) : <EmptyVideo />
        }

        <PromptForm />
      </div>
    </div>
  )
}

export default Generate