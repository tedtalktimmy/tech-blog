const { User } = require('../models')

const userData = [
  {
    username: 'yungmoney',
    password: 'nopricetags3'
  },
  {
    username: 'drizzy',
    password: 'sofargone'
  },
  {
    username: 'tyga',
    password: 'idkmypassword'
  },
  {
    username: 'birdman',
    password: 'ikissmyartists'
  },
  {
    username: 'treysongz',
    password: 'imissmegan'
  },
]



const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;