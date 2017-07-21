angular.module('seraqueehbom').controller("CadastroUController", CadastroUController);

function CadastroUController($scope, $firebaseAuth, $firebaseObject, $state){
  var ref_usuario = firebase.database().ref('users');
  var auth = $firebaseAuth();

  $scope.dados = {};
  $scope.estado = "cadastro_u";
  $scope.cadastrar = cadastrar;

  function cadastrar(){
    auth.$createUserWithEmailAndPassword($scope.dados.email, $scope.dados.senha)
    .then(cadastrar_dados).catch(function(error) {
      console.error(error);
    });
  }

  function cadastrar_dados(firebaseUser){
    console.log($scope.dados)
    var user = $firebaseObject(ref_usuario.child(firebaseUser.uid));
    var data = new Date();
    user.data = data.toString();
    user.nome = $scope.dados.nome;
    user.sobrenome = $scope.dados.sobrenome;
    user.$save();

    $state.go('painel_usuario');
    // $scope.estado = "obrigado";
  }

  function cadastroSucesso(){

  }

  function cadastroErro(erro){
    console.log(erro)
  }
}
