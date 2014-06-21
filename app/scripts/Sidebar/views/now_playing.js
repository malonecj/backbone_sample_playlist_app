(function() {
    PlaylistApp.module('Sidebar.Views', function (Views, App, Backbone, Marionette, $, _) {

        Views.NowPlaying = Backbone.Marionette.ItemView.extend({

             template : '#now-playing-tmpl',

             ui :{
              image : 'img',
              musicSource : 'source'
             },


             initialize : function(){
                this.listenTo(this.model, 'change', this.render, this);
             },

             onRender : function(){
                this.loadAlbumImage();
                this.loadTrackPreview();
              },

              loadAlbumImage : function(){
                var album = this.model.get('album');
                if(album){
                  var image = album.images[0];
                  this.ui.image.prop('src',image.url);
                }
              },

              loadTrackPreview : function(){
                  var previewUrl = this.model.get('preview_url');
                  this.ui.musicSource.prop('src', previewUrl);
              }

        });



    });
})(this);
