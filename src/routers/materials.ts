import { Router } from "express"
import * as materialController from "../controllers/materials"
import { verifyToken } from "../controllers/permissions"

const materialRoutes = Router()

materialRoutes.get('/', verifyToken, materialController.getMaterials)
materialRoutes.get('/:id', verifyToken, materialController.getMaterial)
materialRoutes.post('/', verifyToken, materialController.createMaterial)
materialRoutes.put('/:id', verifyToken, materialController.updateMaterial)
materialRoutes.delete('/:id', verifyToken, materialController.deleteMaterial)

export default materialRoutes