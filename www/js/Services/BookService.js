//Book Service
Reservation
	.service('BookService', ['$http', '$rootScope', function($http, $rootScope) {

		this.searchByName = function(data) {	
			$http({
			    url: $rootScope.domainName + 'books.php', 
			    method: "GET",
			    params: { name : data.bookName }
			 }).success(function(data) {
			 	return data;
			 });
		};

		this.getAllBooks = function(callback) {
			$http({
			    url: $rootScope.domainName + 'allbooks.php', 
			    method: "GET",
			 }).success(function(data) {
			 	callback(data);
			 });
		}	
	}]);