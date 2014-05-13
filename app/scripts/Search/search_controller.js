(function() {
    App.module('Search', function (Search, App, Backbone, Marionette, $, _) {
        // can start with: App.Example.start()


        Search.Controller = {

             initialize : function  (options) {
                var searchBox = new Search.Views.SearchBox();
                var region = App.getRegion('searchBoxRegion');
                region.show(searchBox);
             }
        );


    });
})(this);
