
// $.ajax({url: "/pages/splash.html", success: loadContent});
function unloadContent(){
  $("#main_container").html('');
}

function loadContent(result){
  unloadContent();
  $("main_container").html(result);
}

function googleTrend(trend){
  $("#main_container").html('<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2402_RC03/embed_loader.js"></script>');
  trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":trend,"geo":"US","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=twitter&geo=US&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"});
}
function searchTerm(){
  var search = document.getElementById("searchValue");
  googleTrend(search);
}

function changeSomeHtml(){
  loadContent("nah");
}

$("#search").click(searchTerm());
