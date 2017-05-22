angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainService, $stateParams){


    var packs = mainService.packageInfo
    var selectedCountry = []

    for (var i = 0; i < packs.length; i++) {
       for (var key in packs[i]) {
        if ($stateParams.country == packs[i][key]) {
            selectedCountry.push(packs[i])   
        }
       }
    }
    $scope.packages = selectedCountry;


})