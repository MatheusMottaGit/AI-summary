import { Dispatch, FormEvent, SetStateAction } from "react"

export interface Transcription {
  videoUrl: string
  handleSendURL: (event: FormEvent<HTMLFormElement>) => Promise<void>
  getVideoTranscription: (event: FormEvent<HTMLFormElement>) => Promise<void>
}