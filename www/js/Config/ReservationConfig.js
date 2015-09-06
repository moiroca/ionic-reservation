Reservation
	.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
		
		$httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

		$stateProvider
			.state('/', {
				url: '',
				templateUrl: 'views/home.html',
				controller: 'HomeController'
			})
			.state('dashboard', {
				url: '/dashboard',
				templateUrl: 'views/dashboard.html',
				controller: 'DashboardController'
			})
			.state('reserve', {
				url: '/reserve',
				templateUrl: 'views/reservedbooks.html',
				controller: 'ReservationController'
			})
			.state('search', {
				url: '/search',
				templateUrl : 'views/search.html',
				controller : 'SearchBookController'
			})
			.state('login', {
				url: '/login',
				templateUrl : 'views/login.html',
				controller: 'LoginController'
			});
	});
