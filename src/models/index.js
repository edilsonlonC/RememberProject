import Sequelize from 'sequelize';
import configFile from '../config/config.json';

/** Models * */
import User from './user';
import Sentence from './sentence';
import Language from './language';
import Session from './session'

const env = process.env.NODE_ENV || 'development';
const config = configFile[env];

export default function () {
  this.models = {
		Language,
		Sentence,
		Session,
		User,
  };
  this.db = {};
  this.sequelize = config.use_env_variable
    ? new Sequelize(process.env[config.use_env_variable], config)
    : new Sequelize(config.database, config.username, config.password, config);

  this.getModels = function () {
    Object.keys(this.models).forEach((modelName) => {
      const model = this.models[modelName](this.sequelize, Sequelize.DataTypes);
      this.db[model.name] = model;
    });
	};
	this.associate = function () {
		Object.keys(this.db).forEach(( modelName ) => {
			if (this.db[modelName].associate) this.db[modelName].associate(this.db)
		})
	}

  this.db.sequelize = this.sequelize;
  this.db.Sequelize = Sequelize;
	this.getModels();
	this.associate();
  return this.db;
}
