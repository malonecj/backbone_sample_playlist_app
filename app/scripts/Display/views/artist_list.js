(function() {
    PlaylistApp.module('Display.Views', function (Views, App, Backbone, Marionette, $, _) {

        Views.ArtistItem = Backbone.Marionette.ItemView.extend({

             tagName : 'div',

             className : "col-xs-4 col-md-2",

             template : '#search-artist-item-tmpl',

             ui : {
                $artistImage : '.js-artist-img'
             },

             onRender : function(){
                //find appropriate image for this artist model
                var images = this.model.get('images');
                var thumbnail = _.last(_.sortBy(images, 'width'));
                this.showThumbnail(thumbnail);
             },

             showThumbnail : function(thumbnail){
                this.ui.$artistImage.prop('src', thumbnail.url);
             }

        });

        Views.ArtistList = Backbone.Marionette.CompositeView.extend({

             itemView : Views.ArtistItem,

             template : '#search-artist-list-tmpl',

             itemViewContainer : 'div.row'

        });

    });
})(this);
