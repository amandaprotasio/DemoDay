angular.module('seraqueehbom').controller("PainelCController", PainelCController);

function PainelCController($firebaseArray, $scope, $filter){
  var ref = firebase.database().ref('produtos');
  $scope.produtos = $firebaseArray(ref);



}
