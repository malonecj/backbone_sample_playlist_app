(function() {
    PlaylistApp.module('Search', function(Search, App, Backbone, Marionette, $, _) {

        Search.on("start", function() {
                var controller = new Search.Controller();
        });
    });
})(this);
