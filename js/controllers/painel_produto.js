angular.module('seraqueehbom').controller("PainelPController", PainelPController);

function PainelPController($firebaseArray, $firebaseObject, $scope, $filter, $rootScope, $state){

  $scope.dados = {};

  // $scope.getProd = getProd;

  var refProdutos = firebase.database().ref('produtos');
  var query = refProdutos.orderByChild("nomeProd").equalTo('Liquidificador Arno');
  $scope.produto = $firebaseObject(query);


  $scope.$on('sendProd', function (getProd, args) {



    var refProdutos = firebase.database().ref('produtos/' + $scope.produto.$id);
    var ref_review = refUsers.child('reviews');
    $scope.reviews = $firebaseArray(ref_review);


  };


  function getProd(event, nomeProd) {



  }


}
