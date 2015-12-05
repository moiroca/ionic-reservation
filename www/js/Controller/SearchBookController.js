
Reservation
	.controller('SearchBookController', [
		'$scope', 
		'BookRepository', 
		'$ionicPopup',
		'BookReservationService',
		'$ionicPopup',
		'$location',
		'UserService',
		function(
			$scope, 
			$bookRepository, 
			$ionicPopup,
			$bookReservationService, 
			$ionicPopup, 
			$location, 
			$userService) {

		$scope.searchBooks = [];
		
		$scope.searchBookByName = function() {

			var bookName = document.getElementById('bookName').value;

			$bookRepository.searchByName({ bookName: bookName}, function(data) {
				
				if (data.length != 0) {
					$scope.searchBooks = data;
				} else {
					$ionicPopup.alert({
							       	title: 'Search Result',
							       	template: 'There is no matching book!'
							    });
				};
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
				} else {
					$ionicPopup.alert({
						       	title: 'Process Result',
						       	template: 'Book Reservation Success'
							});
					$location.path('/reserve');
				}
			});
		};
	}]);