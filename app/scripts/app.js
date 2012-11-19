var goApp;

goApp = angular.module("goApp", ['controllers']).config([
  "$routeProvider", function($routeProvider) {
    return $routeProvider.when("/", {
      templateUrl: "views/board.html",
      controller: "Board"
    }).otherwise({
      redirectTo: "/"
    });
  }
]);
