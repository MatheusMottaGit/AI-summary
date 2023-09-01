import { openai } from "./lib/openai"
import fs from 'fs'
// import PDFPrinter from 'pdfmake'
// import { TDocumentDefinitions } from "pdfmake/interfaces"

export async function handleVideoSummary(message: string) {
  await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: 'Separe tópicos por títulos' },
      { role: 'user', content: 'Seja bem específico em cada tópico' },
      { role: 'user', content: 'Depois de cada título, faça uma quebra de linha' },
      { role: 'user', content: `${message}` },
      { role: 'user', content: fs.readFileSync('./server/output.txt', 'utf-8') }
    ]
  })
    .then(response => {
      fs.writeFileSync('./server/summary.txt', response.choices[0].message.content as any)
    })
}