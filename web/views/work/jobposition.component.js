/*jshint esversion: 6 */
((app) => {

     /**
      * Initialize controller
      */
     app.component('jobPosition', {
       bindings: {
         count: '=',
         companyName: '@',
         position: '@',
         description: '@',
         companyLogoUrl: '@', 
         link: '@'

       },
       controllerAs: 'vm',
       controller: function() {
         let vm = this;
       },
       templateUrl: '/web/views/work/jobposition.view.html'
     })

 })(angular.module('app'));