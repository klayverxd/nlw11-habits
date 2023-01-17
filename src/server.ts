import Fastify from "fastify";
import {PrismaClient} from "@prisma/client"

const app = Fastify()
const prisma = new PrismaClient()

app.get('/', () => {
  return 'Hello world'
})

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP server running')
})
