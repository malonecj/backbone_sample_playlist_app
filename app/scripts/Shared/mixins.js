(function() {
    PlaylistApp.module('Shared.Mixins', function(Mixins, App, Backbone, Marionette, $, _) {

        Mixins.Api = {

            searchUrlRoot: 'https://api.spotify.com/v1/search/',

            validateQuery: function(itemToQuery) {
                if (!(itemToQuery === 'artist' || itemToQuery === 'album' || itemToQuery === 'track')) {
                    return false;
                }else{
                  return true;
                }
            },

            apiSearch : function(searchText, itemToQuery, callback, options) {
                if(!this.validateQuery(itemToQuery)){
                  throw "Metadata API must query either an artist, album or track";
                }
                var url = this.searchUrlRoot + '?q=' + searchText + "&type=" + itemToQuery;
                var jqxhr = $.ajax(url)
                    .done(callback)
                    .fail(function() {
                        console.log('error searching for ' + searchText);
                    })
            },
        }

    });
})(this);
