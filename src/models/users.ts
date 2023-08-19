import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/sequelize'

class User extends Model {
  public id!: number;
  public user!: string;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'User'
  }
)

export default User;
