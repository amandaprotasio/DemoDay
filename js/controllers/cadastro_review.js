angular.module('seraqueehbom').controller("CadastroRController", CadastroRController);

function CadastroRController($scope, $firebaseArray, $firebaseAuth, $firebaseObject, $state){
  var ref_review = firebase.database().ref('reviews');//.child(id);
  var reviews;
  var auth = $firebaseAuth();
  var usuario;

  $scope.dados = {};
  $scope.cadastrar_review = cadastrar_review;
  //
  auth.$onAuthStateChanged(buscar_usuario);

  function buscar_usuario(firebaseUser){
    usuario = firebaseUser;
  }

  function cadastrar_review(){
    console.log($scope.dados)
    var review = $firebaseArray(ref_review);
    $scope.dados.usuario_uid = usuario.uid; 
    review.$add($scope.dados);

    $state.go('painel_usuario');  }
}
