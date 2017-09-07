/*jshint esversion: 6 */
((app) => {

     /**
      * Initialize controller
      */
     app.component('publication', {
       bindings: {
         title: '@',
         subtitle: '@',
         link: '@',
         description: '@',
         image: '@',
       },
       controllerAs: 'vm',
       controller: function() {
         let vm = this;
       },
       templateUrl: '/web/views/publications/publication.view.html'
     })

 })(angular.module('app'));