// $.ajax({url: "/pages/splash.html", success: loadContent});
function unloadContent() {
  $("#main_container").html('');
}

function loadContent(result) {
  unloadContent();
  $("main_container").html(result);
}

function requestHomeContent() {
  $.ajax({
    url: "index.html",
    success: loadContent()
  });
}

function googleTrend(trend) {
  trends.embed.renderExploreWidget("TIMESERIES", {
    "comparisonItem": [{
      "keyword": trend,
      "geo": "US",
      "time": "today 12-m"
    }],
    "category": 0,
    "property": ""
  }, {
    "exploreQuery": "q=twitter&geo=US&date=today 12-m",
    "guestPath": "https://trends.google.com:443/trends/embed/"
  });
}

function searchTerm() {
  var searchBar = document.getElementById("searchValue");
  search = searchBar.value;
  googleTrend(search);
}

function changeSomeHtml() {
  loadContent("nah");
}

$("#search").click(searchTerm);

$("#homebutton").click(requestHomeContent());
$("#game").click(function() {
  $.ajax({
    url: "public/game.html",
    success: loadContent()
  });
})