const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  creativity: {
    type: Number,
    default: 0
  },
  presentation: {
    type: Number,
    default: 0
  },
  innovation: {
    type: Number,
    default: 0
  },
  codeQuality: {
    type: Number,
    default: 0
  },
  idea: {
    type: Number,
    default: 0
  },
  locked: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Team', TeamSchema);
