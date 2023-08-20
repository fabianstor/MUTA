import { IMaterial } from "../interface/material"
import Material from "../models/materials"

// OBTENER TODOS LOS MATERIALES
export const serviceGetAllMaterials = async () => {
    try {
        return (await Material.findAll())
    } catch (error) {
        console.log('ERROR AL CONSULTAR LOS MATERIALES')
    }
}

// OBTENER UN MATERIAL POR EL ID
export const serviceGetMaterialById = async (id: number) => {
    try {
        return (await Material.findByPk(id))
    } catch (error) {
        console.log('ERROR AL CONSULTAR UN MATERIAL')
    }
}

// CREAR UN NUEVO MATERIAL
export const serviceCreateMaterial = async (material: IMaterial) => {
    try {
        // VALIDAR POR EL NOMBRE DEL MATERIAL SI YA SE ENCUENTRA REGISTRADO
        const validateExists = await Material.findOne({where: {name: material.name}})
        if(validateExists) return {message: 'EL MATERIAL YA SE ENCUENTRA REGISTRADO', status: 200}
        // CREAR MATERIAL
        await Material.create({...material})
        return {message: 'MATERIAL CREADO CON EXITO', status: 201}
    } catch (error) {
        return {message: 'ERROR AL CREAR MATERIAL', status: 400}
    }
}

// ACTUALIZAR MATERIAL
export const serviceUpdateMaterial = async (id: number, material: IMaterial) => {
    try {
        // VALIDAR QUE SI EXISTA EL REGISTRO DEL MATERIAL
        const validateExists = await Material.findOne({where: {id: id}})
        if(!validateExists) return {message: 'EL MATERIAL NO SE ENCUENTRA REGISTRADO', status: 200}
        // VALIDAR QUE NO EXISTA OTRO MATERIAL CON EL MISMO NOMBRE QUE SE VA A ACTUALIZAR
        const validateDuplicate = await Material.findOne({where: {name: material.name}, attributes: ['id']})
        // EL REGISTRO ENCONTRADO PARA ESE NOMBRE DEBE TENER EL MISMO ID QUE SE LE PASA PARA ACTUALIZAR
        if(validateDuplicate && validateDuplicate.id != id) return {message: `OTRO MATERIAL YA CUENTA CON EL NOMBRE DE ${material.name}`, status: 200}
        // ACTUALIZAR MATERIAL
        await Material.update({...material}, {where: {id}})
        return {message: 'MATERIAL ACTUALIZADO CON EXITO', status: 200}
    } catch (error) {
        console.log(error)
        return {message: 'ERROR AL ACTUALIZAR MATERIAL', status: 400}
    }
}

// ELIMINAR MATERIAL
export const serviceDeleteMaterial = async (id: number) => {
    try {
        // VALIDAR QUE EXISTA EL REGISTRO ANTES DE ELIMINAR
        const validateExists = await Material.destroy({where: {id}})
        if(!validateExists) return {message: 'EL MATERIAL NO SE ENCUENTRA REGISTRADO', status: 200}
        return {message: 'MATERIAL ELIMINADO CON EXITO', status: 200}
    } catch (error) {
        return {message: 'ERROR AL ELIMINAR MATERIAL', status: 400}
    }
}