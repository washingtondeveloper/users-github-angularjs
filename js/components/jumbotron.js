angular
    .module('app-users')
    .component('appJumbotron', {
        templateUrl: 'views/components/jumbotron.html',
        bindings: {
            title: '@',
            subTitle: '@'
        }
    })
