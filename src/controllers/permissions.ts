import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import * as dotenv from 'dotenv'

dotenv.config()


export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization
        if(!token) return res.send('SE DEBE INGRESAR UN TOKEN VALIDO').status(401)
        jwt.verify(token, process.env.JWTKEY || '', (error, decode) => {
            if(error) return res.send('TOKEN INVALIDO').status(401)
            next()
        })
    } catch (error) {
        console.log(error)
        return res.send('ERROR VALIDANDO CREDENCIALES').status(400)
    }
}