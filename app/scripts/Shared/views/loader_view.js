(function() {
    PlaylistApp.module('Shared.Views', function(Views, App, Backbone, Marionette, $, _) {

        Views.Loader = Marionette.ItemView.extend({

            template : '#loader-tmpl'
        });

    });
})(this);
