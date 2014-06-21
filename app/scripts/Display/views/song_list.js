(function() {
    PlaylistApp.module('Display.Views', function(Views, App, Backbone, Marionette, $, _) {

        Views.TrackItem = Backbone.Marionette.ItemView.extend({

            initialize : function(options){

            },

            tagName: 'tr',

            className : 'clickable',

            template: '#track-item-tmpl'

        });



     Views.TrackList = Backbone.Marionette.CompositeView.extend({

            ui :{
                $albumImage : 'img'
            },

            itemView: Views.TrackItem,

            template: '#track-list-tmpl',

            itemViewContainer: 'tbody',

            onRender : function(){
                //find appropriate image for this artist model
                var images = this.model.get('images');
                var thumbnail = _.last(_.sortBy(images, 'width'));
                this.showThumbnail(thumbnail);
             },

             showThumbnail : function(thumbnail){
                this.ui.$albumImage.prop('src', thumbnail.url);
             }

        });

        //Handlebars helpers
        Handlebars.registerHelper('songLength', function(time){
            time = time/1000;
            var minutes = Math.floor(time / 60);
            var seconds = Math.round(time % 60);
            if(seconds < 10){
                seconds = "0" + seconds;
            }
            return minutes + ':' + seconds;
        });

        Handlebars.registerHelper('getArtistName', function(artists){
            if(artists && artists.length > 0){
                return artists[0].name
            }
        });



    });
})(this);
