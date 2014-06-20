(function() {
    PlaylistApp.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {

        Entities.Track = Backbone.Model.extend({

            idAttribute: 'href',

            url : 'https://api.spotify.com/v1/tracks/',

            lookup : function(id){
                this.url += id;
                var jqxhr = $.ajax(this.url)
                    .done(this.onTrackFound.bind(this))
                    .fail(function() {
                        console.log('error searching for ' + searchText);
                    })
            },

            onTrackFound : function(t){
                this.set(t);
            }
        });

        Entities.TrackCollection = Backbone.Collection.extend({

            getValidTracksByTerritory: function(countryCode) {
                //this.set(this.filter(function(t) {
                  //  return t.get('album').availability.territories.indexOf(countryCode) > -1;
                //}));
                return this;
            }

        });
    });
})(this);
