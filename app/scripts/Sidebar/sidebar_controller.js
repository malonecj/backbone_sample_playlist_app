(function() {
    PlaylistApp.module('Sidebar', function(Sidebar, App, Backbone, Marionette, $, _) {

        Sidebar.Controller = Marionette.Controller.extend({

            initialize: function(options) {
                this.layout = new Sidebar.Views.Layout();
                App.sidebarRegion.show(this.layout);
                this.currentTrack = new App.Entities.Track();
                this.trackPlayer = new Sidebar.Views.TrackPlayer({model : this.currentTrack});
                this.layout.nowPlayingRegion.show(this.trackPlayer);
                this.loadInitialTrack();
                this.delegateEvents();
            },

            delegateEvents : function(){
              this.listenTo(App.vent, "track:selected", this.playTrack, this);
            },

            loadInitialTrack : function(){
              this.currentTrack.lookup('1gGY6qfslDtJ4OoWQGKtkE');
            },


            playTrack : function(track){
              var t = track.toJSON();
              this.currentTrack.set(t);
              this.trackPlayer.play();
            }

        });



    });
})(this);
