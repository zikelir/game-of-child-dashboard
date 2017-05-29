(function() {
    /**
     * [HeaderBarCtrl description]
     * @name HeaderBarCtrl:HeaderBarCtrl
     * @ngdoc controller
     */
    function HeaderBarCtrl($scope, HeaderService) {
        var ctrl = this;

        $scope.user = {
            "name": "brito lindo"
        }

    }

    HeaderBarCtrl.$inject = ['$scope', 'HeaderService'];

    angular.module('myApp')
        .controller('HeaderBarCtrl', HeaderBarCtrl);
})();