(function() {
    PlaylistApp.module('Sidebar', function(Sidebar, App, Backbone, Marionette, $, _) {


        var controller;

        Sidebar.on('start', function(){
            controller = new Sidebar.Controller();
        });


    });
})(this);
