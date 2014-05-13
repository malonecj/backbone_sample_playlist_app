(function() {
    PlaylistApp.module('Search.Views', function (Views, App, Backbone, Marionette, $, _) {
        // can start with: App.Example.start()


        Views.SearchList = Backbone.Marionette.CompositeView.extend({

             template : '#search-list-tmpl'

        });

    });
})(this);
