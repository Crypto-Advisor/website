
// $.ajax({url: "/pages/splash.html", success: loadContent});
function unloadContent(){
  $("#main_container").html('');
}

function loadContent(result){
  unloadContent();
  $("main_container").html(result);
}

function changeSomeHtml(){
  loadContent("nah");
}
$("#search").click(changeSomeHtml);
