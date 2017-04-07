/*jshint esversion: 6 */
((app) => {

    /**
     * Initialize controller
     */
    app.controller('IndexController', ['$uiViewScroll', function IndexController($uiViewScroll) {
        let vm = this;
        vm._ = _

        vm.LeftNavButtons = [
            { icon: "contact_mail", description: "Contact", sectionId: "#contact" },
            { icon: "code", description: "My Work", sectionId: "#work" },
            { icon: "dashboard", description: "Blogs and Talks", sectionId: "#publications" },
            { icon: "thumb_up", description: "Things I Like", sectionId: "#mylikes" },

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

        vm.goTo = (_elemToFind) => $uiViewScroll($(_elemToFind));

    }]);


    /**
     * Do more stuff
     */



})(angular.module('app'));