/*jshint esversion: 6 */
((app) => {

     /**
      * Initialize controller
      */
     app.component('jobPosition', {
	   bindings: {
		   count: '=',
		   companyName: "@",
		   position: "@",
		   description: "@",
		   companyLogoUrl: '@'

		},
       controllerAs: 'vm',
       controller: function() {
		 let vm = this ;
		 function increment() {
           this.count++;
         } function decrement() {
           this.count--;
         } this.increment = increment;
         this.decrement = decrement;
       },
       templateUrl: '/web/views/work/jobposition.view.html'
     })

 })(angular.module('app'));