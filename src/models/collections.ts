import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/sequelize'
import Material from './materials';

class Collection extends Model {
    public id!: number;
    public materialId!: string;
    public amount!: number;
    public date!: string;
}

Collection.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      amount: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      date: {
          type: DataTypes.DATE,
          allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Collection'
    }
  )
Collection.belongsTo(Material, {foreignKey: 'materialId'})
export default Collection