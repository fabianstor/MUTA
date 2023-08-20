import { IMaterial } from "../interface/material";
import Material from "../models/materials";

export const calculateRoute = async (materials: IMaterial[], totalWeight: number) => {
    try {
        let total = 0
        const response: IMaterial[] = []
        let remainingWeight = totalWeight
        materials.forEach((material: IMaterial, index) => {
            materials[index].total = material.value * material.weight
        })
        materials = materials.sort((a, b) => b.total - a.total)
        materials.forEach((material) => {
            if(remainingWeight >= material.weight) {
                const result: IMaterial = {} as IMaterial
                result.name = material.name
                result.total = material.total
                response.push(result)
                remainingWeight = remainingWeight - material.weight
                total = total + material.total
            }
        })
        if(response.length == 0) return {message: 'NO HAY RUTA A TOMAR PARA ESTA SITUACION', status: 200}
        return {message: {message: 'LA MEJOR DECISION A TOMAR', result: response, total}, status: 200}
    } catch (error) {
        return {message: 'ERROR AL PROCESAR LA INFORMACION', status: 400}
    }
}

export const validateMaterials = async (materials: IMaterial[]) => {
    try {
        const nonExistent: string[] = []
        for (const material of materials) {
            const validate = await Material.findOne({where: {name: material.name}})
            if(!validate) nonExistent.push(material.name)
        }
        if(nonExistent.length > 0) return {message: `LOS SIGUIENTES MATERIALES NO EXISTEN: ${JSON.stringify(nonExistent)}`, status: 200}
    } catch (error) {
        return {message: 'ERROR AL VALIDAR MATERIALES', status: 400}
    }
}