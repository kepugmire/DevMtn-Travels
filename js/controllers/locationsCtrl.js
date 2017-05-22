angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainService){


    $scope.packages=mainService.travelInfo

})