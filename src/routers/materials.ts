import { Router } from "express"
import { createMaterial, deleteMaterial, getMaterial, getMaterials, updateMaterial } from "../controllers/materials"
import { verifyToken } from "../controllers/permissions"

const materialRoutes = Router()

materialRoutes.get('/', verifyToken, getMaterials)
materialRoutes.get('/:id', verifyToken, getMaterial)
materialRoutes.post('/', verifyToken, createMaterial)
materialRoutes.put('/:id', verifyToken, updateMaterial)
materialRoutes.delete('/:id', verifyToken, deleteMaterial)

export default materialRoutes