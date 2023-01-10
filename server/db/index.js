//this is the access point for all things database related!

const db = require('./db');

<<<<<<< Updated upstream
const User = require('./models/User')
=======
const User = require('./models/User');
const Dog = require('./models/Dog');
const Cat = require('./models/Cat');
>>>>>>> Stashed changes

//associations could go here!

module.exports = {
<<<<<<< Updated upstream
  db,
  models: {
    User,
  },
}
=======
	db,
	models: {
		User,
        Dog,
        Cat,
	},
};
>>>>>>> Stashed changes
