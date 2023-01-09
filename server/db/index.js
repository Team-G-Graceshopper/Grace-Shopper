//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Dog = require('./models/Dog')
const Cat = require('./models/Cat')

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Dog,
    Cat
  },
}
