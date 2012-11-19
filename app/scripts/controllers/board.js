var defaultData, x, y, _base, _i, _j, _ref, _ref1;

defaultData = {
  go: 1,
  gridSize: 9,
  positions: []
};

for (x = _i = 0, _ref = defaultData.gridSize; 0 <= _ref ? _i <= _ref : _i >= _ref; x = 0 <= _ref ? ++_i : --_i) {
  for (y = _j = 0, _ref1 = defaultData.gridSize; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; y = 0 <= _ref1 ? ++_j : --_j) {
    (_base = defaultData.positions)[x] || (_base[x] = []);
    defaultData.positions[x][y] = {
      owner: 0,
      top: "" + (parseInt((100 / (defaultData.gridSize + 2)) * x, 10)) + "%",
      left: "" + (parseInt((100 / (defaultData.gridSize + 2)) * y, 10)) + "%"
    };
  }
}

goApp.controller("Board", function($scope) {
  var data, i, pc, _k, _ref2, _results;
  if ((typeof chrome !== "undefined" && chrome !== null ? chrome.storage : void 0) != null) {
    chrome.storage.sync.get("go", function(value) {
      return $scope.$apply(function() {
        return $scope.load(value);
      });
    });
    $scope.save = function() {
      return chrome.storage.sync.set({
        go: $scope.data
      });
    };
  }
  $scope.load = function(value) {
    return $scope.data = value != null ? value.go : defaultData;
  };
  data = $scope.data || ($scope.data = defaultData);
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
