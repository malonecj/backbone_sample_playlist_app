(function() {
    PlaylistApp.module('Search', function(Search, App, Backbone, Marionette, $, _) {

        var layout;

        Search.Controller = Marionette.Controller.extend({

            initialize: function(options) {
                this.countryCode = options.countryCode;
                this.layout = new Search.Views.SearchLayout();
                App.mainRegion.show(this.layout);
                var artistResults = new App.Entities.ArtistCollection();
                var trackSearchResults = new App.Entities.TrackCollection();
                var searchBox = this.showSearchBox();

                this.listenTo(searchBox, 'search:requested', function(ev) {
                    var loader = new App.Shared.Views.Loader()
                    this.layout.artistListRegion.show(loader);
                    var query = ev.view.ui.$input.val();
                    artistResults.search(query);
                    trackSearchResults.search(query)
                }, this);

                this.listenTo(artistResults, 'reset', function(artists) {
                    if (artists.length > 0) {
                        this.showArtistSearchResults(artists);
                    } else {
                        this.layout.artistListRegion.close();
                    }
                }, this);

                this.listenTo(trackSearchResults, 'reset', function(tracks) {
                    var validTracks = tracks.getValidTracksByTerritory(this.countryCode);
                    if (validTracks.length > 0) {
                        this.showTrackSearchResults(validTracks);
                    } else {
                        this.layout.trackListRegion.close();
                    }
                }, this);

            },

            showSearchBox: function(argument) {
                var searchBox = new Search.Views.SearchBox();
                var region = App.getRegion('searchBoxRegion');
                region.show(searchBox);
                return searchBox;
            },

            showArtistSearchResults: function(artists) {
                var searchList = new Search.Views.ArtistList({
                    collection: artists
                });
                this.layout.artistListRegion.show(searchList);
            },

            showTrackSearchResults: function(tracks) {
                //need to group tracks parameter by album name
                var groupedAlbumTracks = tracks.groupBy(function(t) {
                    return t.get('album').href;
                });
                //create a new collection to store album details as well as a list of album tracks
                var albumCollection = new App.Entities.AlbumCollection();
                //loop through each group result, and add album details to albumCollection
                _.each(groupedAlbumTracks, function(trackList) {
                    var album = trackList[0].get('album');
                    var orderedTracks = trackList.sort(function(t1, t2){ return t1.get('track-number') - t2.get('track-number'); })
                    album.trackList = new Backbone.Collection(orderedTracks);
                    //turn this album object into backbone model and add to album collection
                    var albumModel = new Backbone.Model(album);
                    albumCollection.add(albumModel);
                });
                var searchList = new Search.Views.AlbumList({collection: albumCollection});
                this.layout.trackListRegion.show(searchList);
            },





        });



    });
})(this);
