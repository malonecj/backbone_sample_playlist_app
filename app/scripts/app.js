(function(w) {
    var PlaylistApp = new Marionette.Application();

    PlaylistApp.addRegions({
        searchBoxRegion: "#searchBoxRegion",
        sidebarRegion: "#sidebarRegion",
        mainRegion: "#mainRegion",
        footerRegion: '#footerRegion',
        loaderRegion: '#loaderRegion'
    });

    w.PlaylistApp = PlaylistApp;

})(window);
