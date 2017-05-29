(function() {

    /**
     * [PerformanceService description]
     * @name PerformanceService.service:PerformanceService
     * @ngdoc service
     */
    function PerformanceService($q, $http, $rootScope, $window) {
        var self = this;

        var api = 'http://test-deploy-flask.herokuapp.com/mocky/1';

        self.getPerformanceDone = function() {
            var deferred = $q.defer();

            $http.get(api).then(success, fail);

            function success(result) {
                console.log('success Performance done result.data: ' + JSON.stringify(result.data));
                deferred.resolve(result.data);
            }

            function fail(error) {
                console.error('Error loading Performance service: ' + error);
                deferred.reject(error.data);
            }

            return deferred.promise;
        };

        return self;
    }

    PerformanceService.$inject = ['$q', '$http', '$rootScope', '$window'];

    angular.module('myApp')
        .factory('PerformanceService', PerformanceService);
})();