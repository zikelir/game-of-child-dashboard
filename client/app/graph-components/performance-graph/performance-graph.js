(function() {
    angular.module('myApp')
        .component('performanceGraph', {
            templateUrl: "app/graph-components/performance-graph/performance-graph.html",
            controller: "PerformanceGraphCtrl",
            service: "PerformanceService"
        })
})();