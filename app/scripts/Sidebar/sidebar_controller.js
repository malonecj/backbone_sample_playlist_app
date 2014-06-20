(function() {
    PlaylistApp.module('Sidebar', function(Sidebar, App, Backbone, Marionette, $, _) {

        Sidebar.Controller = Marionette.Controller.extend({

            initialize: function(options) {
                this.layout = new Sidebar.Views.Layout();
                App.sidebarRegion.show(this.layout);
                this.currentTrack = new App.Entities.Track();
                var nowPlayingView = new Sidebar.Views.NowPlaying({model : this.currentTrack});
                this.layout.nowPlayingRegion.show(nowPlayingView);
                this.loadInitialTrack();
            },

            loadInitialTrack : function(){
              this.currentTrack.lookup('0eGsygTp906u18L0Oimnem');
            }

        });



    });
})(this);
