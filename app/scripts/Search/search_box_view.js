(function() {
    PlaylistApp.module('Search.Views', function (Views, App, Backbone, Marionette, $, _) {
        // can start with: App.Example.start()


        Views.SearchBox = Backbone.Marionette.ItemView.extend({

             template : '#search-box-tmpl',

             triggers : {
                'change input[type=search]' : 'query:request'
             }

        });

    });
})(this);
