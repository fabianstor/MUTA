import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import * as dotenv from 'dotenv'

dotenv.config()


export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization
        if(!token) return res.send('NECESITAS UN TOKEN VALIDO PARA ACCEDER A ESTE SERVICIO').status(401)
        jwt.verify(token, process.env.JWTKEY ?? '', (error, _decode) => {
            if(error) return res.send('TOKEN INVALIDO').status(401)
            return next()
        })
    } catch (error) {
        console.log(error)
        return res.send('ERROR VALIDANDO CREDENCIALES').status(400)
    }
}