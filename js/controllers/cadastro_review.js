angular.module('seraqueehbom').controller("CadastroRController", CadastroRController);

function CadastroRController($scope, $firebaseArray, $firebaseAuth, $firebaseObject, $state){

  var reviews;
  var auth = $firebaseAuth();
  var usuario;
  var ref_categoria = firebase.database().ref('categorias');
  var ref_produto = firebase.database().ref().child('produtos');

  $scope.dados = {};
  $scope.cadastrar_review = cadastrar_review;
  $scope.OnChangeCategoria = OnChangeCategoria;
  $scope.categorias = $firebaseArray(ref_categoria);
  $scope.OnChangeProduto = OnChangeProduto;

function OnChangeCategoria() {
  console.log('OnChangeCategoria', $scope.dados.categoria);

  if ($scope.dados.categoria) {
    var query = ref_produto.orderByChild("categoria").equalTo($scope.dados.categoria.categoria);
    $scope.produtos = $firebaseArray(query);
  }

}

function OnChangeProduto(){
  console.log($scope.dados.nomeProd.$id);
}

  //
  auth.$onAuthStateChanged(buscar_usuario);

  function buscar_usuario(firebaseUser){
    usuario = firebaseUser;
  }



  function cadastrar_review(){
    console.log($scope.dados);
    $scope.dados.usuario_uid = usuario.uid;
    var ref_produto = firebase.database().ref('produtos');
    var ref_review = ref_produto.child($scope.dados.nomeProd.$id);
    var newReview = ref_review.child('reviews').push();

    newReview.set({
      usuario_uid: usuario.uid,
      comment:     $scope.dados.comment,
      score:       $scope.dados.score
    });

    $state.go('painel_usuario');  }
}
