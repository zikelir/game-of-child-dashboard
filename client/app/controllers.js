(function() {
    var myApp = angular.module('myApp', []);
    myApp.controller('mainCtrl', function($scope) {

        $scope.sideMenuClass = "sideMenuHidden";
        $scope.changeSideMenuClass = function() {
            if ($scope.sideMenuClass === "sideMenuHidden") {
                $scope.sideMenuClass = "sideMenuShow";
            } else
                $scope.sideMenuClass = "sideMenuHidden";
        }

    });
})()