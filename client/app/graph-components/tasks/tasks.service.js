(function() {

    /**
     * [TasksService description]
     * @name TasksService.service:TasksService
     * @ngdoc service
     */
    function TasksService($q, $http, $rootScope, $window) {
        var self = this;

        var api = 'http://test-deploy-flask.herokuapp.com/mocky/1';

        self.getTasksDone = function() {
            var deferred = $q.defer();

            $http.get(api).then(success, fail);

            function success(result) {
                console.log('success tasks done result.data: ' + JSON.stringify(result.data));
                deferred.resolve(result.data);
            }

            function fail(error) {
                console.error('Error loading tasks service: ' + error);
                deferred.reject(error.data);
            }

            return deferred.promise;
        };

        return self;
    }

    TasksService.$inject = ['$q', '$http', '$rootScope', '$window'];

    angular.module('myApp')
        .factory('TasksService', TasksService);
})();