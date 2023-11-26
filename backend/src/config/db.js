require('dotenv').config(); 

const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('\x1b[34m%s\x1b[0m', 'Established connection to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});
