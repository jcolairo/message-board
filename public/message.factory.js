function MessageFactory ($http) {

  return {
    getAllPosts: function(posts) {
      return $http({
        method: 'GET',
        url: '/api/blogpost',
        data: posts
      });
    },
    createPost: function(post) {
      return $http({
        method: 'POST',
        url: '/api/blogpost',
        data: post
      });
    },
    editPost: function(postId) {
      return $http({
        method: 'GET',
        url: `api/blogpost/${postId}`,
        data: postId
      });
    },
    updatePost: function(post) {
      return $http({
        method: 'PUT',
        url: `/api/blogpost/${post._id}`,
        data: post
      });
    },
    deletePost: function(postId) {
      return $http({
        method: 'POST',
        url: `/api/blogpost/${postId}`
      });
    }
  };
}

MessageFactory.$inject = ['$http'];

angular
  .module('MessageBoardApp')
  .factory('MessageFactory', MessageFactory);
