const Sequelize = require('sequelize');
<<<<<<< Updated upstream
const db = require('../db');
=======
const db = require('..');
>>>>>>> Stashed changes

const Cart = db.define('cart', {
	quantity: {
		type: Sequelize.FLOAT,
	},
});

module.exports = Cart;