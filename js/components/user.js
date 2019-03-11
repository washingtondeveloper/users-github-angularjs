angular
    .module('app-users')
    .component('appUser', {
        templateUrl: 'views/components/user.html',
        bindings: {
            image: '=',
            name: '=',
            altura: '@'
        }
    })
