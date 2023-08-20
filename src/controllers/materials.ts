import { Request, Response } from "express"
import * as materialService from "../services/material"
import { IMaterial } from "../interface/material"

// OBTENER TODOS LOS MATERIALES
export const getMaterials = async (_req: Request, res: Response) => {
    try {
        const materials = await materialService.serviceGetAllMaterials()
        res.status(200).send(materials)
    } catch (error) {
        res.status(400).send('ERROR AL OBTENER LOS MATERIALES')
    }
}

// OBTENER UN MATERIAL POR EL ID
export const getMaterial = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const material = await materialService.serviceGetMaterialById(Number(id))
        if(material) return res.status(200).send(material)
        return res.status(404).send('MATERIAL NO REGISTRADO')
    } catch (error) {
        res.status(400).send('ERROR AL OBTENER UN MATERIAL')
    }
}

// CREAR UN NUEVO MATERIAL
export const createMaterial = async (req: Request, res: Response) => {
    try {
        const material: IMaterial = req.body
        const response = await materialService.serviceCreateMaterial(material)
        res.status(response.status).send(response.message)
    } catch (error) {
        res.status(400).send('ERROR AL CREAR MATERIAL')
    }
}

// ACTUALIZAR UN MATERIAL EXISTENTE
export const updateMaterial = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const material: IMaterial = req.body
        const response = await materialService.serviceUpdateMaterial(Number(id), material)
        res.status(response.status).send(response.message)
    } catch (error) {
        res.status(400).send('ERROR AL CREAR MATERIAL')
    }
}

// BORRAR UN MATERIAL EXISTENTE
export const deleteMaterial = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const response = await materialService.serviceDeleteMaterial(Number(id))
        res.status(response.status).send(response.message)
    } catch (error) {
        res.status(400).send('ERROR AL ELIMINAR MATERIAL')
    }
}