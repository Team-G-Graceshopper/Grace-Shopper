const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pets: {
    type: Sequelize.TEXT
  },
  accessories: {
    type: Sequelize.TEXT
  }
})

module.exports = Order
