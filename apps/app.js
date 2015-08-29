$(document).ready(function(){
    
    $('#search-term').submit(function(event){
       
        var searchTerm = $('#query').val();
       
        getSearch(searchTerm);

        return false;
    })

});

var getSearch = function(searchTerm){

    var params = {
        part: "snippet",
        key: "AIzaSyB2Liu7Ya9A_nR5Lc33AboIPl18jVf-Svo",
        q: searchTerm
    }

    url = "https://www.googleapis.com/youtube/v3/search"; 

    $.get(url, params, function(data){
        console.log(data);
        for (prop in data.items) {
            img = data.items[prop].snippet.thumbnails.default.url;
            videoId = data.items[prop].id.videoId;
            href = "https://www.youtube.com/results?search_query=" + videoId;
           $('#search-results').append('<a href=" '+href+' "><img src=" ' + img + ' "></a>')
       }
    }, 'json')

}