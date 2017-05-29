(function() {

    /**
     * [HeaderService description]
     * @name HeaderService.service:HeaderService
     * @ngdoc service
     */
    function HeaderService($q, $http, $rootScope, $window) {
        var self = this;

        var api = 'https://httpbin.org/get';

        self.getHeaderDone = function() {
            var deferred = $q.defer();

            $http.get(api).then(success, fail);

            function success(result) {
                console.log('success Header done result.data: ' + JSON.stringify(result.data));
                deferred.resolve(result.data);
            }

            function fail(error) {
                console.error('Error loading Header service: ' + error);
                deferred.reject(error.data);
            }

            return deferred.promise;
        };

        return self;
    }

    HeaderService.$inject = ['$q', '$http', '$rootScope', '$window'];

    angular.module('myApp')
        .factory('HeaderService', HeaderService);
})();