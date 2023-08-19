import express from "express"
import * as dotenv from 'dotenv';

dotenv.config();
const server = express()
server.use(express.json())

server.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING ON THE PORT: ${process.env.PORT}`)
})