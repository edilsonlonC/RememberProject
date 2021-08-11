'use strict';

import Sequelize  from 'sequelize';
const env = process.env.NODE_ENV || 'development';
import configFile from '../config/config.json'
const config = configFile[env];

/** Models **/
import User from './user'

export default function (){
	this.db = {}
	this.sequelize = config.use_env_variable ? new Sequelize(process.env[config.use_env_variable], config)
		: new Sequelize(config.database, config.username, config.password, config)
	this.models = {
		User
	}
	this.associate = function () {
		Object.keys(this.models).forEach( modelName => {
			const model = this.models[modelName](this.sequelize, Sequelize.DataTypes);
			this.db[model.name] = model;
			if (this.db[model.name].associate) this.db[modelName].associate(this.db)
			
		} )
	}

	this.db.sequelize = this.sequelize;
	this.db.Sequelize = Sequelize;
	this.associate()
	return this.db


}


