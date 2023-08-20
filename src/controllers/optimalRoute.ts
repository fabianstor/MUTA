import { NextFunction, Request, Response } from "express"
import { calculateRoute, validateMaterials } from "../services/optimalRoute"

// BUSCAR LA RUTA MAS OPTIMA PARA LA RECOLECCION DE RECURSOS
export const route = async (req: Request, res: Response) => {
    try {
        const {materials, totalWeight} = req.body
        const response = await calculateRoute(materials, Number(totalWeight))
        res.send(response.message).status(response.status)
    } catch (error) {
        res.send('ERROR AL PROCESAR LA INFORMACION DE LOS MATERIALES').status(400)
    }
}

// VALIDAR SI LOS MATERIALES EXISTEN BASADO EN EL NOMBRE
export const validateExists = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await validateMaterials(req.body.materials)
        if(response?.message)  return res.send(response.message).status(response.status)
        return next()
    } catch (error) {
        return res.send({message: 'ERROR AL VALIDAR LOS MATERIALES'}).status(400)
    }
}