import fastify from "fastify"
import cors from "@fastify/cors"
import jwt from '@fastify/jwt'
import { audioRoutes } from "./routes/audioRoutes"
import { transcriptionRoutes } from "./routes/transcriptionRoutes"
import { authRoutes } from "./routes/auth"

const app = fastify()

app.register(cors, {
  origin: true
})

app.register(jwt, {
  secret: 'huivefhwkcohuriohu4ihgurigquguihfjklw'
})

app.register(audioRoutes)
app.register(transcriptionRoutes)
app.register(authRoutes)

app
  .listen({ port: 3333, host: '0.0.0.0' })
  .then(() => console.log("server running"))

