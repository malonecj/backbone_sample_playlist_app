/*global BackboneApp2, $*/


var PlaylistApp = new Marionette.Application();

PlaylistApp.addRegions({
  headerRegion: "#header-region",
  searchBoxRegion: "#searchBoxRegion",
  dialogRegion: Marionette.Region.Dialog.extend({
    el: "#dialog-region"
  })
});

PlaylistApp.navigate = function(route,  options){
  options || (options = {});
  Backbone.history.navigate(route, options);
};

PlaylistApp.getCurrentRoute = function(){
  return Backbone.history.fragment
};

PlaylistApp.on("initialize:after", function(){
  if(Backbone.history){
    Backbone.history.start();

  }
});
