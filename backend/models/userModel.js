const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Please add a username']
  },
  password: {
    type: String,
    required: [true, 'Please add a password']
  },
  role: {
    type: String,
    default: 'Energy Analyst',
    required: [true, 'Please add a role']
  },
  active: {
    type: Boolean,
    default: true
  }
},{
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)