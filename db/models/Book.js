const mongoose = require('mongoose');

const Book = mongoose.model('Book', {
  name : {
    type: String,
    required: true,
    trim: true
  },
  author : {
    type: String,
    required: false,
    trim: true
  },
  edition : {
    type: String,
    required: false,
    trim: true
  },
  NumberofBooks : {
    type: Number,
    default: true,
  },
});

module.exports = {Book};
