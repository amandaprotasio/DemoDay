angular.module('seraqueehbom').controller("CadastroCController", CadastroCController);

function CadastroCController($scope, $firebaseArray, $firebaseAuth, $firebaseObject, $state){
  var ref_categoria = firebase.database().ref('categorias');
  var categorias;
  var auth = $firebaseAuth();
  var usuario;

  $scope.dados = {};
  $scope.cadastrar_categoria = cadastrar_categoria;

  auth.$onAuthStateChanged(buscar_usuario);

  function buscar_usuario(firebaseUser){
    usuario = firebaseUser;
  }

  function cadastrar_categoria(){
    console.log($scope.dados)
    var categoria = $firebaseArray(ref_categoria);
    $scope.dados.usuario_uid = usuario.uid;
    categoria.$add($scope.dados);

    $state.go('painel_usuario');  }
}
