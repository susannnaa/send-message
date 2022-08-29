'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('setItem').component( 'login',{
  templateUrl: 'phone-list/phone-list.template.html',
  controller: ['$location', '$scope', function($scope){
      $scope.user = {
        email: '',
      };

      $scope.setItem = function(){
        localStorage.setItem('email', $scope.user.email);
        $scope.user.email = '';
        $location.url('#!/homepage');
      }
    }]})
  
  
    
