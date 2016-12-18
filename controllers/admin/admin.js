/**
 * Created by Dante on 17.11.2016 г..
 */
const userController = require('./user')
const categoryController = require('./category')

module.exports = {
  user: userController,
  category: categoryController
}