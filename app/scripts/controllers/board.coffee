BoardModel = ($scope) ->
  #width: 200
  #height: 100
  display: "block"
  getCombined: ->
    parseInt(@width, 10) + parseInt(@height, 10)

goApp.controller "Board", ($scope) ->
  $scope.master = BoardModel
  console.log $scope
  $scope.pos = (style) -> style

  $scope.rows = []
  $scope.columns = []
  max = 11
  for i in [0 .. max]
    pc = parseInt((100/max) * i,10)
    $scope.rows.push top: "#{pc}%"
    $scope.columns.push left: "#{pc}%"
