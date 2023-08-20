import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import * as dotenv from 'dotenv'

dotenv.config()

// MIDDLEWARE DE VALIDACION DE TOKEN DE ACCESO
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization
        if(!token) return res.status(401).send('NECESITAS UN TOKEN VALIDO PARA ACCEDER A ESTE SERVICIO')
        jwt.verify(token, process.env.JWTKEY ?? '', (error, _decode) => {
            if(error) return res.status(401).send('TOKEN INVALIDO')
            return next()
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send('ERROR VALIDANDO CREDENCIALES')
    }
}