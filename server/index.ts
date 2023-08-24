import fastify from "fastify"
import cors from "@fastify/cors"
import { downloader } from "./download"
import { z } from "zod"
import { handleMP3 } from "./handle-mp3"
import { handleTranscription } from "./transcription"

const app = fastify()

app.register(cors, {
  origin: true
})

app.get('/audio', async (request, response) => {
  const paramsSchema = z.object({
    videoID: z.string()
  })

  const { videoID } = paramsSchema.parse(request.query)

  try {
    await downloader(videoID)

    await handleMP3()
  } catch (error) {
    console.log(error)
  }
})

app.post('/role', async (request) => {
  const bodySchema = z.object({
    message: z.string()
  })

  const { message } = bodySchema.parse(request.body)

  try {
    await handleTranscription(message)
  } catch (error) {
    console.log(error)
  }
})

app
  .listen({ port: 3333 })
  .then(() => console.log("server running"))

