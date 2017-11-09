function MessageController(MessageFactory, $state) {
  const controller = this;

  controller.getAllPosts = function() {
    MessageFactory.getAllPosts().then(
      function success(success) {
        console.log('loaded all posts', success.data);
        controller.posts = success.data;
      },
      function error (err) {
        console.warn(err);
      }
    );
  };

  controller.createPost = function () {
    let post = controller.post;
    MessageFactory.createPost(post).then(
      function success() {
        console.log('created new post', post);
        $state.reload();
      },
      function error (err) {
        console.warn(err);
      }
    );
  };

  controller.editPost = function (postId) {
    MessageFactory.editPost(postId).then(
      function success(existingListing) {
        controller.post = existingListing.data;
        console.log('edited:', existingListing.data);
      },
      function error (err) {
        console.warn(err);
      }
    );
  };

  controller.updatePost = function() {
    let post = controller.post;
    MessageFactory.updatePost(post).then(
      function success() {
        console.log('successful update post', post);
        $state.reload();
      },
      function error(err) {
        console.warn(err);
      }
    );
  };

  controller.deletePost = function (postId) {
    MessageFactory.deletePost(postId).then(
      function success() {
        console.log('deleted post', postId);
        $state.reload();
      },
      function error(err) {
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
