(function() {
    angular.module('myApp')
        .component('header', {
            // Inline template which is binded to message variable
            // in the component controller
            templateUrl: "app/header-bar/header-bar.html",
            // The controller that handles our component logic
            controller: "HeaderBarCtrl",
            service: "HeaderService",
            // isolated scope binding
            bindings: {
                update: "="
            }
        });
})();