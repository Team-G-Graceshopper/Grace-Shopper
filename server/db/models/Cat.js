const Sequelize = require('sequelize')
const db = require('../db')

const Cat = db.define('cat', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  breed: {
    type: Sequelize.STRING,
    allowNull: false
  },
  weight: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Cat
