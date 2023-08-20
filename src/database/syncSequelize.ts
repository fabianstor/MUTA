import sequelize from "./sequelize"
import { alterTables } from "../helpers/sequelize"

export const initialize = async () => {
    try {
        process.env.TZ = 'UTC'
        await sequelize.authenticate()
        await sequelize.sync()
        await sequelize.query(alterTables)
    } catch (error) {
        console.log(error, 'ERROR AL SINCRONIZAR LA BASE DE DATOS')
    }
}