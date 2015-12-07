Reservation
	.factory('BookRepository', ['$http', 'UserService', '$rootScope', function($http, $userService, $rootScope) {

		var BookRepository = { };

		BookRepository.reservedBooks = { };

		BookRepository.searchByName = function(data, callback) {	
			$http({
			    url: $rootScope.domainName + 'books.php', 
			    method: "GET",
			    params: { name : data.bookName }
			 }).success(function(data) {
			 	callback(data);
			 });
		};

		BookRepository.getReservedBooks = function(user_id, callback) {
			$http({
			    url: $rootScope.domainName + 'reservedBooks.php', 
			    method: "GET",
			    params: { user_id : $userService.getId() }
			}).success(function(data) {
				callback(data);
			});
		};

		return BookRepository;
	}]);