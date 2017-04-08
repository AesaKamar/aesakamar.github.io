/*jshint esversion: 6 */
(() => {

    /**
     * Initialize angular app
     */
    let app = angular.module(
        'app', ['ngMaterial', 'ui.router']
    );

    /**
     * Do more stuff
     */
    //Setup Lodash globally
    app.constant('_', window._)
        .run(['$rootScope', ($rootScope) => $rootScope._ = window._]);



})();