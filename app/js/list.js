'use strict';

define(["app"], function(app) {
	console.log(app);
	angular.module('myApp.list', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/list', {
			templateUrl: 'views/list.html',
			controller: 'listCtrl'
		});
	}])
	.controller('listCtrl', [function() {
		
	}]);
});

