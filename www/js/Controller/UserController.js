/**
 * User Controller
 */

Reservation
	.controller('UserController', [
		'$scope', 
		'UserService',
		'$location',
		'$ionicPopup',
		function($scope, UserService, $location, $ionicPopup) {
		$scope.password = { };
		$scope.user = { };

		/**
		 * Change Password
		 */
		$scope.changePasswordSubmit = function(formValid) {

			if (formValid) {

				if ($scope.user.newPassword != $scope.user.cNewPassword) {
					$ionicPopup.alert({
				       	title: 'Password Not Match',
				       	template: 'New Password and Confirm Password Does Not Match!'
				    });
				    return false;
				}

				UserService.changePassword($scope.user, function(data) {

					if (data.oldPasswordNotMatch) {
						$ionicPopup.alert({
							title: 'Password Not Match',
							template: 'Old Password Does Not Match'
						});

						return false;
					}

					if (data.success) { 
						UserService.removeStorage();
						$location.path("/");
					}
				});
			} 
		};
	}]);