'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FormEvent, useState } from 'react'

import NoVideo from '@/components/NoVideo'
import NoFile from '@/components/NoFile'
import { formatVideoURL } from '@/utils/urlFormater'
import axios from 'axios'

export default function Home() {

  const [videoUrl, setVideoUrl] = useState('')

  async function handleSendURL(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const inputURL = String(formData.get('url'))

    const { embedURL } = formatVideoURL(inputURL)
    setVideoUrl(embedURL)
  }

  return (
    <main className='w-full p-4 flex flex-col items-center justify-center gap-12'>
      <div className='flex flex-col text-center'>
        <h1 className='font-bold text-xl'>Excerpt generator</h1>

        <span className='text-zinc-300 text-sm'>Using AI for creating a videos summary to help you</span>
      </div>

      <form onSubmit={handleSendURL} className='flex items-center gap-2 w-[548px]'>
        <Input placeholder='Insert a youtube video URL...' name='url' />

        <Button type='submit'>Generate</Button>
      </form>

      <div className='w-full flex gap-5'>
        <div className='w-full rounded-md h-[370px] border border-zinc-200 flex flex-col items-center justify-center'>
          <NoVideo />

          <iframe
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className='w-full bg-zinc-100 rounded-md h-[370px] flex flex-col items-center justify-center'>
          <NoFile />
        </div>
      </div>
    </main>
  )
}
