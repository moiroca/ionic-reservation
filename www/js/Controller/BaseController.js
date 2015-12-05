/**
 * Base Controller
 *
 * @since 2015
 */

Reservation
	.controller('BaseController',  [
			'$scope', 
			'UserService', 
			'$location', 
			function($scope, $userService, $location) {

				$scope.isLogin = function() {
					if ($userService.getToken()) { return true; } 
					else { return false; }
				};

				$scope.logout = function() {
					$userService.removeStorage();
					$location.path("/");
				};
			}
	]);