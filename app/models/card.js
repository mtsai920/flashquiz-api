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
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collection',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Card', cardSchema)
