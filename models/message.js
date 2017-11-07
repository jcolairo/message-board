const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  body: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('Message', messageSchema);
