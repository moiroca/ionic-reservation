
Reservation
	.controller('BookController', [
		'$scope', 
		'BookService',
		'$q',
		'UserService',
		'BookReservationService',
		'$ionicPopup',
		'$location',
		function($scope, BookService, $q, $userService, $bookReservationService, $ionicPopup, $location) {
			var defer 	 = $q.defer();
			$scope.books = [];

			defer.promise
				.then(function() {
					BookService.getAllBooks(function(data) {
						$scope.books = data;
					});
				});

			defer.resolve();

			$scope.list = function() {
				BookService.getAllBooks(function(data) {
					$scope.books = data;
				});
			};

			$scope.reserveBook = function(book) {
					
				var data = { book_id : book.id , user_id : $userService.getId() };

				$bookReservationService.reserve(data, function(data) {

					if (data.isReservationExceeded) {
						$ionicPopup.alert({
							       	title: 'Process Result',
							       	template: 'You have already exceed allowed maximum number.'
							    });
					} else if (data.bookAlreadyReserved) {
						$ionicPopup.alert({
							       	title: 'Process Result',
							       	template: 'Book Already Reserved!'
							    });
					} else if (data.reservationSucceeded){
						$ionicPopup.alert({
							       	title: 'Process Result',
							       	template: 'Book Reservation Success'
								});
						$location.path('/reserve');
					} else {
						$ionicPopup.alert({
							       	title: 'Alert',
							       	template: 'Something Went Wrong. Please Contact Admin'
								});
						$location.path('/reserve');
					}
				});
			};
		}
	]);