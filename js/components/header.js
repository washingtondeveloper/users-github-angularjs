angular
    .module('app-users')
    .component('appHeader', {
        templateUrl: 'views/components/header.html',
        bindings: {
            title: '@',
            linkFirst: '@',
            linkSecond: '@'
        }
    })
