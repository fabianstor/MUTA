import { Request, Response, NextFunction } from "express"
import {Schema} from 'joi'

export const validateJoi = (schema: Schema | null, schemaBody?: Schema)=> {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if(req.params.id && schema) {
                const {error} = schema.validate(req.params.id, {abortEarly: false})
                if(error) {
                    const messagesError = error.details.map((detalle) => detalle.message)
                    return res.send(messagesError).status(400)
                }
            }
            if(req.body && schemaBody) {
                const {error} = schemaBody.validate(req.body, {abortEarly: false})
                if(error) {
                    const messagesError = error.details.map((detalle) => detalle.message)
                    return res.send(messagesError).status(400)
                }
            }
            next()
        } catch (error) {
            res.send('ERROR VALIDANDO INFORMACION').status(400)
        }
    }
}