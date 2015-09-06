//Book Reservation
Reservation
	.service('BookReservationService', ['$http', function($http) {

		this.reserve = function(data, reserveBook) {
			$http({
				method : 'POST',
				url: "http://192.168.1.99/reservation/reserve.php",
				data: 'book_id=' + data.book_id + '&user_id=' + data.user_id,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(result){
				reserveBook(result);
			});
		};
	}]);