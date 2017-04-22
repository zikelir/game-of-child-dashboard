(function() {
    angular.module('myApp')
        .component('sideMenu', {
            // Inline template which is binded to message variable
            // in the component controller
            templateUrl: "app/side-menu/side-menu.html",
            // The controller that handles our component logic
            controller: "SideMenuCtrl",
            // isolated scope binding
            bindings: {
                update: "="
            }
        });
})();