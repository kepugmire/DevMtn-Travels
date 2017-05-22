angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainService, $stateParams){

// console.log($stateParams)
//     var packs = mainService.packageInfo
    $scope.packages = mainService.packageInfo

    //     var selectedCountry = []

    // for (var i = 0; i < packs.length; i++) {
    //    for (var key in packs[i]) {
    //     if ($stateParams.country == packs[i][key]) {
    //         console.log($stateParams.country)
    //         console.log(packs[i][key])
    //         selectedCountry.push(packs[i])   
            
    //     }
    //    }
    // }
    // $scope.packages = selectedCountry;
    // console.log($scope.packages)

})