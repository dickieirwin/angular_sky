'use strict';

/**
 * @ngdoc overview
 * @name angualrSkyApp
 * @description
 * # angualrSkyApp
 *
 * Main module of the application.
 */
angular
    .module('angualrSkyApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    //The below looks different because this is what the auto includer ngSanitize is doing its good to know how it works otherwise you could just write
    //.config(function($stateProvider, $locationProvider, ...) {
    //
    .config(['$stateProvider', '$locationProvider', '$urlMatcherFactoryProvider', '$urlRouterProvider',
        function($stateProvider, $locationProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {

            // Routes using the ui.router https://github.com/angular-ui/ui-router
            $stateProvider
            // Full HTML site output. 
                .state('full', {
                    url: '/',
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'

                    // There are things you can do here too
                    // https://github.com/angular-ui/ui-router/wiki/URL-Routing
                    // data: '/content/static.json',
                    // controller: function($stateParams) {
                    //         // If we got here from a url of /contacts/42
                    //         expect($stateParams).toBe({
                    //             contactId: "42"
                    //         });
                    //     }

                })
                .state('personal-info', {
                    url: '/personal-info',
                    templateUrl: 'views/personal-info.html',
                    controller: 'PersonalInfoCtrl'
                })
                .state('users', {
                    abstract: true, //To prepend url to child state urls
                    //This means this state is abstract and not viewable ie /users wont work
                    url: '/users',
                    templateUrl: 'views/users.html',
                    // Note: abstract still needs a ui-view for its children to populate.
                    // You can simply add it inline here.  Or add one to the template
                    // template: '<ui-view/>'
                })
                .state('users.list', {
                    // url will be '/users/list'
                    url: '/list',
                    // loaded into ui-view of parent's template
                    templateUrl: 'views/users.list.html',
                    controller: 'UsersCtrl',
                    data: 'users_example.json'
                })
                .state('users.single', {
                    // url will be '/contacts/single'
                    url: '/single/:id',
                    // loaded into ui-view of parent's template
                    templateUrl: 'views/users.single.html',
                    //We can make a small controller right here if we want
                    controller: function($scope,$stateParams) {
                    	var userId = $stateParams;
                        $scope.data = userId;
                        console.log($scope.data);
                    },
                        onEnter: function() {
                        console.log("enter user/single");
                    }
                })
                .state('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl'
                });

            // This is how to build a page not found
            // .state('otherwise', {
            //     url: '*path',
            //     templateUrl: '/views/404.html'
            // });

            //route provider helps with IE9 see: https://github.com/angular-ui/ui-router/issues/576
            $urlRouterProvider.when('', '/');

            // use the HTML5 History API see: https://scotch.io/quick-tips/pretty-urls-in-angularjs-removing-the-hashtag
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            });

            $urlMatcherFactoryProvider.strictMode(false);
        }
    ]);
