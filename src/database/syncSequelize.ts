import sequelize from "./sequelize"

export const initialize = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
    } catch (error) {
        console.log(error, 'ERROR AL SINCRONIZAR LA BASE DE DATOS')
    }
}