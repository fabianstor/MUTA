import { Router } from "express"
import * as collectionController from "../controllers/collections"
import { verifyToken } from "../controllers/permissions"
import { validateJoi } from "../controllers/validations"
import { SchemaCollectionId, SchemaCollectionBody } from "../joi/collectionsJoi"

const colecctionRoutes = Router()

// RUTAS DE COLECCIONES CON MIDDLEWARES PARA TOKEN Y  JOI
colecctionRoutes.get('/', verifyToken, collectionController.getCollections)
colecctionRoutes.get('/:id', verifyToken, validateJoi(SchemaCollectionId), collectionController.getCollection)
colecctionRoutes.post('/', verifyToken, validateJoi(null, SchemaCollectionBody), collectionController.createCollection)
colecctionRoutes.put('/:id', verifyToken, validateJoi(SchemaCollectionId, SchemaCollectionBody), collectionController.updateCollection)
colecctionRoutes.delete('/:id', verifyToken, validateJoi(SchemaCollectionId), collectionController.deleteCollection)

export default colecctionRoutes