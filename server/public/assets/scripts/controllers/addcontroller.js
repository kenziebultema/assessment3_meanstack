myApp.controller('AddController', ['$scope', 'HeroService', function($scope, HeroService){
    console.log('add works');
    // $scope.heroObject = {};

    $scope.submit = function(data){
        console.log(data);
        HeroService.postHeroes(data);
        HeroService.getHeroes(data);
    }
}]);
