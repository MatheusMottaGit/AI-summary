import { FastifyInstance } from "fastify"
import { z } from "zod"
import { handleVideoSummary } from "../handle-summary"

export async function transcriptionRoutes(app: FastifyInstance) {
  app.post('/role', async (request) => {
    const bodySchema = z.object({
      message: z.string()
    })

    const { message } = bodySchema.parse(request.body)

    try {
      await handleVideoSummary(message)
    } catch (error) {
      console.log(error)
    }
  })

}