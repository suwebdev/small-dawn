$(document).ready(function(){











    // The Poetry API business
    //Starting with an example from Edgar Allen Poe
    var poemAPI = "https://crossorigin.me/http://poetrydb.org/author,title/Poe;Dreams";
    $.getJSON( poemAPI, function(data){

        console.log(data);
        var author = data[0].author;
        console.log(data[0].title);
        var title = data[0].title;
        $(".author").append(author);
        $(".title").append(title);
        var newLineList = $("<li>");
        for(i = 0; i < data[0].linecount; i++){
            newLineList.append(data[0].lines[i]);
            newLineList.append($("<br>"));
        }
        newLineList.appendTo(".lines");
    })
})
