import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Session.belongsTo(models.User, { foreignKey: 'useId' });
    }
  }
  Session.init(
    {
      token: DataTypes.STRING,
      ip: DataTypes.STRING,
      lastAction: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Session',
      tableName: 'sessions',
    }
  );
  return Session;
};
