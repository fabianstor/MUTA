import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

// ENCRIPTAR PASSWORD
export const encrypt = async (password: string) => {
    return bcrypt.hash(password, 10)
}

// VALIDAR PASSWORD
export const decrypt = async (passwordValidate: string, password: string) => {
    return bcrypt.compare(password, passwordValidate)
}

// GENERACION DE TOKEN DE ACCESO
export const generateToken = (usuario: string) => {
    return jwt.sign({usuario}, process.env.JWTKEY ?? '', { expiresIn: '10m' } )
}