'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FormEvent, useState } from 'react'
import { formatVideoURL } from '@/utils/urlFormater'
import axios from 'axios'
import { Textarea } from '@/components/ui/textarea'

export default function Home() {

  const [videoUrl, setVideoUrl] = useState('')

  async function handleSendURL(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const inputURL = String(formData.get('url'))

    const { embedURL, videoID } = formatVideoURL(inputURL)
    setVideoUrl(embedURL)

    // await axios.get(`http://localhost:3333/audio`, {})
  }

  return (
    <main className={`w-full p-4 flex flex-col items-center justify-center ${videoUrl ? 'gap-5' : 'gap-12'}`}>
      <div className='flex flex-col text-center'>
        <h1 className='font-bold text-xl'>Excerpt generator</h1>

        <span className='text-zinc-300 text-sm'>Using AI for creating a videos summary to help you</span>
      </div>

      <form onSubmit={handleSendURL} className='flex items-center gap-2 w-[548px]'>
        <Input required placeholder='Insert a youtube video URL...' name='url' />

        <Button type='submit'>Send</Button>
      </form>

      <div className='w-[548px] flex flex-col gap-4 border border-zinc-200 rounded-md p-4'>
        {
          videoUrl ? (
            <iframe className='rounded-md h-64' src={videoUrl}></iframe>
          ) : (
            <></>
          )
        }

        <Textarea placeholder='Give AI a context about your video to get a better experience...' />

        <Button>Generate File</Button>
      </div>
    </main>
  )
}
