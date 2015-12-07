/**
 * User Service
 * @since September 2015
 */

Reservation
	.service('UserService',[
		'$http',
		'$rootScope',
		function($http, $rootScope) {

		this.getToken = function() {
			if(typeof(window.localStorage) != 'undefined') { return window.localStorage.getItem('userToken'); } 
			else { throw "window.localStorage, not defined"; }
		};

		this.setToken = function(userToken) {
			if(typeof(window.localStorage) != 'undefined'){  window.localStorage.setItem('userToken', userToken);  } 
			else { throw "window.localStorage, not defined"; }
		}

		this.removeToken = function() {
			if (typeof(window.localStorage) != 'undefined') {  window.localStorage. clear() ; } 
			else { throw "window.localStorage, not defined"; }
		}

		this.setName = function(name) {
			if(typeof(window.localStorage) != 'undefined'){  window.localStorage.setItem('name', name);  } 
			else { throw "window.localStorage, not defined"; }
		}

		this.getName = function() {
			if(typeof(window.localStorage) != 'undefined'){ return window.localStorage.getItem('name');  } 
			else { throw "window.localStorage, not defined"; }
		}

		this.getId = function() {
			if(typeof(window.localStorage) != 'undefined'){ return window.localStorage.getItem('id');  } 
			else { throw "window.localStorage, not defined"; }
		}

		this.setId = function(id) {
			if(typeof(window.localStorage) != 'undefined'){ return window.localStorage.setItem('id', id);  } 
			else { throw "window.localStorage, not defined"; }
		}

		this.removeStorage = function() {
			if (typeof(window.localStorage) != 'undefined') {  window.localStorage. clear() ; } 
			else { throw "window.localStorage, not defined"; }
		}

		this.changePassword = function(user, callback) {

			$http({
				method : 'POST',
				url: $rootScope.domainName + "changePassword.php",
				data: {
			        oldPassword: user.oldPassword,
			        newPassword: user.newPassword
			    },
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			}).success(function(result){
				callback(result);
			});
		}	
	}]);