import { TranscriptionContext } from "@/app/contexts/Transcription"
import { useContext } from "react"

export const useTranscription = () => {
  const context = useContext(TranscriptionContext)
  return context
}