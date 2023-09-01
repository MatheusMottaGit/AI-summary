import { Transcription } from "@/types/transcription";
import { formatVideoURL } from "@/utils/urlFormater";
import axios from "axios";
import { FormEvent, ReactNode, createContext, useState } from "react";

export const TranscriptionContext = createContext({} as Transcription)

export const TranscriptionProvider = ({ children }: { children: ReactNode }) => {

  const [videoUrl, setVideoUrl] = useState('')
  // const [isLoading, setIsLoading] = useState(false)

  async function handleSendURL(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault()

      const formData = new FormData(event.currentTarget)
      const inputURL = String(formData.get('url'))

      const { embedURL, videoID } = formatVideoURL(inputURL)
      setVideoUrl(embedURL)

      await axios.get(`http://localhost:3333/audio`, {
        params: {
          videoID: videoID
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function getVideoTranscription(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault()

      const formData = new FormData(event.currentTarget)
      const textarea = formData.get('textarea')
      const response = await axios.post('http://localhost:3333/role', {
        message: textarea,
      })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TranscriptionContext.Provider value={{ videoUrl, handleSendURL, getVideoTranscription }}>
      {children}
    </TranscriptionContext.Provider>
  )
}