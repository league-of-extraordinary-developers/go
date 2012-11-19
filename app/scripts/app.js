var goApp;

goApp = angular.module("goApp", []).config([
  "$routeProvider", function($routeProvider) {
    return $routeProvider.when("/", {
      templateUrl: "views/board.html",
      controller: "Board"
    }).otherwise({
      redirectTo: "/"
    });
  }
]);
