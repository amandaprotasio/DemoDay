var app = angular.module('seraqueehbom')

// app.factory("Auth", ["$firebaseAuth",
//   function($firebaseAuth) {
//     return $firebaseAuth();
//   }
// ]);

app.controller("IndexController", IndexController);



function IndexController($scope, $firebaseAuth, $state, $firebaseArray, $firebaseObject){
  var auth = $firebaseAuth();
  var admin;


  // var ref2 = firebase.database().ref('users');
  // console.log(ref2);
  // var ref = firebase.database().ref('produtos');
  $scope.logout = logout;
  // Esse método executa a função passada como parâmetro toda vez que o status
  // de autenticação é alterado. Isso também ocorre na primeira vez que o
  // Firebase informa o status do usuário. Note que essa operação é assíncrona,
  // de forma que precisamos esperar a resposta do Firebase para trabalhar
  // com os dados do usuário.
  auth.$onAuthStateChanged(buscarStatus);

  function buscarStatus(firebaseUser){
      // Caso o usuário não esteja autenticado, a variável firebaseUser será
      // nula. Usamos esse if para evitar erros no console ao fazer o logout,
      // já que isso causa uma mudança no status e faz com que essa função
      // seja executada novamente.
      $scope.firebaseUser=firebaseUser;
      if(! firebaseUser){
          return;
      }

      // Os dados do usuário devem ficar disponíveis no DOM, para que possamos
      // exibir o seu email na tela.
      $scope.user = firebaseUser;
      console.log(firebaseUser);
      // Já que os dados do usuário já estão carregados, podemos acessar
      // o objeto que armazena as listas do usuário através do seu id.
      ref = firebase.database().ref('users').child($scope.user.uid);

       // Essa função cria um array do Firebase na variável $scope.listas.
      $scope.usuario = $firebaseObject(ref);

//      console.log($scope.usuario);

  }



  function logout(firebaseUser){
      // Essa função encerra a sessão do usuário no Firebase. Note que nem
      // o refresh de página encerra a sessão automaticamente.
      auth.$signOut();
      console.log(firebaseUser);
      console.log('logout');

      // Além de encerrar a sessão, queremos redirecionar o usuário para a
      // página de login.
      $state.go('home');
  }

}
