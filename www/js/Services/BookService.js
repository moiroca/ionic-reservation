//Book Service
Reservation
	.service('BookService', ['$http', function($http) {

		this.books = [];
		this.searchByName = function(data) {	
			$http({
			    url: 'http://localhost/testing/books.php', 
			    method: "GET",
			    params: { name : data.bookName }
			 }).success(function(data) {
			 	return data;
			 });
		};
	}]);