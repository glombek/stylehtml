var StyleLoader = {
    load: function(url) {
        $("#StyleLoader").attr("href", url);
        return false;
    },
    clear: function() {
        this.load("");
    }
};