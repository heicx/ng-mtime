'use strict';

define(["app"], function(app) {
    app.factory("fetchMovieLists", ["$http", "$q", function($http, $q) {
    	var def = $q.defer();

        return {
        	fetch: function() {
        		$http.get("data/city.json").
	            success(function(data) {
	                def.resolve(data);
	            }).
	            error(function(data) {
	            	def.reject(data);
	            });

	            return def.promise;
        	}
        }
    }]).
    controller("listCtrl", ["$scope", "fetchMovieLists", function($scope, movieList) {
        $scope.title = "mtime";

        var promise = movieList.fetch();
        promise.then(function(cityData) {
        	
        }, function(FailReason) {
        });
    }]).
    directive("amFormSearch", function() {
        return {
            restrict: "A",
            link: function(scope, element, attrs, ctrl) {
                element.on("input", function(event) {
                    if (!$(this).val()) {
                    	scope.btnblue = "";
                    }else {
                    	scope.btnblue = "am-btn-primary";
                    }
                    scope.$apply();
                });
            }
        }
    });
});
