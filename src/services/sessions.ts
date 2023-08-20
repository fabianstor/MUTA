import User from "../models/users"
import { encrypt, decrypt, generateToken } from "../helpers/sessions"

// CREAR UN NUEVO USUARIO
export const serviceCreateUser = async (user: string, password: string) => {
    try {
        // VALIDAR QUE YA NO ESTE REGISTRADO EL USUARIO
        const validateUser = await User.findOne({where: {user}})
        if(validateUser) return 'USUARIO YA SE ENCUENTRA REGISTRADO'
        // ENCRIPTAR LA CONTRASEÑA ANTES DE GUARDAR
        const passwordEncrypt = await encrypt(password)
        // GUARDAR USUARIO
        User.create({user, password: passwordEncrypt})
        return 'USUARIO CREADO CON EXITO'
    } catch (error) {
        return 'HA OCURRIDO UN ERROR AL CREAR AL USUARIO'
    }
}

// CONSULTAR CREDENCIALES DE USUARIO
export const serviceConsultUser = async (user: string, password: string) => {
    try {
        // VALIDAR QUE EXISTA EL USUARIO
        const passwordValidate = await User.findOne({where: {user}})
        if(passwordValidate) {
            // VALIDAR QUE LA CONTRASEÑA EN LA BD COINCIDA CON LA QUE SE ESTA ENVIANDO
            const passworddecrypt = await decrypt(passwordValidate.password, password)
            // SI TODO SALE BIEN SE GENERA Y RETORNA UN TOKEN DE ACCESO
            if(passworddecrypt) return generateToken(user)
            return 'CONTRASEÑA INVALIDA'
        }
        return 'USUARIO NO REGISTRADO'
    } catch (error) {
        console.log(error)
        return 'HA OCURRIDO UN ERROR AL CONSULTAR AL USUARIO'
    }
}