import sequelize from "./sequelize"
import { alterTables } from "../helpers/sequelize"

// INICIALIZAR SINCRONIZACION DE BASE DE DATOS
export const initialize = async () => {
    try {
        // CONFIGURAR ZONA HORARIA
        process.env.TZ = 'UTC'
        await sequelize.authenticate()
        await sequelize.sync()
        // ACTUALIZAR TABLAS PARA COLUMNAS DE FECHAS (TIMESTAMP)
        await sequelize.query(alterTables)
    } catch (error) {
        console.log(error, 'ERROR AL SINCRONIZAR LA BASE DE DATOS')
    }
}