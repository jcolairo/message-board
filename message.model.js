const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({

  title: {type: String, require: true},
  body: {type: String},
  reaction: {type: String},
  posted: {type: Date, default: Date.now}

});

const PostModel = mongoose.model('message', MessageSchema);

module.exports = PostModel;
