'use strict';

angular.
  module('getUsers').
  component('homepage', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$scope', '$sce',
      function PhoneDetailController($http, $scope,$sce) {
        $scope.results = [];
        var self = this;
        $http.get('phone-detail/userData.json').then(function (response) {
          self.users = response.data;
        });
        $scope.element = '<send-message user="user"></send-message>';
        // $scope.renderHtml = function (htmlCode) {
        //   return $sce.trustAsHtml(htmlCode);
        // };

        $scope.sendMessage = function () {
          localStorage.setItem('message', $scope.message);
          $scope.message = '';
          $scope.results.push(localStorage.getItem('message'));
        }

        

        $scope.hide = 'true';

        $scope.send = function (user) {
          $scope.results = []; 
          $scope.hide ='';

          $scope.show = user.value;
          $scope.user = user;
          $scope.name = user.name;
          $scope.lastName = user.lastName;

          user.value = 'true';
        }

        $scope.remove = function () {
          $scope.hide = 'true';
        }
      }
    ]
  });


angular.module('getUsers').directive('sendMessage', [function () {
  return {
    restrict: 'C',
    scope: {
      user: '=',
    },
    templateUrl:'phone-detail/send-message.html',
  }
}]
);
