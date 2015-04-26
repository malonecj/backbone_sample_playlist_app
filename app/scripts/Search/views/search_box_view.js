(function() {
    PlaylistApp.module('Search.Views', function (Views, App, Backbone, Marionette, $, _) {

        Views.SearchBox = Backbone.Marionette.ItemView.extend({

             template : '#search-box-tmpl',

             ui : {
                $input : 'input[type=search]'
             },

             events : {
                "keyup input" : "keyPressEventHandler"
             },


             triggers : {
                'change input' : 'search:requested',
                'click a.btn' : 'search:requested'
             },

             keyPressEventHandler :function(event){
                if(event.keyCode == 13){
                    this.trigger('search:requested', {view : this});
                }
             }

        });

    });
})(this);
