import { Router } from "express"
import { createUser, logInUser } from "../controllers/sessions"
import { schemaSession } from "../joi/sesssionsJoi"
import { validateJoi } from "../controllers/validations"

const sessionsRoutes = Router()

// RUTAS DE CREACION Y CONSULTA DE USARIO CON VALIDACION DE JOI
sessionsRoutes.post('/create', validateJoi(null, schemaSession), createUser)
sessionsRoutes.post('/login', validateJoi(null, schemaSession), logInUser)

export default sessionsRoutes