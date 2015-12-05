/**
 * Login Service
 * 
 * @since September 2015
 */

 Reservation
 	.service('LoginService', [
 			'$http', 
 			function($http) {
		 		this.attempt = function(user, callback) {
		 			$http({
						method : 'POST',
						url: "http://localhost/reservation/login.php",
						data: {
					        username: user.username,
					        password: user.password
					    },
						headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
					}).success(function(result){
						callback(result);
					});
		 		}
		 	}
		]);