app.config(function($routeProvider){
    $routeProvider
    .when('/blank', {
        templateUrl: 'blank.html'
    })
	.when('/', {
        templateUrl: 'admin.html'
    })
	.when('/inbox', {
        templateUrl: 'views/mensagens/Inbox.html'
    })
	.when('/mensagem/:id', {
        templateUrl: 'views/mensagens/Mensagem.html'
    })
	.when('/novamensagem', {
        templateUrl: 'views/mensagens/NovaMensagem.html'
    })
});
