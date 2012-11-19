var BoardModel;

BoardModel = function($scope) {
  return {
    display: "block",
    getCombined: function() {
      return parseInt(this.width, 10) + parseInt(this.height, 10);
    }
  };
};

goApp.controller("Board", function($scope) {
  var i, max, pc, _i, _results;
  $scope.master = BoardModel;
  console.log($scope);
  $scope.pos = function(style) {
    return style;
  };
  $scope.rows = [];
  $scope.columns = [];
  max = 11;
  _results = [];
  for (i = _i = 0; 0 <= max ? _i <= max : _i >= max; i = 0 <= max ? ++_i : --_i) {
    pc = parseInt((100 / max) * i, 10);
    $scope.rows.push({
      top: "" + pc + "%"
    });
    _results.push($scope.columns.push({
      left: "" + pc + "%"
    }));
  }
  return _results;
});
