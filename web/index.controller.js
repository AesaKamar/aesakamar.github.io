/*jshint esversion: 6 */
((app) => {

    /**
     * Initialize controller
     */
    app.controller('IndexController', [function IndexController() {
        let vm = this;

        vm.LeftNavButtons = [
            { icon: "contact_mail", description: "Contact" },
            { icon: "code", description: "My Work" },
            { icon: "dashboard", description: "Blogs and Talks" },
            { icon: "thumb_up", description: "Things I Like" },

        ];

        vm.Tiles = [{
                title: "Woah",
                span: {
                    row: 5,
                    col: 5
                }
            },
            {}
        ]

    }]);


    /**
     * Do more stuff
     */



})(angular.module('app'));