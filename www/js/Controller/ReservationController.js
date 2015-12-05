/**
 * Reservation Controller
 * @since September 2015
 */
Reservation
		.controller('ReservationController', [
			'$scope', 
			'UserService',
			'BookRepository',
			'$q',
			function(
				$scope, 
				$userService, 
				$bookRepo,
				$q) {

				var defer = $q.defer();
				
				defer.promise
					.then(function() {
						$scope.user = { name : $userService.getName() };
						$bookRepo.getReservedBooks($userService.getId(), function(data) { $scope.books = data; });
					});

				defer.resolve();
				
				$scope.getReservedBooks = function() {
					$bookRepo.getReservedBooks($userService.getId(), function(data) { $scope.books = data; });
				};
			}
		]);