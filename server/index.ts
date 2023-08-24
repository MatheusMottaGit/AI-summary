import fastify from "fastify"
import cors from "@fastify/cors"
import { downloader } from "./download"
import { z } from "zod"
import { handleMP3 } from "./handle-mp3"

const app = fastify()

app.register(cors, {
  origin: true
})

app.get('/audio', async (request, response) => {
  const paramsSchema = z.object({
    videoID: z.string()
  })

  const { videoID } = paramsSchema.parse(request.params)

  try {
    await downloader(videoID)

    await handleMP3()
  } catch (error) {
    console.log(error)
  }
})

app
  .listen({ port: 3333 })
  .then(() => console.log("server running"))

