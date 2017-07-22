angular.module('seraqueehbom').controller("HomeController", HomeController);

function HomeController($firebaseArray, $scope, $filter){
  var ref = firebase.database().ref('reviews');
  $scope.reviews = $firebaseArray(ref);

  $scope.random = function() {
       return 0.5 - Math.random();
   }
   console.log($scope.random);


}
