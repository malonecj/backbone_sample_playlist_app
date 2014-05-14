(function() {
    PlaylistApp.module('Entities', function (Entities, App, Backbone, Marionette, $, _) {

      Entities.ArtistCollection = Backbone.Collection.extend({

          model : Entities.Artist,

          root : 'http://ws.spotify.com/search/1/artist.json?',

          search : function (query) {
            var url = this.root + 'q=' + query;
            var jqxhr = $.ajax(url)
            .done(this.onArtistsRetrieved.bind(this))
            .fail(function() {
              console.log('error');
            })
          },

          onArtistsRetrieved : function (response){
              //reset the collection with the list of artists
              this.reset(response.artists);
              //meta data about search query
              this.info = response.info;
          }
      })

    });
})(this);
