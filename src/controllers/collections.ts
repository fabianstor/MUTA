import { Request, Response } from "express"
import * as collectionService from "../services/collections"
import { ICollection } from "../interface/collections"

export const getCollections = async (_req: Request, res: Response) => {
    try {
        const collections = await collectionService.serviceGetAllCollections()
        res.send(collections).status(200)
    } catch (error) {
        res.send('ERROR AL CONSULTAR LAS COLECCIONES').status(400)
    }
}

export const getCollection = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const colecction = await collectionService.serviceGetCollectionById(Number(id))
        if(colecction) return res.send(colecction).status(200)
        return res.send('RECOLECCION NO REGISTRADA').status(200)
    } catch (error) {
        res.send('ERROR AL CONSULTAR COLECCION')
    }
}

export const createCollection = async (req: Request, res: Response) => {
    try {
        const collection: ICollection = req.body
        const response = await collectionService.serviceCreateCollection(collection)
        res.send(response.message).status(response.status)
    } catch (error) {
        res.send('ERROR AL CREAR RECOLECCION').status(400)
    }
}

export const updateCollection = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const collection: ICollection = req.body
        const response = await collectionService.serviceUpdateCollection(Number(id), collection)
        res.send(response.message).status(response.status)
    } catch (error) {
        res.send('ERROR AL ACTUALIZAR LA RECOLECCION').status(400)
    }
}

export const deleteCollection = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const response = await collectionService.serviceDeleteCollection(Number(id))
        res.send(response.message).status(response.status)
    } catch (error) {
        res.send('ERROR AL ELIMINAR LA RECOLECCION').status(400)
    }
}