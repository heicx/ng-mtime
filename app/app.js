define(["angularAMD", "angularRoute", "amui"], function(angularAMD) {
    var app = angular.module("myApp", ["ngRoute"]);
    app.config(function($routeProvider) {
        // list 为url跳转路径，通过list.js中的router捕获。
        $routeProvider.when("/home", angularAMD.route({
            templateUrl: 'views/list.html?v=21',
            controller: 'listCtrl'
        })).
        otherwise({
            redirectTo: "/home"
        });
    });
    return angularAMD.bootstrap(app);
});
