//Book Service
Reservation
	.service('BookService', ['$http', function($http) {

		this.searchByName = function(data) {	
			$http({
			    url: 'http://localhost/reservation/books.php', 
			    method: "GET",
			    params: { name : data.bookName }
			 }).success(function(data) {
			 	return data;
			 });
		};

		this.getAllBooks = function(callback) {
			$http({
			    url: 'http://localhost/reservation/allbooks.php', 
			    method: "GET",
			 }).success(function(data) {
			 	callback(data);
			 });
		}	
	}]);