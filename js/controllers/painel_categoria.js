angular.module('seraqueehbom').controller("PainelCController", PainelCController);

function PainelCController($firebaseArray, $scope, $filter, $rootScope, $state){

  $scope.dados = {};
  $scope.goToPainelProd = goToPainelProd;

  // Seleciona produtos da categoria Cozinha
  var refProdutos = firebase.database().ref().child('produtos');
  var query = refProdutos.orderByChild("categoria").equalTo('Cozinha');
  $scope.produtos = $firebaseArray(query);

  function goToPainelProd(nomeProd) {

    console.log(nomeProd);

    $rootScope.$broadcast('sendProd', { nomeProd: nomeProd } );

    $state.go('painel_produto');
  }

}
