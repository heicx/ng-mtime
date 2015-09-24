'use strict';

define(["app"], function(app) {
    app.controller("listCtrl", ["$scope", function($scope) {
        $scope.title = "mtime";
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
