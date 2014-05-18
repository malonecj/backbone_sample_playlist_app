(function() {
    PlaylistApp.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {

        Entities.ArtistCollection = Backbone.Collection.extend(

            _.extend({}, App.Shared.Mixins.Api, {

                model: Entities.Artist,

                apiObject: 'artist',

                search: function(searchText) {
                    this.apiSearch(searchText, this.apiObject, this.onArtistsRetrieved.bind(this));
                },

                onArtistsRetrieved: function(response) {
                    //reset the collection with the list of artists
                    this.reset(_.first(response.artists, 5));
                    //meta data about search query
                    this.info = response.info;
                }
            }));

    });
})(this);
