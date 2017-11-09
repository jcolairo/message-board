function MessageController(MessageFactory, $state) {
  const controller = this;

  // Get All Posts
  controller.getAllPosts = function() {
    MessageFactory.getAllPosts().then(
      function success(success) {
        controller.posts = success.data;
      },
      function error (err) {
        console.warn(err);
      }
    );
  };

  // Create Post
  controller.createPost = function () {
    const post = controller.post;
    MessageFactory.createPost(post).then(
      function success() {
        $state.reload();
      },
      function error (err) {
        console.warn(err);
      }
    );
  };

  // Edit Post
  controller.editPost = function (postId) {
    MessageFactory.editPost(postId).then(
      function success(existingListing) {
        controller.post = existingListing.data;
      },
      function error (err) {
        console.warn(err);
      }
    );
  };

  // Update Post
  controller.updatePost = function() {
    const post = controller.post;
    MessageFactory.updatePost(post).then(
      function success() {
        $state.reload();
      },
      function error(err) {
        console.warn(err);
      }
    );
  };

  // Delete Post
  controller.deletePost = function (postId) {
    MessageFactory.deletePost(postId).then(
      function success() {
        $state.reload();
      },
      function error(err) {
        console.warn(err);
      }
    );
  };

  // reaction
  let like = 0;

  controller.addOne = function(postId) {
    if (postId === postId) {

      like =+ like + 1;
      document.cookie = 'like=' + like + '; expire=Sun 31st Dec 2017 23:00:00 GMT';

      const likedCookiesArray = document.cookie.split('=');
      const divData = document.getElementById('showCount');
      divData.innerHTML='Number of Likes: '+ likedCookiesArray[1];
    }
  };


  controller.likePost = function(postId) {
    like = like + 1;

    document.cookie = 'like=' + like + '; expire=Sun 31st Dec 2017 23:00:00 GMT';
    const likedCookiesArray = document.cookie.split('=');
    const divData = document.getElementById('showCount');

    MessageFactory.likePost(postId).then(
      function success() {
        divData.innerHTML='Number of Likes: '+ likedCookiesArray[1];
      },
      function error (err) {
        console.warn(err);
      }
    );
  };


  function init() {
    controller.getAllPosts();
  }
  init();

}

MessageController.$inject = ['MessageFactory', '$state'];

angular
  .module('MessageBoardApp')
  .controller('MessageController', MessageController);
