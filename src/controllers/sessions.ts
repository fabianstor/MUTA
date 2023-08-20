import { Request, Response } from "express"
import { serviceConsultUser, serviceCreateUser } from "../services/sessions"

// CREAR UN NUEVO USUARIO
export const createUser = async (req: Request, res: Response) => {
    try {
        const {user, password} = req.body
        const response = await serviceCreateUser(user, password)
        res.status(response.status).send(response.message)
    } catch (error) {
        res.status(400).send('ERROR AL CREAR USUARIO')
    }
}

// CONSULTAR USUARIO Y GENERAR TOKEN
export const logInUser = async (req: Request, res: Response) => {
    try {
        const {user, password} = req.body
        const response = await serviceConsultUser(user, password)
        res.status(response.status).send({respuesta: response.message})
    } catch (error) {
        res.status(400).send('ERROR AL CONSULTAR USUARIO')
    }
}