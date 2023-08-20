import { Router } from "express"
import { route } from "../controllers/optimalRoute"
import { verifyToken } from "../controllers/permissions"

const routeRouter = Router()

routeRouter.post('/', verifyToken, route)

export default routeRouter