import { Router } from "express"
import { createUser, logInUser } from "../controllers/sessions"

const sessionsRoutes = Router()

sessionsRoutes.post('/create', createUser)
sessionsRoutes.post('/login', logInUser)

export default sessionsRoutes