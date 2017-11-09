const message = require('./message.model.js');

function getAllPosts(req, res) {
  message
    .find()
    .then(
      function success(posts) {
        res.json(posts);
      },
      function error () {
        res.sendStatus(400);
      }
    );
}

function createPost(req, res) {
  const post = req.body;
  console.log(post);
  message
    .create(post)
    .then(
      function success(postObj) {
        res.json(postObj);
      },
      function error () {
        res.sendStatus(400);
      }
    );
}

function getPostById(req, res) {
  const postId = req.params.id;
  message
    .findOne({_id: postId})
    .then(
      function success(post) {
        res.json(post);
      },
      function error() {
        res.sendStatus(400);
      }
    );
}

function updatePost(req, res) {
  const postId = req.params.id;
  const post = req.body;
  console.log('post', post);
  message
    .update({_id: postId}, {
      title: post.title,
      body: post.body
    })
    .then(
      function success(postObj) {
        res.json(postObj);
      },
      function err () {
        res.sendStatus(400);
      }
    );
}

function deletePost(req, res) {
  const postId = req.params.id;
  message
    .remove({_id: postId})
    .then(
      function success() {
        res.sendStatus(200);
      },
      function error() {
        res.sendStatus(400);
      }
    );
}

module.exports = {
  getAllPosts: getAllPosts,
  createPost: createPost,
  deletePost: deletePost,
  updatePost: updatePost,
  getPostById: getPostById
};
