import sequelize from "../database/sequelize"
import { IMaterial } from "../interface/material"
import Material from "../models/materials"

export const serviceGetAllMaterials = async () => {
    try {
        return (await Material.findAll())
    } catch (error) {
        console.log('ERROR AL CONSULTAR LOS MATERIALES')
    }
}

export const serviceGetMaterialById = async (id: number) => {
    try {
        return (await Material.findByPk(id))
    } catch (error) {
        console.log('ERROR AL CONSULTAR UN MATERIAL')
    }
}

export const serviceCreateMaterial = async (material: IMaterial) => {
    try {
        const validateExists = await Material.findOne({where: {name: material.name}})
        if(validateExists) return {message: 'EL MATERIAL YA SE ENCUENTRA REGISTRADO', status: 200}
        await Material.create({...material})
        return {message: 'MATERIAL CREADO CON EXITO', status: 201}
    } catch (error) {
        return {message: 'ERROR AL CREAR MATERIAL', status: 400}
    }
}

export const serviceUpdateMaterial = async (id: number, material: IMaterial) => {
    try {
        const validateDuplicate = await Material.findOne({where: {name: material.name}, attributes: ['id']})
        const validateExists = await Material.findOne({where: {id: id}})
        if(!validateExists) return {message: 'EL MATERIAL NO SE ENCUENTRA REGISTRADO', status: 200}
        if(validateDuplicate && validateDuplicate.id != id) return {message: `OTRO MATERIAL YA CUENTA CON EL NOMBRE DE ${material.name}`, status: 200}
        await Material.update({...material}, {where: {id}})
        return {message: 'MATERIAL ACTUALIZADO CON EXITO', status: 200}
    } catch (error) {
        console.log(error)
        return {message: 'ERROR AL ACTUALIZAR MATERIAL', status: 400}
    }
}

export const serviceDeleteMaterial = async (id: number) => {
    try {
        const validateExists = await Material.destroy({where: {id}})
        if(!validateExists) return {message: 'EL MATERIAL NO SE ENCUENTRA REGISTRADO', status: 200}
        return {message: 'MATERIAL ELIMINADO CON EXITO', status: 200}
    } catch (error) {
        return {message: 'ERROR AL ELIMINAR MATERIAL', status: 400}
    }
}