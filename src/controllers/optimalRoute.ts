import { NextFunction, Request, Response } from "express"
import { calculateRoute, validateMaterials } from "../services/optimalRoute"

// BUSCAR LA RUTA MAS OPTIMA PARA LA RECOLECCION DE RECURSOS
export const route = async (req: Request, res: Response) => {
    try {
        const {materials, totalWeight} = req.body
        const response = await calculateRoute(materials, Number(totalWeight))
        res.send(response.message).status(response.status)
    } catch (error) {
        res.status(400).send('ERROR AL PROCESAR LA INFORMACION DE LOS MATERIALES')
    }
}

// VALIDAR SI LOS MATERIALES EXISTEN BASADO EN EL NOMBRE
export const validateExists = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await validateMaterials(req.body.materials)
        if(response?.message)  return res.status(response.status).send(response.message)
        return next()
    } catch (error) {
        return res.status(400).send({message: 'ERROR AL VALIDAR LOS MATERIALES'})
    }
}