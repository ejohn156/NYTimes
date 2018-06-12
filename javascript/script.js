
$("#search").on("click",  function(){
    /*
    var term = $("#term").val();
    var numRec = $("#numRec").val();
    var startY = $("#startY").val();
    var endY = $("#endY").val();
    */
   var term = "trump";
    var numRec = "1";
    var startY = "20161105";
    var endY = "20171105";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q:" + term + "begin_date:" + startY +  "end_date:" + endY + "apiKey:304fa3fe81e44dc5a4950d7dddf66075=" +  numRec;

    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          console.log(response)
          });
    });


$("#clear").on("click", function(){

})