const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);