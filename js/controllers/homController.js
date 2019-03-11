angular
    .module('app-users')
    .controller('homeController', homeController)

function homeController ($http, $route) {
    const vm = this
    vm.$route = $route
    const url = 'https://api.github.com/users';
    vm.users = []
    vm.title = 'Livros'
    vm.altura = true

    $http.get(url)
        .then(function(response) {
            vm.users = response.data
        }, function(error) {
            console.error(error)
        })
}
