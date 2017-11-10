function MessageFactory ($http) {

  return {
    getAllPosts: (posts) => {
      return $http({
        method: 'GET',
        url: '/api/blogpost',
        data: posts
      });
    },
    createPost: (post) => {
      return $http({
        method: 'POST',
        url: '/api/blogpost',
        data: post
      });
    },
    editPost: (postId) => {
      return $http({
        method: 'GET',
        url: `api/blogpost/${postId}`,
        data: postId
      });
    },
    updatePost: (post) => {
      return $http({
        method: 'PUT',
        url: `/api/blogpost/${post._id}`,
        data: post
      });
    },
    deletePost: (postId) => {
      return $http({
        method: 'POST',
        url: `/api/blogpost/${postId}`
      });
    },
    likePost: (post) => {
      return $http({
        method: 'PUT',
        url: `/api/blogpost/like/${post}`,
        data: post
      });
    }
  };
}

MessageFactory.$inject = ['$http'];

angular
  .module('MessageBoardApp')
  .factory('MessageFactory', MessageFactory);
