angular.module('seraqueehbom').controller("CadastroPController", CadastroPController);

function CadastroPController($scope, $firebaseArray, $firebaseAuth, $firebaseObject, $state){
  var ref_produto = firebase.database().ref('produtos');
  var produtos;
  var auth = $firebaseAuth();
  var usuario;
  var ref_categoria = firebase.database().ref('categorias');

  $scope.dados = {};
  $scope.cadastrar_produto = cadastrar_produto;
  $scope.categorias = $firebaseArray(ref_categoria);


  auth.$onAuthStateChanged(buscar_usuario);

  function buscar_usuario(firebaseUser){
    usuario = firebaseUser;
  }

  function cadastrar_produto(){
    console.log($scope.dados)
    var produto = $firebaseArray(ref_produto);
    $scope.dados.usuario_uid = usuario.uid;
    produto.$add($scope.dados);

    $state.go('painel_usuario');  }
}
