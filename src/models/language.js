import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Language.hasMany(models.Sentence, { foreignKey: 'languageId' });
      Language.belongsTo(models.User, { foreignKey: 'userId', as: 'User' });
    }
  }
  Language.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Language',
      tableName: 'languages',
    }
  );
  return Language;
};
