const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
	quantity: {
		type: Sequelize.FLOAT,
	},
});

module.exports = Cart;