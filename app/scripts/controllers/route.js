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

    	// quick helper to check the path is passed through correctly
         //    if ($location.path()) {
         //     var foo = $location.path();
         //     console.log(foo)
         // }

    	
    	$scope.runShowSideMenu = function (){
            var path = $location.path();
            if (path == 'personal-info') {
                $scope.showSideMenu = false;
            } else {
               $scope.showSideMenu = true; 
            }
    		
    		// console.log($scope.showSideMenu); 

            return $scope.showSideMenu;
    	}        
        
    });
