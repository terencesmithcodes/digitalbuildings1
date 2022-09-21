const mongoose = require('mongoose')

const buildingSchema = mongoose.Schema({
  buildingId: {
    type: String,
    required : [true, 'Please add a building Id'],
    unique: true
  },
  buildingName: {
    type: String,
    required : [true, 'Please add a building name'],
    unique: true
  },
  address: {
    type: String,
    required : [true, 'Please add an address'],
    unique: true
  },
  city:{
    type: String,
    required : [true, 'Please add an address'],
  },
  state:{
    type: String,
    required : [true, 'Please add a state'],
  },
  zipcode: {
    type: String,
    required : [true, 'Please add a zipcode'],
  },
  phoneNumber: {
    type: String,
    required : [true, 'Please add a phone number'],
  },
  buildingType: {
    type: String,
    required : [true, 'Please add a building type'],
  },
  area:{
    type: String,
    required : [true, 'Please add a building area'],
  },
  floors:{
    type: String,
    required : [true, 'Please add the building floors'],
  },
  latitude:{
    type: String,
    required : [true, 'Please add building latitude'],
  },
  longitude:{
    type: String,
    required : [true, 'Please add building longitude'],
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('Building', buildingSchema)