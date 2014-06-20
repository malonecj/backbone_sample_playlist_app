(function(w) {
    var PlaylistApp = new Marionette.Application();

    PlaylistApp.addRegions({
        searchBoxRegion: "#searchBoxRegion",
        sidebarRegion: "#sidebarRegion",
        mainRegion: "#mainRegion",
        footerRegion: '#footerRegion'
    });

    w.PlaylistApp = PlaylistApp;

})(window);
