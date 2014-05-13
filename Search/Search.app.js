(function() {
    App.module('Search', function (Search, App, Backbone, Marionette, $, _) {
        // can start with: App.Example.start()
        this.startWithParent = false;

        Search.Router = Backbone.Marionette.AppRouter.extend({
             appRoutes: {
                 "search(/)": "show"
             }
        });

        // every route should have an associated handler, that reference
        // the same api call
        var API = {
            show: function (options) {
                new Search.Base.Controller({
                    region: App.getRegion('mainContent')
                });
            }
        };

        // if you want the routes available when the app starts,
        // it has to load in with the app on initialize
        App.addInitializer(function () {
            new Search.Router({
                 controller: API
             });

            // pass data between routes without storing in the URL
            App.commands.setHandler('Search:base:show', function(options) {
                API.form(options);
            });
        });

        Search.on("before:start", function(){
          // do stuff before the module is started
        });
        
        Search.on("start", function(){
          // do stuff after the module has been started
        });
    });
})(this);