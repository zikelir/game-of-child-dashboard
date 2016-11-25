var app = angular.module('myApp', ['ngRoute']);
/**
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', {
    templateUrl: 'index.html',
    controller: 'mainCtrl'
  })
});


app.controller('mainCtrl', function($scope) {
  $scope.myVar = "Hello angular!!";
}); **/

function mainCtrl($scope, $http) {
    $scope.myVar = "Hello angular!!";
}
