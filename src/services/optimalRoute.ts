import { IMaterial } from "../interface/material";

export const calculateRoute = async (materials: IMaterial[], totalWeight: number) => {
    try {
        let total = 0
        const result: Record<string, number> = {}
        let remainingWeight = totalWeight
        materials.forEach((material: IMaterial, index) => {
            materials[index].total = material.value * material.weight
        })
        materials.sort((a, b) => b.total - a.total).forEach((material) => {
            if(remainingWeight >= material.weight) {
                result[material.name] = material.total
                remainingWeight = remainingWeight - material.weight
                total = total + material.total
            }
        })
        if(Object.keys(result).length == 0) return {message: 'NO HAY RUTA A TOMAR PARA ESTA SITUACION', status: 200}
        return {message: `LA MEJOR RUTA A TOMAR ES: ${JSON.stringify(result)} PARA RECOLECTAR UN TOTAL DE ${total}`, status: 200}
    } catch (error) {
        return {message: 'ERROR AL PROCESAR LA INFORMACION', status: 400}
    }
}