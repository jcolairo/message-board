const message = require('./message.model.js');

function getAllPosts(req, res) {
  message
    .find()
    .then(
      (posts) => {
        res.json(posts);
      },
      () => {
        res.sendStatus(400);
      }
    );
}

function createPost(req, res) {
  const post = req.body;
  message
    .create(post)
    .then(
      (postObj) => {
        res.json(postObj);
      },
      () => {
        res.sendStatus(400);
      }
    );
}

function getPostById(req, res) {
  const postId = req.params.id;
  message
    .findOne({_id: postId})
    .then(
      (post) => {
        res.json(post);
      },
      () => {
        res.sendStatus(400);
      }
    );
}

function updatePost(req, res) {
  const postId = req.params.id;
  const post = req.body;
  message
    .update({_id: postId}, {
      title: post.title,
      body: post.body
    })
    .then(
      (postObj) => {
        res.json(postObj);
      },
      () => {
        res.sendStatus(400);
      }
    );
}

function deletePost(req, res) {
  const postId = req.params.id;
  message
    .remove({_id: postId})
    .then(
      () => {
        res.sendStatus(200);
      },
      () => {
        res.sendStatus(400);
      }
    );
}

function likePost(req, res) {
  const postId = req.params.id;
  const post = req.body;
  const reaction = req.body.reaction;
  console.log('*************************');
  console.log('postId', postId);
  console.log('post', post);
  console.log('here');
  console.log('reaction', reaction);
}

module.exports = {
  getAllPosts: getAllPosts,
  createPost: createPost,
  deletePost: deletePost,
  updatePost: updatePost,
  getPostById: getPostById,
  likePost: likePost
};
