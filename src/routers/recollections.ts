import { Router } from "express"
import * as collectionController from "../controllers/collections"
import { verifyToken } from "../controllers/permissions"

const colecctionRoutes = Router()

colecctionRoutes.get('/', verifyToken, collectionController.getCollections)
colecctionRoutes.get('/:id', verifyToken, collectionController.getCollection)
colecctionRoutes.post('/', verifyToken, collectionController.createCollection)
colecctionRoutes.put('/:id', verifyToken, collectionController.updateCollection)
colecctionRoutes.delete('/:id', verifyToken, collectionController.deleteCollection)

export default colecctionRoutes