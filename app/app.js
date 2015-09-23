define(["angularAMD", "angularRoute", "list"], function(angularAMD) {
	var app = angular.module("myApp", ["ngRoute", "myApp.list"]);
	app.config(function($routeProvider) {
		// list 为url跳转路径，通过list.js中的router捕获。
		$routeProvider.otherwise({redirectTo: '/list'});
	});
	return angularAMD.bootstrap(app);
});