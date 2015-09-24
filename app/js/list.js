'use strict';

define(["app"], function(app) {
    app.factory("fetchMovieLists", ["$http", function(http) {
        // var fetch = function() {
        //     var res = null;

        //     http.get("data/city.json").
        //     success(function(data) {
        //         res = data;
        //     }).
        //     error(function(data) {

        //     });
        //     return res;
        // }

        return {
            fetch: function() {
                return http.get("data/city.json");
            }
        }
    }]).
    controller("listCtrl", ["$scope", "fetchMovieLists", function($scope, movieList) {
        $scope.title = "mtime";

        movieList.fetch().
        success(function(data) {
            console.log(data);
        }).
        error(function() {

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
