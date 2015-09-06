Reservation
	.factory('BookRepository', ['$http', function($http) {

		var BookRepository = { };

		BookRepository.reservedBooks = { };

		BookRepository.searchByName = function(data) {	
			$http({
			    url: 'http://localhost/test/books.php', 
			    method: "GET",
			    params: { name : data.bookName }
			 }).success(function(data) {
			 	return data;
			 });
		};

		BookRepository.getReservedBooks = function(userToken, ctrlGetReservedBooks) {

			$http({
			    url: 'http://192.168.1.99/reservation/reservedBooks.php', 
			    method: "GET",
			    params: { userToken : userToken }
			}).success(function(data) {
				ctrlGetReservedBooks(data);
			});
		};

		return BookRepository;
	}]);