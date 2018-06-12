
$(document).ready(function () {
    $("#searchBtn").on("click", function (event) {
        event.preventDefault()
        
        var term = $("#search").val();
        var numRec = $("#numRecords").val();
        var startY = $("#startYear").val();
        var endY = $("#endYear").val();
        
        
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=304fa3fe81e44dc5a4950d7dddf66075&q=" + term + "&begin_date=" + startY + "&end_date=" + endY + "&page=" + numRec

        
        alert(queryURL)
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response)
            });
    });


    $("#clearResults").on("click", function () {

    })
});