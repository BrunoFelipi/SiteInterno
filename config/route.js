app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/inicio.html'
    })
	.when('/inicio', {
        templateUrl: 'views/inicio.html'
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
	.when('/agenda', {
        templateUrl: 'views/agenda/agenda.html'
    })
});
