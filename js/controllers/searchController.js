angular
    .module('app-users')
    .controller('searchController', searchController)

function searchController($http) {
    const vm = this

    vm.title = 'Pesquisa de Usuário'
    vm.teste = false
                vm.usuario
    vm.usuarioShow

    vm.searchUser = searchUser

    function searchUser () {
        const usuario = angular.copy(vm.usuario)
        $http.get(`http://api.github.com/users/${usuario}`)
            .then(res => {
                vm.usuarioShow = res.data               
                vm.teste = true
                delete vm.usuario
            })
    }
}
