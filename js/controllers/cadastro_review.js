angular.module('seraqueehbom').controller("CadastroRController", CadastroRController);

function CadastroRController($scope, $firebaseArray, $firebaseAuth, $firebaseObject, $state){
  var ref_review = firebase.database().ref('reviews');//.child(id);
  var reviews;
  var auth = $firebaseAuth();
  var usuario;
  var ref_categoria = firebase.database().ref('categorias');
  var ref_produto = firebase.database().ref().child('produtos');

  $scope.dados = {};
  $scope.cadastrar_review = cadastrar_review;
  $scope.OnChangeCategoria = OnChangeCategoria;
  $scope.categorias = $firebaseArray(ref_categoria);



function OnChangeCategoria() {
  console.log('OnChangeCategoria', $scope.dados.categoria);

  if ($scope.dados.categoria) {
    var query = ref_produto.orderByChild("categoria").equalTo($scope.dados.categoria.categoria);
    $scope.produtos = $firebaseArray(query);
  }

}

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
