import { Router } from "express"
import * as materialController from "../controllers/materials"
import { verifyToken } from "../controllers/permissions"
import { schemaMaterial, SchemaMaterialnId } from "../joi/materialsJoi"
import { validateJoi } from "../controllers/validations"

const materialRoutes = Router()

materialRoutes.get('/', verifyToken, materialController.getMaterials)
materialRoutes.get('/:id', verifyToken, validateJoi(SchemaMaterialnId), materialController.getMaterial)
materialRoutes.post('/', verifyToken, validateJoi(null, schemaMaterial), materialController.createMaterial)
materialRoutes.put('/:id', verifyToken, validateJoi(SchemaMaterialnId, schemaMaterial), materialController.updateMaterial)
materialRoutes.delete('/:id', verifyToken, validateJoi(SchemaMaterialnId), materialController.deleteMaterial)

export default materialRoutes