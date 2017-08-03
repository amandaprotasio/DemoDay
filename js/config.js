angular.module('seraqueehbom').config(rotas);

function rotas($stateProvider, $urlRouterProvider){
    // O $stateProvider registra informações de estado, que representam 'páginas'
    // em nossa aplicação. O primeiro parâmetro é o nome do estado, e o segundo
    // é um objeto de configurações.
    $stateProvider.state('home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
        url: '/home'
    });

    $stateProvider.state('login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController',
        url: '/login'
    });

    $stateProvider.state('cadastro_produto', {
        templateUrl: 'templates/cadastro_produto.html',
        controller: 'CadastroPController',
        url: '/cadastro_produto'
    });

    $stateProvider.state('cadastro_categoria', {
        templateUrl: 'templates/cadastro_categoria.html',
        controller: 'CadastroCController',
        url: '/cadastro_categoria'
    });

    $stateProvider.state('cadastro_review', {
        templateUrl: 'templates/cadastro_review.html',
        controller: 'CadastroRController',
        url: '/cadastro_review'
    });

    $stateProvider.state('cadastro_usuario', {
        templateUrl: 'templates/cadastro_usuario.html',
        controller: 'CadastroUController',
        url: '/cadastro_usuario'
    });

    $stateProvider.state('painel_usuario', {
        templateUrl: 'templates/painel_usuario.html',
        controller: 'PainelUController',
        url: '/painel_usuario'
    });

    $stateProvider.state('minhas_avaliacoes', {
        templateUrl: 'templates/minhas_avaliacoes.html',
        controller: 'MinhasAController',
        url: '/minhas_avaliacoes'
    });

    $stateProvider.state('index', {
        templateUrl: 'index.html',
        controller: 'IndexController'
    });

    $stateProvider.state('painel_categoria', {
        templateUrl: 'templates/painel_categoria.html',
        controller: 'PainelCController',
        url: '/painel_categoria'
    });

    $stateProvider.state('painel_produto', {
        templateUrl: 'templates/painel_produto.html',
        controller: 'PainelPController',
        url: '/painel_produto'
    });

    $stateProvider.state('painel_produto2', {
        templateUrl: 'templates/painel_produto2.html',
        controller: 'PainelPController2',
        url: '/painel_produto2'
    });



    // O $urlRouterProvider permite, entre outras coisas, que seja definida
    // uma rota padrão que usada como padrão caso nenhuma outra rota esteja
    // em efeito.
    $urlRouterProvider.otherwise('/home');
}
