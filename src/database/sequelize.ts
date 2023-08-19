import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(
  process.env.DATABASE || 'postgres',
  process.env.USER || 'postgres',
  process.env.PASSWORD || 'admin',
  {
    dialect: 'postgres'
  }
);

export default sequelize
