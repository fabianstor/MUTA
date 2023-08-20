import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/sequelize'

class Material extends Model {
    public id!: number;
    public name!: string;
    public weight!: number;
    public value!: number;
}

Material.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      weight: {
          type: DataTypes.FLOAT,
          allowNull: false
      },
      value: {
          type: DataTypes.FLOAT,
          allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Material'
    }
  )
export default Material