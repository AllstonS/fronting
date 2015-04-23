(function () {
  "use strict";
  angular.module('frontin', [
  'ngRoute',
  'ngAnimate',
  'uiGmapgoogle-maps',
  'admin',
  'login',
  'frontmain'
  ])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'fronting/views/splash.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/about', {
      templateUrl: 'fronting/views/about.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/splash', {
      templateUrl: 'fronting/views/splash.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/not-found', {
      templateUrl: 'fronting/views/404.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/favorites', {
      templateUrl: 'fronting/front/front.favorites.html',
      controller: 'FavoriteController as favorite'
    })
    .otherwise({
      redirectTo: '/not-found'
    })
  })
  .constant('_', _)


})();
