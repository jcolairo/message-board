const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const messageCTRL = require('./message.controller.js');

mongoose.connect('mongodb://localhost/message');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/blogpost', messageCTRL.getAllPosts);

app.post('/api/blogpost', messageCTRL.createPost);

app.get('/api/blogpost/:id', messageCTRL.getPostById);

app.post('/api/blogpost/:id', messageCTRL.deletePost);

app.put('/api/blogpost/:id', messageCTRL.updatePost);


app.put('/api/blogpost/like/:id', messageCTRL.likePost);


app.listen(8080);
