(function() {
    PlaylistApp.module('Display', function(Display, App, Backbone, Marionette, $, _) {

        Display.Controller = Marionette.Controller.extend({

            initialize: function(options) {
                this.layout = new Display.Views.Layout();
                App.mainRegion.show(this.layout);
            },

            displayArtists: function(artists) {
                if (artists.length > 0) {
                    var artistList = new Display.Views.ArtistList({
                        collection: artists
                    });
                    this.layout.artistListRegion.show(artistList);
                } else {
                    this.layout.artistListRegion.close();
                }
            },

            displayTracks: function(validTracks) {
                //var validTracks = tracks.getValidTracksByTerritory('GB');
                if (validTracks.length > 0) {
                    this.displayValidTracks(validTracks);
                } else {
                    this.layout.trackListRegion.close();
                }
            },

            displayValidTracks: function(tracks) {
                //need to group tracks parameter by album name
                var groupedAlbumTracks = tracks.groupBy(function(t) {
                    return t.get('album').href;
                });
                //create a new collection to store album details as well as a list of album tracks
                var albumCollection = new App.Entities.AlbumCollection();
                //loop through each group result, and add album details to albumCollection
                _.each(groupedAlbumTracks, function(trackList) {
                    var album = trackList[0].get('album');
                    var orderedTracks = trackList.sort(function(t1, t2) {
                        return t1.get('track_number') - t2.get('track_number');
                    })
                    album.trackList = new Backbone.Collection(orderedTracks);
                    //turn this album object into backbone model and add to album collection
                    var albumModel = new Backbone.Model(album);
                    albumCollection.add(albumModel);
                });
                var searchList = new Display.Views.AlbumList({
                    collection: albumCollection
                });
                this.layout.trackListRegion.show(searchList);
            },

        });



    });
})(this);
