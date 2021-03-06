const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  term: {
    type: String,
    required: true
  },
  definition: {
    type: String,
    required: true
  },
  collectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collection'
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Card', cardSchema)
