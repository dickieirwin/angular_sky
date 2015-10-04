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
                    url: '/users',
                    templateUrl: 'views/users.html',
                    controller: 'UsersCtrl',
                    data: 'users_example.json'
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
