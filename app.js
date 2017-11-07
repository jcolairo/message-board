const express = require('express');
const publicDest = `${__dirname}/public`;
const app = express();
const mongoose = require('mongoose');
const Message = require('./models/message');


// Connection for DB
mongoose.connect('mongodb://localhost/message-board');
const db = mongoose.connection;

// Check connection
db.once('open', () => {
  console.log('Connected to mongodb');
});

// Check for db errors
db.on('error', (err) => {
  console.log(err);
});



// Loading files
app.use(express.static(publicDest));

app.get('/', (req, res) => {
  Message.find({}, (err, messages) => {
    if(err) {
      console.log(err);
    } else {
      res.render(`${publicDest}/index.html`, {
        title: 'Messages',
        messages: messages
      });
    }
  });
});

// Add route
app.get('/message/add', (req, res) => {
  res.sendFile(`${publicDest}/add-message.html`);
});

// Start Server
app.listen(8080, () => {
  console.log('Server started on port 8080');
});
