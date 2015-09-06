/**
 * HomeController
 * @since September 2015
 */

Reservation
	.controller('HomeController', [
		'$scope', 
		'$http', 
		'BookService', 
		'UserService',
		'BookRepository',
		'BookReservationService',
		'$q',
		function($scope, $http, $bookService, $userService, $bookRepo, $bookReservationService, $q) {

			var defer = $q.defer();

			defer.promise
				.then(function() {
					$userService.setToken(690102);
					$userService.setName('Israel Tabada');
					$userService.setId(690102);
				}
			);

			defer.resolve();
		}
	]);