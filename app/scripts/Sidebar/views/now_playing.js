(function() {
    PlaylistApp.module('Sidebar.Views', function (Views, App, Backbone, Marionette, $, _) {

        Views.NowPlaying = Backbone.Marionette.ItemView.extend({

             template : '#now-playing-tmpl',

             ui :{
              image : 'img'
             },

             initialize : function(){
                this.listenTo(this.model, 'change', this.render, this);
             },

             onRender : function(){
              var album = this.model.get('album');
              if(album){
                var image = album.images[0];
                this.ui.image.prop('src',image.url);
              }
             }

        });



    });
})(this);
