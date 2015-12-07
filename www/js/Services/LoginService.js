/**
 * Login Service
 * 
 * @since September 2015
 */

 Reservation
 	.service('LoginService', [
 			'$http', 
 			'$rootScope',
 			function($http, $rootScope) {
		 		this.attempt = function(user, callback) {
		 			$http({
						method : 'POST',
						url: $rootScope.domainName + "login.php",
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