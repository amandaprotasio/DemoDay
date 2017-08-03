angular.module('seraqueehbom').controller("MinhasAController", MinhasAController);

function MinhasAController($scope, $firebaseArray, $firebaseAuth, $firebaseObject){

    var auth = $firebaseAuth();
    var usuario;
    var reviews;
    var admin;

    auth.$onAuthStateChanged(buscarStatus);

    $scope.dados = {};

    auth.$onAuthStateChanged(buscar_usuario);

    function buscar_usuario(firebaseUser){
      usuario = firebaseUser;

      // Se o user for admin, traz todas as reviews
      if (usuario.uid=='Dxqoddd5XfXid4LOGIqLyY0IavM2'){
        $scope.admin = true;
        var refReviews = firebase.database().ref('reviews');
        $scope.reviews = $firebaseArray(refReviews);

     // Senão, traz somente as reviews do user logado
      } else{
        $scope.admin = false;
        var refUsers = firebase.database().ref('users/' + usuario.uid);
        var ref_review = refUsers.child('reviews');
        $scope.reviews = $firebaseArray(ref_review);
        }

      reviews = $scope.reviews;
      console.log('Reviews', reviews);
    }

    $scope.excluir = excluir;

    function buscarStatus(firebaseUser){
        if(! firebaseUser){
            return;
        }
          $scope.usuario = firebaseUser;

          if ($scope.usuario.uid=='Dxqoddd5XfXid4LOGIqLyY0IavM2'){
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
