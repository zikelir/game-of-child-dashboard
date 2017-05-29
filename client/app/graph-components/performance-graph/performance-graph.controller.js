(function() {
    /**
     * [PerformanceGraphCtrl description]
     * @name PerformanceGraphCtrl:PerformanceGraphCtrl
     * @ngdoc controller
     */
    function PerformanceGraphCtrl($scope, PerformanceService) {
        var ctrl = this;

        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);

        //curve chart
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Month', 'Done', 'Undone'],
                ['Jan', 10, 40],
                ['Fev', 10, 40],
                ['Mar', 66, 11],
                ['Apr', 130, 5],
                ['Jun', 6, 11],
                ['Jul', 66, 12],
                ['Aug', 60, 10],
                ['Sept', 6, 20],
                ['Oct', 60, 10],
                ['Nov', 60, 10],
                ['Dec', 66, 10]
            ]);

            var options = {
                title: 'Children Performance',
                curveType: 'function',
                legend: { position: 'bottom' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('chart_curve'));

            chart.draw(data, options);
        }

    }

    PerformanceGraphCtrl.$inject = ['$scope', 'PerformanceService'];

    angular.module('myApp')
        .controller('PerformanceGraphCtrl', PerformanceGraphCtrl);
})();