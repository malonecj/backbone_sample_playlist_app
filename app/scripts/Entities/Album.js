(function() {
    PlaylistApp.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {

        Entities.AlbumCollection = Backbone.Collection.extend({

            model: Entities.Artist,

            apiObject: 'artist',

            filterValidAlbumsByTerritory: function(territory) {
                return this.filter(function(album) {
                    return album.get('availability').terretories.indexOf(territory) > -1;
                });
            }
        })

    });
})(this);
