(function() {
    PlaylistApp.module('Search', function (Search, App, Backbone, Marionette, $, _) {
        // can start with: App.Example.start()


        Search.Controller = Marionette.Controller.extend({

             initialize : function  (options) {

                var searchResults = new App.Entities.SearchResultsCollection();

                var searchBox = this.showSearchBox();
                var searchList = this.showSearchList({collection : searchResults});

                this.listenTo(searchBox, 'search:requested',function(ev){
                    var query = ev.view.ui.$input.val();
                    searchResults.search(query);
                });
             },

             showSearchBox : function (argument) {
                var searchBox = new Search.Views.SearchBox();
                var region = App.getRegion('searchBoxRegion');
                region.show(searchBox);
                return searchBox;
             },

            showSearchList : function (argument) {
                var searchList = new Search.Views.SearchList();
                var region = App.getRegion('searchListRegion');
                region.show(searchList);
                return searchList;
             }
        });


    });
})(this);
