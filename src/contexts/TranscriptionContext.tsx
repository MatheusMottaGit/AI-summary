import { api } from "@/lib/api";
import { Transcription } from "@/types/transcription";
import { formatVideoURL } from "@/utils/urlFormater";
import { FormEvent, ReactNode, createContext, useState } from "react";

export const TranscriptionContext = createContext({} as Transcription)

export const TranscriptionProvider = ({ children }: { children: ReactNode }) => {

  const [videoUrl, setVideoUrl] = useState('')

  async function receiveVideoUrl(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const urlInputData = new FormData()
    const url = String(urlInputData.get('url'))

    const { videoID, embedURL } = formatVideoURL(url)
    setVideoUrl(embedURL)

    await api.get('/auth', {
      params: {
        videoID: videoID
      }
    })
  }

  return (
    <TranscriptionContext.Provider value={{ receiveVideoUrl, videoUrl }}>
      {children}
    </TranscriptionContext.Provider>
  )
}