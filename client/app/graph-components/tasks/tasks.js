(function() {
    angular.module('myApp')
        .component('tasks', {
            templateUrl: "app/graph-components/tasks/tasks.html",
            controller: "TasksCtrl",
            service: 'TasksService'
        })
})();