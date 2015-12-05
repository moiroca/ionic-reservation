
Reservation
	.controller('BookController', [
		'$scope', 
		'BookService',
		'$q',
		function($scope, BookService, $q) {
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
		}
	]);