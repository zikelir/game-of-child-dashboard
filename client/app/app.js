angular.module('myApp', []);

myApp.controller('mainCtrl', function($scope) {
  $scope.myvar = 'Hello from HomeController';
});


/*app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/index.html',
    controller: 'mainCtrl'
  })
  $locationProvider.html5Mode(true);
}]); */
