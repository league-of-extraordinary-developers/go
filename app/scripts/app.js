(function() {
  var goApp;

  goApp = angular.module("goApp", []).config([
    "$routeProvider", function($routeProvider) {
      return $routeProvider.when("/", {
        templateUrl: "views/main.html",
        controller: "MainCtrl"
      }).otherwise({
        redirectTo: "/"
      });
    }
  ]);

}).call(this);
