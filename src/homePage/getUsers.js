'use strict'
angular.module('getUsers',[]).controller('Ctrl',['$http',function($http){
    $http.get('src/homePage/userData.json').then(function(response){
        this.users = response.data;
    })
}])
