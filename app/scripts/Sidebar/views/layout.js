(function() {
    PlaylistApp.module('Sidebar.Views', function (Views, App, Backbone, Marionette, $, _) {

        Views.Layout = Backbone.Marionette.Layout.extend({

             template : '#sidebar-tmpl',

             regions : {
                nowPlayingRegion : '#nowPlayingRegion'
             }

        });



    });
})(this);
