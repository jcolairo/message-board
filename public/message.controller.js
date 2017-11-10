function MessageController(MessageFactory, $state) {
  const controller = this;

  // Get All Posts
  controller.getAllPosts = () => {
    MessageFactory.getAllPosts().then(
      (success) => {
        controller.posts = success.data;
      },
      (err) => {
        console.warn(err);
      }
    );
  };

  // Create Post
  controller.createPost = () => {
    const post = controller.post;
    MessageFactory.createPost(post).then(
      () => {
        $state.reload();
      },
      (err) => {
        console.warn(err);
      }
    );
  };

  // Edit Post
  controller.editPost = (postId) => {
    MessageFactory.editPost(postId).then(
      (existingListing) => {
        controller.post = existingListing.data;
      },
      (err) => {
        console.warn(err);
      }
    );
  };

  // Update Post
  controller.updatePost = () => {
    const post = controller.post;
    MessageFactory.updatePost(post).then(
      () => {
        $state.reload();
      },
      (err) => {
        console.warn(err);
      }
    );
  };

  // Delete Post
  controller.deletePost = (postId) => {
    MessageFactory.deletePost(postId).then(
      () => {
        $state.reload();
      },
      (err) => {
        console.warn(err);
      }
    );
  };

  // reaction
  // Repeat for other reactions
  let like = 0;
  controller.addOne = (postId) => {
    // If postId matches existing postId then addOne
    if (postId === postId) {

      like =+ like + 1;

      document.cookie = 'like=' + like + '; expire=Sun 31st Dec 2017 23:00:00 GMT';

      const likedCookiesArray = document.cookie.split('=');
      const divData = document.getElementById('showCount');
      divData.innerHTML='Number of Likes: '+ likedCookiesArray[1];
    }
    // Else
    // Get new postId and start counting
    // Display new number
  };

  // Repeat for other reactions
  controller.likePost = (postId) => {
    like = like + 1;

    document.cookie = 'like=' + like + '; expire=Sun 31st Dec 2017 23:00:00 GMT';

    const likedCookiesArray = document.cookie.split('=');
    const divData = document.getElementById('showCount');

    MessageFactory.likePost(postId).then(
      () => {
        divData.innerHTML='Number of Likes: '+ likedCookiesArray[1];
      },
      (err) => {
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
