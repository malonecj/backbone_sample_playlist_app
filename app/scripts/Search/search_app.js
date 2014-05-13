(function() {
    PlaylistApp.module('Search', function (Search, App, Backbone, Marionette, $, _) {
        // can start with: App.Example.start()
        var controller;
        Search.Router = Backbone.Marionette.AppRouter.extend({
             appRoutes: {
                 "search(/)": "show"
             }
        });

        // every route should have an associated handler, that reference
        // the same api call
        var API = {
            show: function (options) {

            }
        };

        // if you want the routes available when the app starts,
        // it has to load in with the app on initialize
        App.addInitializer(function () {
            new Search.Router({
                 controller: API
             });
        });

        Search.on("before:start", function(){
          // do stuff before the module is started
        });

        Search.on("start", function(){
          controller = new Search.Controller()
        });
    });
})(this);
