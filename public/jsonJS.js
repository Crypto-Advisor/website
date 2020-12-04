function requestData(){
  $.ajax({
    dataType: "json",
    url: "https://firebasestorage.googleapis.com/v0/b/fakenews-32575.appspot.com/o/blogArticles.json?alt=media&token=d4c4ae05-91ac-4560-a628-cb1b49896d18",
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
