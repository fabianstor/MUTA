import { Request, Response } from "express"
import * as materialService from "../services/material"
import { IMaterial } from "../interface/material"

// OBTENER TODOS LOS MATERIALES
export const getMaterials = async (_req: Request, res: Response) => {
    try {
        const materials = await materialService.serviceGetAllMaterials()
        res.send(materials).status(200)
    } catch (error) {
        res.send('ERROR AL OBTENER LOS MATERIALES').status(400)
    }
}

// OBTENER UN MATERIAL POR EL ID
export const getMaterial = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const material = await materialService.serviceGetMaterialById(Number(id))
        if(material) return res.send(material).status(200)
        return res.send('MATERIAL NO REGISTRADO').status(200)
    } catch (error) {
        res.send('ERROR AL OBTENER UN MATERIAL').status(400)
    }
}

// CREAR UN NUEVO MATERIAL
export const createMaterial = async (req: Request, res: Response) => {
    try {
        const material: IMaterial = req.body
        const response = await materialService.serviceCreateMaterial(material)
        res.send(response.message).status(response.status)
    } catch (error) {
        res.send('ERROR AL CREAR MATERIAL').status(400)
    }
}

// ACTUALIZAR UN MATERIAL EXISTENTE
export const updateMaterial = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const material: IMaterial = req.body
        const response = await materialService.serviceUpdateMaterial(Number(id), material)
        res.send(response.message).status(response.status)
    } catch (error) {
        res.send('ERROR AL CREAR MATERIAL').status(400)
    }
}

// BORRAR UN MATERIAL EXISTENTE
export const deleteMaterial = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const response = await materialService.serviceDeleteMaterial(Number(id))
        res.send(response.message).status(response.status)
    } catch (error) {
        res.send('ERROR AL ELIMINAR MATERIAL').status(400)
    }
}