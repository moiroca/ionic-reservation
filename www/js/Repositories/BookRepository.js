Reservation
	.factory('BookRepository', ['$http', 'UserService', function($http, $userService) {

		var BookRepository = { };

		BookRepository.reservedBooks = { };

		BookRepository.searchByName = function(data, callback) {	
			$http({
			    url: 'http://192.168.1.99/reservation/books.php', 
			    method: "GET",
			    params: { name : data.bookName }
			 }).success(function(data) {
			 	callback(data);
			 });
		};

		BookRepository.getReservedBooks = function(user_id, callback) {
			$http({
			    url: 'http://192.168.1.99/reservation/reservedBooks.php', 
			    method: "GET",
			    params: { user_id : $userService.getId() }
			}).success(function(data) {
				callback(data);
			});
		};

		return BookRepository;
	}]);