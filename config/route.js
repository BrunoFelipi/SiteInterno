app.config(function($routeProvider){
    $routeProvider
	//INICIO
    .when('/', {
        templateUrl: 'views/inicio.html'
    })
	.when('/inicio', {
        templateUrl: 'views/inicio.html'
    })
	//MENSAGENS	
	.when('/inbox', {
        templateUrl: 'views/mensagens/Inbox.html'
    })	
	.when('/mensagem/:id', {
        templateUrl: 'views/mensagens/Mensagem.html'
    })
	.when('/novamensagem', {
        templateUrl: 'views/mensagens/NovaMensagem.html'
    })
	//AGENDA
	.when('/agenda', {
        templateUrl: 'views/agenda/agenda.html'
    })
	//COMUNICADOS
	.when('/comunicados', {
        templateUrl: 'views/comunicados/comunicados.html'
    })
	//ESTATUTO
	.when('/estatuto', {
        templateUrl: 'views/estatuto/estatuto.html'
    })
	//EVENTOS
	.when('/eventos', {
        templateUrl: 'views/eventos/eventos.html'
    })
	//FINANÇAS
	.when('/financas', {
        templateUrl: 'views/financas/financas.html'
    })
	//FOTOS
	.when('/fotos', {
        templateUrl: 'views/fotos/fotos.html'
    })
	//JOGOS
	.when('/jogos', {
        templateUrl: 'views/jogos/jogos.html'
    })
	//PROMOÇÕES
	.when('/promocoes', {
        templateUrl: 'views/promocoes/promocoes.html'
    })
	//VIDEOS
	.when('/videos', {
        templateUrl: 'views/videos/videos.html'
    })
	
	
	
});
