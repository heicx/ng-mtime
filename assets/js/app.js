"use strict";

define(["angularAMD", "angularRoute", "../../app/js/list"], function(angular, angularRoute, list) {
	return angular.module('myApp', ['ngRoute', "myApp.list"]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/list'});
	}]);
});