import { Router } from "express"
import { route, validateExists } from "../controllers/optimalRoute"
import { verifyToken } from "../controllers/permissions"
import { schemaRoute } from "../joi/optimalRouteJoi"
import { validateJoi } from "../controllers/validations"

const routeRouter = Router()

// RUTA DE RUTA MÁS OPTIMA CON VERIFICACION DE TOKEN, JOI Y EXISTENCIA DE MATERIALES
routeRouter.post('/', verifyToken, validateJoi(null, schemaRoute), validateExists, route)

export default routeRouter