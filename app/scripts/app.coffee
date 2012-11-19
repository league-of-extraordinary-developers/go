goApp = angular.module("goApp", []).config(["$routeProvider", ($routeProvider) ->
  $routeProvider.when("/",
    templateUrl: "views/board.html"
    controller: "Board"
  ).otherwise redirectTo: "/"
])
