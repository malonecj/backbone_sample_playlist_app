(function() {
    PlaylistApp.module('Display', function(Display, App, Backbone, Marionette, $, _) {

        var controller;

        Display.on('start', function(){
            controller = new Display.Controller();
        });

        App.vent.on('search:complete', function(searchResults){
            if(searchResults.artists){
                var artistsWithImages = _.filter(searchResults.artists.items, function(a){ return a.images.length > 0});
                var artists = new Backbone.Collection(artistsWithImages);
                controller.displayArtists(artists);
            }
            if(searchResults.tracks){
                var tracks = new App.Entities.TrackCollection(searchResults.tracks.items);
                controller.displayTracks(tracks);
            }
        });


    });
})(this);
