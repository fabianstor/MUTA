import { Request, Response } from "express"
import { calculateRoute } from "../services/optimalRoute"

export const route = async (req: Request, res: Response) => {
    try {
        const {materials, totalWeight} = req.body
        const response = await calculateRoute(materials, Number(totalWeight))
        res.send(response.message).status(response.status)
    } catch (error) {
        res.send('ERROR AL PROCESAR LA INFORMACION DE LOS MATERIALES').status(400)
    }
}