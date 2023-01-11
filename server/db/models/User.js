const Sequelize = require('sequelize');
const db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 5;

const User = db.define('user', {
	username: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
	},
});

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
	return bcrypt.compare(candidatePwd, this.password);
};
// 'User.prototype.correctPassword' - function that compares a given password with the password of the user instance / compare the plain version to an encrypted version of the password

User.prototype.generateToken = function () {
	return jwt.sign({ id: this.id }, process.env.JWT);
};
// 'User.prototype.generateToken' - function that generates a JWT token with the user's id

/**
 * classMethods
 */
User.authenticate = async function ({ username, password }) {
	const user = await this.findOne({ where: { username } });
	if (!user || !(await user.correctPassword(password))) {
		const error = Error('Incorrect username/password');
		error.status = 401;
		throw error;
	}
	return user.generateToken();
};
// 'User.authenticate' - class method that finds a user by username and compares the provided password with the stored password, if correct returns a token

User.findByToken = async function (token) {
	try {
		const { id } = await jwt.verify(token, process.env.JWT);
		const user = await User.findByPk(id);
		if (!user) {
			throw new Error('User not found');
		}
		return user;
	} catch (err) {
		return err;
	}
};
// 'User.findByToken' - class method that finds a user by the given token

/**
 * hooks
 */
const hashPassword = async (user) => {
	//in case the password has been changed, we want to encrypt it with bcrypt
	if (user.changed('password')) {
		user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
	}
};
// 'hashPassword' - hook function that encrypts the user's password using bcrypt before creating/updating user instances. This is added to the User model via 'User.beforeCreate', 'User.beforeUpdate', User.beforeBulkCreate'.
// Uses 'bcrypt' and 'jsonwebtoken' to hash and verify the token respectively

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));

module.exports = User;
