(function() {
    PlaylistApp.module('Entities', function (Entities, App, Backbone, Marionette, $, _) {


      Entities.Artist = Backbone.Model.extend({

          idAttribute : 'href'

      })

    });
})(this);
