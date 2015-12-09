/**
 * Login Controller
 *
 * @since September 2015
 */

Reservation
 	.controller('LoginController', [
 			'$scope', 
 			'LoginService', 
 			'UserService', 
 			'$location',
 			'$ionicPopup',
 			function($scope, $loginService, $userService, $location, $ionicPopup) {
	 		
	 		$scope.user = {
	 			username : '',
	 			password: ''
	 		};
	 		
	 		$scope.login = function(user) {
	 			if (user != null) {
	 				$loginService.attempt(user, function(user) {
	 					if (user.status) {
			 				$userService.setToken(user.token);
			 				$userService.setId(user.id);
			 				$userService.setName(user.name);
	 					} else {
	 						$ionicPopup.alert({
						       	title: 'Login Process',
						       	template: 'Username or Password does not match.'
						    });
	 					};
		 			});
		 			$location.path("/dashboard");
	 			} else {
	 				$ionicPopup.alert({
				       	title: 'Login Process',
				       	template: 'Username or Password does not match.'
				    });
	 			};
	 			
	 		};
 	}]);