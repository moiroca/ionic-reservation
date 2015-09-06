
Reservation
	.controller('SearchBookController', [
		'$scope', 
		'BookRepository', 
		'$http', 
		function($scope, $bookRepository, $http) {

		$scope.searchBooks = [];
		
		$scope.searchBookByName = function() {

			var bookName = document.getElementById('bookName').value;

			$http({
			    url: 'http://localhost/test/books.php', 
			    method: "GET",
			    params: { name : bookName }
			 }).success(function(data) {
			 	$scope.searchBooks = data;
			 });
		};

		$scope.reserveBook = function(book) {
			$http({
			    url: 'http://localhost/test/books.php', 
			    method: "POST",
			    params: { book : book }
			 }).success(function(data) {
			 	$scope.searchBooks = data;
			 });
		};
	}]);