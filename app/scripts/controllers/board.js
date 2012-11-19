var data, x, y, _base, _i, _j, _ref, _ref1;

data = {
  go: 1,
  gridSize: 9,
  positions: []
};

for (x = _i = 0, _ref = data.gridSize; 0 <= _ref ? _i <= _ref : _i >= _ref; x = 0 <= _ref ? ++_i : --_i) {
  for (y = _j = 0, _ref1 = data.gridSize; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; y = 0 <= _ref1 ? ++_j : --_j) {
    (_base = data.positions)[x] || (_base[x] = []);
    data.positions[x][y] = {
      owner: 0,
      top: "" + (parseInt((100 / (data.gridSize + 2)) * x, 10)) + "%",
      left: "" + (parseInt((100 / (data.gridSize + 2)) * y, 10)) + "%"
    };
  }
}

goApp.controller("Board", function($scope) {
  var i, pc, _k, _ref2, _results;
  $scope.pieces = data.positions;
  $scope.pos = function(style) {
    return style;
  };
  $scope.className = function(style) {
    switch (style.owner) {
      case 1:
        return "white";
      case -1:
        return "black";
      default:
        return "";
    }
  };
  $scope.setPiece = function(row) {
    if (row.owner === 0) {
      row.owner = data.go;
      return data.go = -data.go;
    }
  };
  $scope.rows = [];
  $scope.columns = [];
  _results = [];
  for (i = _k = 0, _ref2 = data.gridSize + 2; 0 <= _ref2 ? _k <= _ref2 : _k >= _ref2; i = 0 <= _ref2 ? ++_k : --_k) {
    pc = parseInt((100 / (data.gridSize + 2)) * i, 10);
    $scope.rows.push({
      top: "" + pc + "%"
    });
    _results.push($scope.columns.push({
      left: "" + pc + "%"
    }));
  }
  return _results;
});
