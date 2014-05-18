(function() {
    PlaylistApp.module('Search.Views', function(Views, App, Backbone, Marionette, $, _) {

        Views.TrackItem = Backbone.Marionette.ItemView.extend({

            initialize : function(options){

            },

            tagName: 'tr',

            template: '#track-item-tmpl'

        });

        Views.TrackList = Backbone.Marionette.CompositeView.extend({

            initialize: function() {
                this.listenTo(this.collection, 'reset', this.render);
            },

            ui :{
                $albumImage : 'img'
            },

            itemView: Views.TrackItem,

            template: '#track-list-tmpl',

            itemViewContainer: 'tbody',

            onRender : function(){
                var artistLookupKey = this.model.get('href')
                var embed = new App.Entities.ImageEmbed();
                embed.getImageDetails(artistLookupKey, this.showThumbnail.bind(this));
             },

             showThumbnail : function(embedDetails){
                var src = embedDetails.get('thumbnail_url').replace('cover', 120);;
                this.ui.$albumImage.prop('src', src);
             }


        });

        Views.AlbumList = Backbone.Marionette.CompositeView.extend({

            template : '#track-container-tmpl',

            itemView : Views.TrackList,

            buildItemView: function(album, ItemViewType, itemViewOptions) {
                // build the final list of options for the item view type
                var options = _.extend({model : album, collection: album.get('trackList')}, itemViewOptions);
                // create the item view instance, which in this case is Views.TrackList
                var view = new ItemViewType(options);
                // return it
                return view;
            }
        });

        //Handlebars helpers
        Handlebars.registerHelper('songLength', function(time){
            var minutes = Math.floor(time / 60);
            var seconds = Math.round(time % 60);
            if(seconds < 10){
                seconds = "0" + seconds;
            }
            return minutes + ':' + seconds;
        });

    });
})(this);
