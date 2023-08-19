import { Request, Response } from "express"
import { serviceGetAllMaterials, serviceGetMaterialById, serviceCreateMaterial, serviceUpdateMaterial, serviceDeleteMaterial } from "../services/material"
import { IMaterial } from "../interface/material"

export const getMaterials = async (_req: Request, res: Response) => {
    try {
        const materials = await serviceGetAllMaterials()
        res.send(materials).status(200)
    } catch (error) {
        res.send('ERROR AL OBTENER LOS MATERIALES').status(400)
    }
}

export const getMaterial = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const material = await serviceGetMaterialById(Number(id))
        if(material) return res.send(material).status(200)
        return res.send('PRODUCTO NO REGISTRADO').status(200)
    } catch (error) {
        res.send('ERROR AL OBTENER UN MATERIAL').status(400)
    }
}

export const createMaterial = async (req: Request, res: Response) => {
    try {
        const material: IMaterial = req.body
        const response = await serviceCreateMaterial(material)
        res.send(response.message).status(response.status)
    } catch (error) {
        res.send('ERROR AL CREAR MATERIAL').status(400)
    }
}

export const updateMaterial = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const material: IMaterial = req.body
        const response = await serviceUpdateMaterial(Number(id), material)
        res.send(response.message).status(response.status)
    } catch (error) {
        res.send('ERROR AL CREAR MATERIAL').status(400)
    }
}

export const deleteMaterial = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const response = await serviceDeleteMaterial(Number(id))
        res.send(response.message).status(response.status)
    } catch (error) {
        res.send('ERROR AL ELIMINAR MATERIAL').status(400)
    }
}