const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  card: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card'
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Collection', collectionSchema)
