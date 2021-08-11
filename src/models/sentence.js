import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Sentence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sentence.belongsTo(models.User, { foreignKey: 'userId', as: 'User' });
      Sentence.belongsTo(models.Language, {
        foreignKey: 'languageId',
        as: 'Language',
      });
    }
  }
  Sentence.init(
    {
      name: DataTypes.STRING,
      sentence: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Sentence',
      tableName: 'sentences',
    }
  );
  return Sentence;
};
