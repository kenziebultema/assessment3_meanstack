myApp.factory('HeroService', ['$http', function($http){
    var heroObject = {};

    var getHeroes = function(){
        $http.get('/hero').then(function(response){

            heroObject.response = response.data;
            console.log(heroObject);
        });
    };

    var postHeroes = function(hero){
        $http.post('/hero', hero).then(function(response){
            getHeroes();
        });
    };

    var deleteHero = function(data){
        $http.delete('/hero/' + data).then(function(response){
            console.log('deleted', response.data);
            getHeroes();
        });
    };

    return {
        getHeroes: getHeroes,
        postHeroes: postHeroes,
        deleteHero: deleteHero,
        heroObject: heroObject
    };
}]);
