(function() {
    PlaylistApp.module('Search.Views', function (Views, App, Backbone, Marionette, $, _) {

        Views.SearchBox = Backbone.Marionette.ItemView.extend({

             template : '#search-box-tmpl',

             ui : {
                $input : 'input[type=search]'
             },

             triggers : {
                'change input[type=search]' : 'search:requested'
             }

        });

    });
})(this);
