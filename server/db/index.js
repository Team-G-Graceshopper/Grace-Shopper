//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Pet = require('./models/Pet');
const Accessorie = require('./models/Accessorie')
const UserAcc = require('./models/UserAcc')

//associations could go here!
User.hasMany(Pet);
Pet.belongsTo(User);
User.belongsToMany(Accessorie, { through: "UserAccessories" })
Accessorie.belongsToMany(User, { through: "UserAccessories"})

module.exports = {
	db,
	models: {
		User,
		Pet,
		Accessorie
	},
};
