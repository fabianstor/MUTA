import { ICollection } from "../interface/collections"
import Collection from "../models/collections"
import Material from "../models/materials"

// CONSULTAR TODAS LAS RECOLECCIONES
export const serviceGetAllCollections = async () => {
    try {
        return (await Collection.findAll())
    } catch (error) {
        console.log('ERROR AL CONSULTAR LAS RECOLECCIONES')
    }
}

// CONSULTAR UNA RECOLECCION ESPECIFICA
export const serviceGetCollectionById = async (id: number) => {
    try {
        return (await Collection.findByPk(id))
    } catch (error) {
        console.log(error)
        console.log('ERROR AL CONSULTAR LA RECOLECCION')
    }
}

// CREAR UNA NUEVA RECOLECCION
export const serviceCreateCollection = async (collection: ICollection) => {
    try {
        // VALIDAR QUE EXISTA UN MATERIAL CON EL ID DADO DEL MATERIAL
        const validateMaterialExists = await Material.findByPk(collection.materialId)
        if(!validateMaterialExists) return {message: 'NO EXISTE EL ID DEL MATERIAL', status: 404}
        await Collection.create({...collection})
        return {message: 'RECOLECION CREADA CON EXITO', status: 201}
    } catch (error) {
        return {message: 'ERROR AL CREAR LA RECOLECCION', status: 400}
    }
}

// ACTUALIZAR RECOLECCION
export const serviceUpdateCollection = async (id: number, collection: ICollection) => {
    try {
        // VALIDAR QUE EXISTA EL MATERIAL BASADO EN SU ID
        const validateMaterialExists = await Material.findByPk(collection.materialId)
        if(!validateMaterialExists) return {message: 'NO EXISTE EL ID DEL MATERIAL', status: 404}
        // VALIDAR QUE LA RECOLECCION QUE SE QUIERE ACTUALIZAR EXISTA
        const validateExists = await Collection.update({...collection}, {where: {id}})
        if(!validateExists[0]) return {message: 'LA RECOLECCION NO SE ENCUENTRA REGISTRADA', status: 404}
        // RECOLECCION ACTUALIZADA CON EXITO
        return {message: 'RECOLECCION ACTUALIZADO CON EXITO', status: 200}
    } catch (error) {
        return {message: 'ERROR AL ACTUALIZAR RECOLECCION', status: 400}
    }
}

// ELIMINAR RECOLECCION
export const serviceDeleteCollection = async (id: number) => {
    try {
        // VALIDAR QUE EXISTA LA RECOLECCION ANTES DE ELIMINAR
        const validateExists = await Collection.destroy({where: {id}})
        if(!validateExists) return {message: 'ESTA RECOLECCION NO SE ENCUENTRA REGISTRADA', status: 404}
        return {message: 'RECOLECCION ELIMINADA CON EXITO', status: 200}
    } catch (error) {
        return {message: 'ERROR AL ELIMINAR LA RECOLECCION', status: 400}
    }
}