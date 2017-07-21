angular.module('seraqueehbom').controller("MinhasAController", MinhasAController);

function MinhasAController($scope, $firebaseArray, $firebaseAuth){
    var ref = firebase.database().ref('reviews');
    $scope.reviews = $firebaseArray(ref);
    $scope.excluir = excluir;
////////////////////////////////////////////////////////////////////////////////
// Script para buscar usuário
    var auth = $firebaseAuth();
    var usuario;
    auth.$onAuthStateChanged(buscarStatus);

    function buscarStatus(firebaseUser){
        if(! firebaseUser){
            return;
        }
          $scope.usuario = firebaseUser;
        }
////////////////////////////////////////////////////////////////////////////////

    function excluir(review){
        $scope.reviews.$remove(review);
    }
}
