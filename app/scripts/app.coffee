goApp = angular.module("goApp", ['controllers']).config(["$routeProvider", ($routeProvider) ->
  $routeProvider.when("/",
    templateUrl: "views/board.html"
    controller: "Board"
  ).otherwise redirectTo: "/"
])
