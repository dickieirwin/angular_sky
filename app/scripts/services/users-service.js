'use strict';

angular.module('angualrSkyApp')

/** Fetching data for user detail. */
.factory('UsersService', ['$http', '$state',
        function($http, $state)
            {

                var content = $state.current.data;
                var dataPath = 'data/';
                var staticJsonPath = dataPath + content;
                // console.log('Test=' + content);
                var data = $http.get(staticJsonPath);
                // console.log(data);
                return data;

            }
]);
