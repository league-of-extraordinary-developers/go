defaultData =
  go: 1
  gridSize: 9
  positions: []

for x in [0..defaultData.gridSize]
  for y in [0..defaultData.gridSize]
    defaultData.positions[x] ||= []
    defaultData.positions[x][y] =
      owner: 0
      top: "#{parseInt((100/(defaultData.gridSize+2)) * x,10)}%"
      left: "#{parseInt((100/(defaultData.gridSize+2)) * y,10)}%"


goApp.controller "Board", ($scope) ->
  # Notice that chrome.storage.sync.get is asynchronous
  if chrome?.storage?
    chrome.storage.sync.get "go", (value) ->
      $scope.$apply -> $scope.load value

    $scope.save = ->
      chrome.storage.sync.set go: $scope.data

  # If there is saved data in storage, use it. Otherwise, bootstrap with sample todos
  $scope.load = (value) ->
    $scope.data = if value? then value.go else defaultData

  data = $scope.data ||= defaultData
  $scope.pieces = data.positions

  $scope.pos = (style) -> style
  $scope.className = (style) ->
    switch style.owner
      when 1 then "white"
      when -1 then "black"
      else ""

  $scope.setPiece = (row) ->
    if row.owner == 0
      row.owner = data.go
      data.go = -data.go

  $scope.rows = []
  $scope.columns = []

  for i in [0 .. data.gridSize+2]
    pc = parseInt((100/(data.gridSize+2)) * i,10)
    $scope.rows.push top: "#{pc}%"
    $scope.columns.push left: "#{pc}%"
