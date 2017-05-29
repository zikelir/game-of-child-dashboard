(function() {
    /**
     * [TasksCtrl description]
     * @name TasksCtrl:TasksCtrl
     * @ngdoc controller
     */
    function TasksCtrl($scope, TasksService) {
        var ctrl = this;
        var tasks = [];

        function getTasksDone() {
            console.log(tasks, " heuheueh");
            TasksService.getTasksDone().then(success, fail);

            function success(data) {
                console.log(data.category_quantity, " data quantity");
                var cat = data.category_quantity;
                google.charts.load('current', { 'packages': ['corechart'] });
                google.charts.setOnLoadCallback(drawChart(cat));
                // console.log($scope.tasks.category_quantity, ' taskei');
            }

            function fail(error) {


                console.log("Error occured!", JSON.stringify(error));
            }
            console.log(tasks, "tasks inside success");
        }



        function drawChart(data) {
            catTreated = [];
            catTreated.push(['Task', 'Percentage'].toString());
            console.log(catTreated, "cattt");
            for (var i in data) {
                catTreated.push([i, data[i].toString()]);
                tasks.push(catTreated);
                console.log(tasks, "pushadooo");
            }


            console.log(JSON.stringify(catTreated), " TRATEI KRL");



            // aux = JSON.stringify(data);
            // tasks.push()
            // console.log(JSON.stringify(data), " pushed");

            // Object.keys(data).map(function(key) {
            //     console.log(key, " object");
            // });

            // for (var property in data) {
            //     catTreated.push(property);
            //     console.log(property, " property");
            //     console.log(property[], " caaaat");
            // }

            // var data = google.visualization.arrayToDataTable([
            // ['Task', 'Percentage'],
            // ['Health', 11],
            // ['Education', 2],
            // ['Alimentation', 2]
            // ]);
            // console.log(tasks, 'objeto?');
            var data = google.visualization.arrayToDataTable(tasks);

            var options = {
                title: 'Tasks done by type'
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options);
        }

        getTasksDone();

    }

    TasksCtrl.$inject = ['$scope', 'TasksService'];

    angular.module('myApp')
        .controller('TasksCtrl', TasksCtrl);
})();