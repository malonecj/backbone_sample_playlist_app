(function() {
    PlaylistApp.module('Entities', function (Entities, App, Backbone, Marionette, $, _) {

      Entities.ImageEmbed = Backbone.Model.extend({

          getImageDetails : function(apiLookup, onSuccess, onError){

              url = 'https://embed.spotify.com/oembed/?url=' + apiLookup + '&callback=?';

              $.getJSON(url, (function(result){
                //set the model attributes with the result
                this.set(result);
                if(_.isFunction(onSuccess)){
                    onSuccess(this);
                }
              }).bind(this));

          }

      });
    });
})(this);
