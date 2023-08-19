import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

export const encrypt = async (password: string) => {
    return bcrypt.hash(password, 10)
}

export const decrypt = async (passwordValidate: string, password: string) => {
    return bcrypt.compare(password, passwordValidate)
}

export const generateToken = (usuario: string) => {
    return jwt.sign({usuario}, process.env.JWTKEY || '', { expiresIn: 60 } )
}