(function() {
    PlaylistApp.module('Search.Views', function (Views, App, Backbone, Marionette, $, _) {

        Views.SearchLayout = Backbone.Marionette.Layout.extend({


             template : '#search-layout-tmpl',

             regions : {
                artistListRegion : '#artistListRegion',
                trackListRegion : '#trackListRegion'
             }



        });



    });
})(this);
