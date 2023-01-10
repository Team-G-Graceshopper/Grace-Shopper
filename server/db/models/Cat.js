const Sequelize = require('sequelize');
const db = require('../db');

const Cat = db.define('cat', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	breed: {
		type: Sequelize.STRING,
        allowNull: false,
	},
    imageUrl: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
	price: {
		type: Sequelize.FLOAT,
        allowNull: false,
	},
	weight: {
		type: Sequelize.FLOAT,
        allowNull: false,
	},
});

module.exports = Cat;