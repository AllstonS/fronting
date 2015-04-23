(function () {
  "use strict";

  angular.module('frontmain', [
    'ngRoute',
    'ngAnimate'
  ])
  .config(function($routeProvider){
    $routeProvider
    .when('/list', {
      templateUrl: 'fronting/front/front.companies.html',
      controller: 'CompanyController as compCtrl'
    })
    .when('/map', {
      templateUrl: 'fronting/front/front.map.html',
      controller: 'CompanyController as compCtrl'
    })
    .when('/favorites', {
      templateUrl: 'fronting/front/front.favorites.html',
      controller: 'CompanyController as compCtrl'
    })
    .when('/details/:companyId', {
      templateUrl: 'fronting/front/front.companydetail.html',
      controller: 'CompanyController as compCtrl'
    })
  });

})();
