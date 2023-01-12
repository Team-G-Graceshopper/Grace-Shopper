//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Pet = require('./models/Pet');

//associations could go here!
User.hasMany(Pet);
Pet.belongsTo(User);

module.exports = {
	db,
	models: {
		User,
		Pet,
	},
};