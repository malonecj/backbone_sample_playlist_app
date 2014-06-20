(function() {
    PlaylistApp.module('Display.Views', function (Views, App, Backbone, Marionette, $, _) {

        Views.Layout = Backbone.Marionette.Layout.extend({

             template : '#display-layout-tmpl',

             regions : {
                artistListRegion : '#artistListRegion',
                trackListRegion : '#trackListRegion'
             }

        });



    });
})(this);
