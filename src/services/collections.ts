import sequelize from "../database/sequelize"
import { ICollection } from "../interface/collections"
import Collection from "../models/collections"
import Material from "../models/materials"

export const serviceGetAllCollections = async () => {
    try {
        return (await Collection.findAll())
    } catch (error) {
        console.log('ERROR AL CONSULTAR LAS RECOLECCIONES')
    }
}

export const serviceGetCollectionById = async (id: number) => {
    try {
        return (await Collection.findByPk(id))
    } catch (error) {
        console.log(error)
        console.log('ERROR AL CONSULTAR LA RECOLECCION')
    }
}

export const serviceCreateCollection = async (collection: ICollection) => {
    try {
        const validateMaterialExists = await Material.findByPk(collection.materialId)
        if(!validateMaterialExists) return {message: 'NO EXISTE EL ID DEL MATERIAL', status: 200}
        await Collection.create({...collection})
        return {message: 'RECOLECION CREADA CON EXITO', status: 201}
    } catch (error) {
        return {message: 'ERROR AL CREAR LA RECOLECCION', status: 400}
    }
}

export const serviceUpdateCollection = async (id: number, collection: ICollection) => {
    try {
        const validateMaterialExists = await Material.findByPk(collection.materialId)
        if(!validateMaterialExists) return {message: 'NO EXISTE EL ID DEL MATERIAL', status: 200}
        const validateExists = await Collection.update({...collection}, {where: {id}})
        if(!validateExists[0]) return {message: 'LA RECOLECCION NO SE ENCUENTRA REGISTRADA', status: 200}
        return {message: 'RECOLECCION ACTUALIZADO CON EXITO', status: 200}
    } catch (error) {
        return {message: 'ERROR AL ACTUALIZAR RECOLECCION', status: 400}
    }
}

export const serviceDeleteCollection = async (id: number) => {
    try {
        const validateExists = await Collection.destroy({where: {id}})
        if(!validateExists) return {message: 'ESTA RECOLECCION NO SE ENCUENTRA REGISTRADA', status: 200}
        return {message: 'RECOLECCION ELIMINADA CON EXITO', status: 200}
    } catch (error) {
        return {message: 'ERROR AL ELIMINAR LA RECOLECCION', status: 400}
    }
}