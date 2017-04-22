(function() {
    /**
     * [SideMenuCtrl description]
     * @name SideMenuCtrl:SideMenuCtrl
     * @ngdoc controller
     */
    function SideMenuCtrl($scope) {
        var ctrl = this;

        $scope.sideMenuItems = [{
            "id": "1",
            "name": "side menu item 1",
            "model": "active"
        }, {
            "id": "2",
            "name": "side menu item 2",
            "model": "inactive"
        }, {
            "id": "3",
            "name": "side menu item 3",
            "model": "inactive"
        }];

        // sideMenuItems.forEach(function(item) {
        //     console.log(item); //window
        // });

        // $scope.element = createListOfSideMenuItems();

    }

    SideMenuCtrl.$inject = ['$scope'];

    angular.module('myApp')
        .controller('SideMenuCtrl', SideMenuCtrl);
})();