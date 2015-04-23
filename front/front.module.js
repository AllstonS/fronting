(function () {
  "use strict";

  angular.module('frontmain', [
    'ngRoute',
    'ngAnimate'
  ])
  .config(function($routeProvider){
    $routeProvider
    .when('/list', {
      templateUrl: 'fronting/front.companies.html',
      controller: 'CompanyController as compCtrl'
    })
    .when('/map', {
      templateUrl: 'frontingfront/front.map.html',
      controller: 'CompanyController as compCtrl'
    })
    .when('/favorites', {
      templateUrl: 'fronting/front.favorites.html',
      controller: 'CompanyController as compCtrl'
    })
    .when('/details/:companyId', {
      templateUrl: 'fronting/front.companydetail.html',
      controller: 'CompanyController as compCtrl'
    })
  });

})();
