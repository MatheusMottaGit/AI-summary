import { FastifyInstance } from "fastify"
import { z } from "zod"
import { downloader } from "../download"
import { handleMP3 } from "../handle-mp3"
import { handleTranscription } from "../transcription"

export async function audioRoutes(app: FastifyInstance) {
  app.get('/audio', async (request) => {
    const paramsSchema = z.object({
      videoID: z.string()
    })

    const { videoID } = paramsSchema.parse(request.query)

    try {
      await downloader(videoID)
      await handleMP3()
      await handleTranscription()

    } catch (error) {
      console.log(error)
    }
  })

}