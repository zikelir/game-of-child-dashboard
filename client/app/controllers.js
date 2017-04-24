(function() {
    var myApp = angular.module('myApp', []);
    myApp.controller('mainCtrl', function($scope) {

        $scope.sideMenuClass = "sideMenuHidden";
        $scope.mainContainerExpanded = "mainContainerExpanded";
        $scope.changeSideMenuClass = function() {
            if ($scope.sideMenuClass === "sideMenuHidden" && $scope.mainContainerExpanded === "mainContainerExpanded") {
                $scope.sideMenuClass = "sideMenuShow";
                $scope.mainContainerExpanded = "mainContainerRetracted";
            } else {
                $scope.sideMenuClass = "sideMenuHidden";
                $scope.mainContainerExpanded = "mainContainerExpanded";
            }
        }
    });
})()