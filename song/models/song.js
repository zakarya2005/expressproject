const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  artist: {
    type: String,
    required: true
  },
  genre: {
    type: String
  },
  duration: {
    type: Number, // durée en secondes
    required: true
  },
  releaseDate: {
    type: Date
  }
}, { timestamps: true });

module.exports = mongoose.model('Song', songSchema);
