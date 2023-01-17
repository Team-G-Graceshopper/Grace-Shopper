const Sequelize = require('sequelize');
const db = require('../db');

const Accessorie = db.define('accessorie', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

module.exports = Accessorie
