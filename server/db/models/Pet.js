const Sequelize = require('sequelize');
const db = require('../db');

const Pet = db.define('pet', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	breed: {
		type: Sequelize.STRING,
        allowNull: false,
	},
    type: {
		type: Sequelize.STRING,
        allowNull: false,
	},
    description: {
        type: Sequelize.TEXT,
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

module.exports = Pet;
