import { TranscriptionContext } from "@/contexts/TranscriptionContext"
import { useContext } from "react"

export const useTranscription = () => {
  const context = useContext(TranscriptionContext)
  return context
}