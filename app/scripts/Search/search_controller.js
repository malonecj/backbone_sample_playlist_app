(function() {
    PlaylistApp.module('Search', function(Search, App, Backbone, Marionette, $, _) {

        Search.Controller = Marionette.Controller.extend({

            initialize: function(options) {
                var searchBox = this.showSearchBox();

                var defaultArtist = 'Alabama Shakes';
                this.searchForItems(defaultArtist, this.onSearchComplete.bind(this));

                this.listenTo(searchBox, 'search:requested', function(ev) {

                    var query = ev.view.ui.$input.val();
                    this.searchForItems(query, this.onSearchComplete.bind(this));
                    return false;
                }, this);

            },

            showSearchBox: function() {
                var searchBox = new Search.Views.SearchBox();
                App.searchBoxRegion.show(searchBox);
                return searchBox;
            },

            searchForItems : function(query, callback){
                this.displayLoader();
                var url = 'https://api.spotify.com/v1/search/?q=' + query + '&type=artist,album,track'
                var jqxhr = $.ajax(url)
                    .done(callback)
                    .fail(function() {
                        console.log('error searching for ' + searchText);
                    })
            },

            onSearchComplete : function(results){
                this.hideLoader();
                App.vent.trigger('search:complete', results);
            },

            displayLoader:function(){
                var loader = new App.Shared.Views.Loader();
                 App.loaderRegion.show(loader);
            },

            hideLoader:function(){
                App.loaderRegion.close();
            }

        });



    });
})(this);
