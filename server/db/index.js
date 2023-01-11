//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Pet = require('./models/Pet');
const Cart = require('./models/Cart');

//associations could go here!
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.hasMany(Pet);
Pet.belongsTo(Cart);
<<<<<<< Updated upstream

User.hasOne(Cart);
Cart.belongsTo(User);
Cart.hasMany(Pet);
Pet.belongsTo(Cart);
=======
>>>>>>> Stashed changes

module.exports = {
	db,
	models: {
		User,
<<<<<<< Updated upstream
        Pet,
        Cart,
=======
		Pet,
		Cart,
>>>>>>> Stashed changes
	},
};
