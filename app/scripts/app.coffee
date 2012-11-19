goApp = angular.module("goApp", []).config(["$routeProvider", ($routeProvider) ->
  $routeProvider.when("/",
    templateUrl: "views/main.html"
    controller: "MainCtrl"
  ).otherwise redirectTo: "/"
])
