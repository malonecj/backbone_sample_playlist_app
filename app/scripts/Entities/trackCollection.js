(function() {
    PlaylistApp.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {

        Entities.Track = Backbone.Model.extend({
            idAttribute : 'href'
        });

        Entities.TrackCollection = Backbone.Collection.extend({

            model: Entities.Track,

            root: 'http://ws.spotify.com/search/1/track.json?',

            search: function(query) {
                var url = this.root + 'q=' + query;
                var jqxhr = $.ajax(url)
                    .done(this.onTracksRetrieved.bind(this))
                    .fail(function() {
                        console.log('error');
                    })
            },

            onTracksRetrieved: function(response) {
                //reset the collection with the list of artists
                this.reset(response.tracks);
                //meta data about search query
                this.info = response.info;
            }
        })

    });
})(this);
