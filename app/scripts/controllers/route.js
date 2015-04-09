'use strict';

/**
 * @ngdoc function
 * @name angualrSkyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angualrSkyApp
 */
angular.module('angualrSkyApp')
    .controller('routeCtrl', function($scope, $location) {

    	// if ($location.path()) {
    	// 	var foo = $location.path();
    	// 	console.log(foo)
    	// }
    	
    	$scope.runShowSideMenu = function (){
    		$scope.showSideMenu = $location.path() === '/';
    		console.log('view changed'); 
    	}
        
        
    });





// app.controller('AppCtrl', ['$scope', function($scope){
//     $scope.onViewLoad = function(){
//       console.log('view changed');  
//     };
// }])