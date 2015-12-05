//Book Reservation
Reservation
	.service('BookReservationService', ['$http', function($http) {

		this.reserve = function(data, callback) {
			$http({
				method : 'POST',
				url: "http://localhost/reservation/reserve.php",
				data: {
					book_id : data.book_id,
					user_id :  data.user_id
				},
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(result){
				callback(result);
			});
		};
	}]);