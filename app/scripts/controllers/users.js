'use strict';

/**
 * @ngdoc function
 * @name angualrSkyApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the angualrSkyApp
 */
angular.module('angualrSkyApp')
    .controller('UsersCtrl', function($scope, UsersService) {

        // console.log(UsersService);

        UsersService.success(function(data) {
        	$scope.userData = data;
            $scope.test = "Hello " + data.users[0].name.first;
            console.log($scope.test);

            console.log($scope.userData.users[1].name.first);
            return $scope.userData;

        }).error(function() {
            console.log('Dam son errors!');
        });

        // $http.get('todos.json')
        //     .then(function(res) {
        //         $scope.todos = res.data;
        //     });

    });
