app.controller('legislatorsctrl', function($scope, $http) {
    url: "http://openstates.org/api/v1/metadata/?apikey=d76ffc8279fc4bc291273bfe9c794064",
    method: "GET"
}).success(function(data, status, headers, config) {
    console.log(data);
    $scope.data = data;
}).error(function(data, status, headers, config) {
    $scope.status = status;
});