angular.module('myApp', ['ngResource', 'ngRoute']);

angular.module('myApp')

.config(function($routeProvider, $locatinProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', {
    templateUrl: '/partials/main', controller: 'mainCtrl'
  })
});

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.myVar = "Hello angular!!";
});
