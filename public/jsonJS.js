function requestData(){
  $.ajax({
    dataType: "json",
    url: "blogArticles.json",
    success: loadBlogArticlesJsonToHTML
  });
}

function loadBlogArticlesJsonToHTML(input){
  var myString = "";
  for (var i = 0; i < input.length; i++){
    var nextInput = input[i];

    myString += "<h2>" + nextInput['headline'] + "</h2>";
  }
  $("#json").html(myString);
}

$("#activate_json").click(requestData());
