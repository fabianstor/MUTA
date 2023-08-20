import { Request, Response } from "express"
import * as collectionService from "../services/collections"
import { ICollection } from "../interface/collections"

// OBTENER TODAS LAS RECOLECCIONES
export const getCollections = async (_req: Request, res: Response) => {
    try {
        const collections = await collectionService.serviceGetAllCollections()
        res.status(200).send(collections)
    } catch (error) {
        res.status(400).send('ERROR AL CONSULTAR LAS RECOLECCIONES')
    }
}

//OBTENER UNA RECOLECCION BASADA EN EL ID DE LA RECOLECCION
export const getCollection = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const colecction = await collectionService.serviceGetCollectionById(Number(id))
        if(colecction) return res.status(200).send(colecction)
        return res.status(404).send('RECOLECCION NO REGISTRADA')
    } catch (error) {
        res.status(400).send('ERROR AL CONSULTAR RECOLECCION')
    }
}

// CREAR UNA NUEVA RECOLECCION
export const createCollection = async (req: Request, res: Response) => {
    try {
        const collection: ICollection = req.body
        const response = await collectionService.serviceCreateCollection(collection)
        res.status(response.status).send(response.message)
    } catch (error) {
        res.status(400).send('ERROR AL CREAR RECOLECCION')
    }
}

// ACTUALIZAR UNA RECOLECCION EXISTENTE
export const updateCollection = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const collection: ICollection = req.body
        const response = await collectionService.serviceUpdateCollection(Number(id), collection)
        res.status(response.status).send(response.message)
    } catch (error) {
        res.status(400).send('ERROR AL ACTUALIZAR LA RECOLECCION')
    }
}

//ELIMINAR UNA RECOLECCION
export const deleteCollection = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const response = await collectionService.serviceDeleteCollection(Number(id))
        res.status(response.status).send(response.message)
    } catch (error) {
        res.status(400).send('ERROR AL ELIMINAR LA RECOLECCION')
    }
}