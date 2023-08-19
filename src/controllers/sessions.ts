import { Request, Response } from "express"
import { serviceConsultUser, serviceCreateUser } from "../services/sessions"

export const createUser = async (req: Request, res: Response) => {
    try {
        const {user, password} = req.body
        await serviceCreateUser(user, password)
        res.send('USUARIO CREADO CON EXITO').status(201)
    } catch (error) {
        res.send('ERROR AL CREAR USUARIO').status(400)
    }
}

export const logInUser = async (req: Request, res: Response) => {
    try {
        const {user, password} = req.body
        const response = await serviceConsultUser(user, password)
        res.send({respuesta: response}).status(201)
    } catch (error) {
        res.send('ERROR AL CONSULTAR USUARIO').status(400)
    }
}