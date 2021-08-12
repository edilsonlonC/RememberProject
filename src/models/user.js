import { Model } from 'sequelize';
import bcrypt from 'bcrypt';
import { config } from '../config/config'
export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Language, { foreignKey: 'userId' });
      User.hasMany(models.Sentence, { foreignKey: 'userId' });
      User.hasMany(models.Session, { foreignKey: 'usrId' });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      userName: DataTypes.STRING,
      blocked: DataTypes.BOOLEAN,
			password: {
				type: DataTypes.STRING(512),
				set(value) {
					this.setDataValue(
						'password',
						bcrypt.hashSync(value,config.saltRound)
					)

				}
			},
      resetTokenPassword: DataTypes.STRING(512),
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User',
    }
	);

	User.prototype.comparePassword = function (password){
		return bcrypt.compareSync(password, this.password)
	}
  return User;
};
