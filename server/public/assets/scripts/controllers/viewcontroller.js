myApp.controller('ViewController', ['$scope', 'HeroService', function($scope, HeroService){
    console.log('view works');

    HeroService.getHeroes();
    $scope.deleteHero = HeroService.deleteHero;

    $scope.heroArray = HeroService.heroObject;
    
}]);
