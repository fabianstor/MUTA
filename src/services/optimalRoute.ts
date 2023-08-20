import { IMaterial } from "../interface/material";
import Material from "../models/materials";

// BUSCAR EL MEJOR CAMINO PARA UNA RECOLECCION
export const calculateRoute = async (materials: IMaterial[], totalWeight: number) => {
    try {
        let total = 0
        const response: IMaterial[] = []
        let remainingWeight = totalWeight
        // AL ARREGLO DE MATERIALES LE AGREGAMOS UNA NUEVA PROPIEDAD
        materials.forEach((material: IMaterial, index) => {
            // LA PROPIEDAD "TOTAL" SIRVE PARA SABER CUAL ES LA GANANCIA TOTAL QUE APORTA CADA MATERIAL SEGUN PESO Y PRECIO
            materials[index].total = material.value * material.weight
        })
        // SE ORGANIZA EL ARRAY DEL QUE MAS VALOR APORTA HASTA EL QUE MENOS APORTA
        materials = materials.sort((a, b) => b.total - a.total)
        // SE RECORRE EL ARRAY VALIDANDO CADA POSICION EN ORDEN DESCENDENTE POR TOTAL
        materials.forEach((material) => {
            // SE VALIDA QUE EL PESO DEL MATERIAL ENTRA DENTRO DEL PESO TOTAL
            if(remainingWeight >= material.weight) {
                // EL PRODUCTO QUE ENTRA EN LA CARGA SE AGREGA A UN ARRAY DE OBJETOS DE MATERIALES
                const result: IMaterial = {} as IMaterial
                result.name = material.name
                result.total = material.total
                response.push(result)
                // SE DESCUENTA EL PESO DEL MATERIAL QUE ENTRO AL PESO TOTAL
                remainingWeight = remainingWeight - material.weight
                // SE SUMA LA CANTIDAD TOTAL DE LOS MATERIALES QUE ENTRAN EN LA RECOLECCION
                total = total + material.total
            }
        })
        // SE VALIDA SI NO HUBO NINGUN MATERIAL QUE ENTRO DENTRO DEL PESO LIMITE
        if(response.length == 0) return {message: 'NO HAY RUTA A TOMAR PARA ESTA SITUACION', status: 200}
        // SE DEVUELVE LA MEJOR OPCION A TOMAR
        return {message: {message: 'LA MEJOR DECISION A TOMAR', result: response, total}, status: 200}
    } catch (error) {
        return {message: 'ERROR AL PROCESAR LA INFORMACION', status: 400}
    }
}

// VALIDAR QUE EXISTAN LOS MATERIALES DEL LISTADO
export const validateMaterials = async (materials: IMaterial[]) => {
    try {
        const nonExistent: string[] = []
        // SE RECORRE EL ARRAY DE MATERIALES
        for (const material of materials) {
            // SE VALIDA UNO POR UNO A VER SI EXISTEN
            const validate = await Material.findOne({where: {name: material.name}})
            if(!validate) nonExistent.push(material.name)
        }
        // SI UNO O MAS MATERIALES NO EXISTEN SE REGRESA UN MENSAJE CON EL LISTADO DE MATERIALES INEXISTENTES
        if(nonExistent.length > 0) return {message: `LOS SIGUIENTES MATERIALES NO EXISTEN: ${JSON.stringify(nonExistent)}`, status: 200}
    } catch (error) {
        return {message: 'ERROR AL VALIDAR MATERIALES', status: 400}
    }
}