const Sequelize = require('sequelize');
const db = require('../db');

const UserAcc = db.define('UserAccessories', {
	  quantity: {
		type: Sequelize.INTEGER,
		defaultValue: 1
	}
});

module.exports = UserAcc
