const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kano3630:Liablanche07@chatapp.nivvobi.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Failed to connect to MongoDB:', err);
});

module.exports = mongoose;