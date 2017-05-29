(function() {
    /**
     * [difficultyCtrl description]
     * @name difficultyCtrl:difficultyCtrl
     * @ngdoc controller
     */
    function difficultyCtrl($scope, difficultyService) {
        var ctrl = this;

        function getdifficultyDone() {

            difficultyService.getdifficultyDone().then(success, fail);

            function success(data) {

                console.log(data);
                $scope.difficulty = data;

            }

            function fail(error) {


                console.log("Error occured!", JSON.stringify(error));
            }
        }

        google.charts.load("current", { packages: ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ["Difficulty", "Quantity", { role: "style" }],
                ["Easy", 8.94, "146eb4"],
                ["Medium", 10.49, "f0e000"],
                ["Hard", 19.30, "f00000"]
            ]);

            var view = new google.visualization.DataView(data);
            view.setColumns([0, 1,
                {
                    calc: "stringify",
                    sourceColumn: 1,
                    type: "string",
                    role: "annotation"
                },
                2
            ]);

            var options = {
                title: "Tasks done by difficulty",
                bar: { groupWidth: "95%" },
                legend: { position: "none" },
            };
            var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
            chart.draw(view, options);
        }


        getdifficultyDone();

    }

    difficultyCtrl.$inject = ['$scope', 'difficultyService'];

    angular.module('myApp')
        .controller('difficultyCtrl', difficultyCtrl);
})();