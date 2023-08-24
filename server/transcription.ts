import fs from "fs";
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: '' });

export async function handleTranscription(message: string) {
  await openai.audio.transcriptions.create({
    file: fs.createReadStream("audio.mp3"),
    model: "whisper-1",
  })
    .then(response => {
      console.log('[TRANSCRIPTION_STARTED]')
      fs.writeFileSync('output.txt', response.text, 'utf-8')
    })
    .catch(error => {
      console.log(error)
    })

  await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: `${message}` },
      { role: 'user', content: fs.readFileSync('output.txt', 'utf-8') }
    ]
  })
    .then(response => {
      fs.writeFileSync('summary.txt', response.choices[0].message.content as string)
    })
}
