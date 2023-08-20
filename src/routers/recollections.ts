import { Router } from "express"
import * as collectionController from "../controllers/collections"

const colecctionRoutes = Router()

colecctionRoutes.get('/', collectionController.getCollections)
colecctionRoutes.get('/:id', collectionController.getCollection)
colecctionRoutes.post('/', collectionController.createCollection)
colecctionRoutes.put('/:id', collectionController.updateCollection)
colecctionRoutes.delete('/:id', collectionController.deleteCollection)

export default colecctionRoutes