(function() {
    angular.module('myApp')
        .component('difficulty', {
            templateUrl: "app/graph-components/difficulty/difficulty.html",
            controller: "difficultyCtrl",
            service: 'difficultyService'
        })
})();