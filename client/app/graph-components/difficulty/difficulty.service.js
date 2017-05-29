(function() {

    /**
     * [difficultyService description]
     * @name difficultyService.service:difficultyService
     * @ngdoc service
     */
    function difficultyService($q, $http, $rootScope, $window) {
        var self = this;

        var api = 'http://test-deploy-flask.herokuapp.com/mocky/1';

        self.getdifficultyDone = function() {
            var deferred = $q.defer();

            $http.get(api).then(success, fail);

            function success(result) {
                console.log('success difficulty done result.data: ' + JSON.stringify(result.data));
                deferred.resolve(result.data);
            }

            function fail(error) {
                console.error('Error loading difficulty service: ' + error);
                deferred.reject(error.data);
            }

            return deferred.promise;
        };

        return self;
    }

    difficultyService.$inject = ['$q', '$http', '$rootScope', '$window'];

    angular.module('myApp')
        .factory('difficultyService', difficultyService);
})();