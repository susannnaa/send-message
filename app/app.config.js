'use strict';

angular.
  module('general').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<login></login>'
        }).
        when('/homepage', {
          template: '<homepage></homepage>'
        }).
        otherwise('/');
    }
  ]);
