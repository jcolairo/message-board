function MainRouter($stateProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        '': {templateUrl: './template.html'},
        'main@home': {templateUrl: './home.html'}
      }
    });
}

MainRouter.$inject = ['$stateProvider'];

angular
  .module('MessageBoardApp', ['ui.router'])
  .config(MainRouter);
