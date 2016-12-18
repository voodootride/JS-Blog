/**
 * Created by Dante on 10.11.2016 г..
 */
const mongoose = require('mongoose')

module.exports = (config) => {
  mongoose.connect(config.connectionString)

  let database = mongoose.connection
  database.once('open', (error) => {
    if (error) {
      console.log(error)
      return
    }
    console.log('DB Opened on address: ' + config.connectionString)
  })

  require('./../models/Role').initialize()
  require('./../models/User').seedAdmin()
  require('./../models/Article')
  require('./../models/Category')
  require('./../models/Tag')
}