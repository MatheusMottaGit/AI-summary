import fs from "fs";
import { openai } from "./lib/openai";

export async function handleTranscription() {
  openai.audio.transcriptions.create({
    file: fs.createReadStream("./server/audio.mp3"),
    model: "whisper-1",
  })
    .then(response => {
      console.log('[TRANSCRIPTION_STARTED]')

      fs.writeFileSync('./server/output.txt', response.text, 'utf-8')

      console.log('[FINISHED_TRANSCRIPTION]')
    })
    .catch(error => {
      console.log(error)
    })
}
