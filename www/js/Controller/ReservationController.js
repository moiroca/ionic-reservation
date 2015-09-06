/**
 * Reservation Controller
 * @since September 2015
 */
Reservation
		.controller('ReservationController', [
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
						var getReservedBooks = function(data) {
							$scope.books = data;
						};
						$bookRepo.getReservedBooks($userService.getName(), getReservedBooks);
					}
				);

				defer.resolve();

				$scope.reserveBook = function(book) {

					var reserveBook = function(response) {
						console.log(response);
						//$scope.books = data;
					};
					var data = { book_id : book.id , user_id : $userService.getId() };

					$bookReservationService.reserve(data, reserveBook);
				};
			}
		]);