const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  profilePicture: String
});

module.exports = mongoose.model('Profile', profileSchema);