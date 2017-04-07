/*jshint esversion: 6 */
((app) => {

    app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {

        //Default State
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('index', {
                url: '/',
                views: {
                    'contact': { templateUrl: '/web/views/contact/contact.view.html' },
                    'work': { templateUrl: '/web/views/work/work.view.html' },
                    'publications': { templateUrl: '/web/views/publications/publications.view.html' },
                    'mylikes': { templateUrl: '/web/views/mylikes/mylikes.view.html' }
                }
            });
    }]);



})(angular.module('app'));