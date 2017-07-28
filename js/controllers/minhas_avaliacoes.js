angular.module('seraqueehbom').controller("MinhasAController", MinhasAController);

function MinhasAController($scope, $firebaseArray, $firebaseAuth){
    var ref = firebase.database().ref('reviews');
    var admin;
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



          if ($scope.usuario.uid=='DDBErNuQM4dShZ4k5sfHIhx8L7F2'){
            $scope.admin = true;
          } else{
            $scope.admin = false;
            }
            console.log($scope.admin);
        }
////////////////////////////////////////////////////////////////////////////////

    function excluir(review){
        $scope.reviews.$remove(review);
    }
}
