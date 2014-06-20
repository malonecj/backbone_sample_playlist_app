(function() {
    PlaylistApp.module('Display.Views', function(Views, App, Backbone, Marionette, $, _) {

        Views.AlbumList = Backbone.Marionette.CompositeView.extend({

            template : '#album-container-tmpl',

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

    });
})(this);
