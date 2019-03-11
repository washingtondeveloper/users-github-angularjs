angular
    .module('app-users')
    .config(route)

function route ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController',
            controllerAs: 'home',
            activetab: 'home'
        })
        .when('/search', {
            templateUrl: 'views/search.html',
            controller: 'searchController',
            controllerAs: 'search',
            activetab: 'search'
        })
}
