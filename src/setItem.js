'use strict'

    angular.module('setItem',[]).controller('myCtrl', function($scope){
      $scope.user = {
        email: '',
      };
  
      $scope.setItem = function(){
        localStorage.setItem('email', $scope.user.email);
      }
    })
  
  
  
  
 
