Reservation
	.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
		
		$httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

		$stateProvider
			.state('/', {
				url: '',
				templateUrl: 'views/home.html',
				controller: 'DashboardController'
			})
			.state('dashboard', {
				url: '/dashboard',
				templateUrl: 'views/dashboard.html',
				controller: 'DashboardController'
			})
			.state('reserve', {
				cache : false,
				url: '/reserve',
				templateUrl: 'views/reservedbooks.html',
				controller: 'ReservationController'
			})
			.state('search', {
				url: '/search',
				templateUrl : 'views/search.html',
				controller : 'SearchBookController'
			})
			.state('landing-page-books', {
				url: '/landing-page-books',
				templateUrl : 'views/landing_page_books.html'
			})
			.state('view-all-books', {
				url : '/view-all-books',
				templateUrl : 'views/books_list.html',
				controller : 'BookController'
			});
	});
