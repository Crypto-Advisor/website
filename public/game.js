alert("Game Content Loaded");

$('#remove_game').click(function(){
  $('#game_content').html('');
})

function unloadContent(){
  $("#main_container").html('');
}

function loadContent(result){
  unloadContent();
  $("main_container").html(result);
}
