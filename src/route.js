'use strict'

angular.
    module('general').
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'src/index.html',
        }).when('/homepage', {
            templateUrl: 'src/homePage/homepage.html',
        }).otherwise({
            redirectTo: '/'
        })
    }])


//   angular.module('general', ['restangular', 'ui.router'])
//   .config(function ($stateProvider, $urlRouterProvider) {

//     $stateProvider
//     .state('/', {
//       url: "/",
//       templateUrl: 'src/index.html',
//     })
//     .state('/homepage', {
//       url: "/homepage",
//       templateUrl: 'src/homepage.html',
//     })

//     $urlRouterProvider.otherwise('/');
//   });
