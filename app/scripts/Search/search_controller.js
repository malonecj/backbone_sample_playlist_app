(function() {
    PlaylistApp.module('Search', function(Search, App, Backbone, Marionette, $, _) {

        Search.Controller = Marionette.Controller.extend({

            initialize: function(options) {
                var searchBox = this.showSearchBox();

                this.listenTo(searchBox, 'search:requested', function(ev) {
                    var query = ev.view.ui.$input.val();
                    this.searchForItems(query, function(results){
                        App.vent.trigger('search:complete', results);
                    });
                }, this);

            },

            showSearchBox: function() {
                var searchBox = new Search.Views.SearchBox();
                App.searchBoxRegion.show(searchBox);
                return searchBox;
            },

            searchForItems : function(query, callback){
                var url = 'https://api.spotify.com/v1/search/?q=' + query + '&type=artist,album,track'
                var jqxhr = $.ajax(url)
                    .done(callback)
                    .fail(function() {
                        console.log('error searching for ' + searchText);
                    })
            }

        });



    });
})(this);
