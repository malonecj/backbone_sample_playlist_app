(function() {
    PlaylistApp.module('Search.Views', function (Views, App, Backbone, Marionette, $, _) {

        Views.ArtistItem = Backbone.Marionette.ItemView.extend({

             tagName : 'div',

             className : "col-xs-4 col-md-2",

             template : '#search-artist-item-tmpl',

             ui : {
                $artistImage : '.js-artist-img'
             },

             onRender : function(){
                var artistLookupKey = this.model.get('href');
                var embed = new App.Entities.ImageEmbed();
                embed.getImageDetails(artistLookupKey, this.showThumbnail.bind(this));
             },

             showThumbnail : function(embedDetails){
                var src = embedDetails.get('thumbnail_url').replace('cover', 300);;
                this.ui.$artistImage.prop('src', src);
             }

        });

        Views.ArtistList = Backbone.Marionette.CompositeView.extend({

             initialize : function(){
                this.listenTo(this.collection, 'reset', this.render);
             },

             itemView : Views.ArtistItem,

             template : '#search-artist-list-tmpl',

             itemViewContainer : 'div.row'

        });

    });
})(this);
