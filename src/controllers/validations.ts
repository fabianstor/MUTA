import { Request, Response, NextFunction } from "express"
import {Schema} from 'joi'

// MIDDLEWARE PARA VALIDAR LAS PROPIEDADES DE LOS ID Y BODY DE CONTROLADORES
export const validateJoi = (schema: Schema | null, schemaBody?: Schema)=> {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if(req.params.id && schema) {
                const {error} = schema.validate(req.params.id, {abortEarly: false})
                if(error) {
                    const messagesError = error.details.map((detalle) => detalle.message)
                    return res.status(400).send(messagesError)
                }
            }
            if(req.body && schemaBody) {
                const {error} = schemaBody.validate(req.body, {abortEarly: false})
                if(error) {
                    const messagesError = error.details.map((detalle) => detalle.message)
                    return res.status(400).send(messagesError)
                }
            }
            next()
        } catch (error) {
            res.send('ERROR VALIDANDO INFORMACION').status(400)
        }
    }
}