import express from "express"
import * as dotenv from 'dotenv'
import { initialize } from "./src/database/syncSequelize"
import sessionsRoutes from "./src/routers/sessions"
import materialRoutes from "./src/routers/materials"

dotenv.config()

const server = express()
server.use(express.json())


server.use('/session', sessionsRoutes)
server.use('/materials', materialRoutes)


initialize()

server.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING ON THE PORT: ${process.env.PORT}`)
})