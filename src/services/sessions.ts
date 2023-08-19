import User from "../models/users"
import { encrypt, decrypt, generateToken } from "../helpers/sessions"

export const serviceCreateUser = async (user: string, password: string) => {
    try {
        const validateUser = await User.findOne({where: {user}})
        if(validateUser) return 'USUARIO YA SE ENCUENTRA REGISTRADO'
        const passwordEncrypt = await encrypt(password)
        User.create({user, password: passwordEncrypt})
        return 'USUARIO CREADO CON EXITO'
    } catch (error) {
        return 'HA OCURRIDO UN ERROR AL CREAR AL USUARIO'
    }
}

export const serviceConsultUser = async (user: string, password: string) => {
    try {
        const passwordValidate = await User.findOne({where: {user}})
        if(passwordValidate) {
            const passworddecrypt = await decrypt(passwordValidate.password, password)
            if(passworddecrypt) return generateToken(user)
            return 'CONTRASEÑA INVALIDA'
        }
        return 'USUARIO NO REGISTRADO'
    } catch (error) {
        console.log(error)
        return 'HA OCURRIDO UN ERROR AL CONSULTAR AL USUARIO'
    }
}