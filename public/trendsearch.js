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
function requestJsonContent(){
  $.ajax({
    url: "jsonTest.html",
    success: loadContent()
  });
}

function googleTrend(trend, time = "today 12-m") {
  //we want to render the widget inside the main_container div, so we use renderExploreWidgetTo.
  var main_container = document.getElementById("main_container");
  unloadContent();
  trends.embed.renderExploreWidgetTo(main_container, "TIMESERIES", {
    "comparisonItem": [{
      "keyword": trend,
      "geo": "US",
      "time": time
    }],
    "category": 0,
    "property": ""
  }, {
    "exploreQuery": "q=twitter&geo=US&date=" + time,
    "guestPath": "https://trends.google.com:443/trends/embed/"
  });
}

function searchTerm(input) {
  var searchBar = document.getElementById("searchValue");
  search = searchBar.value;
  var time;
  if (!input.data) {
    time = "today 12-m";
  } else {
    time = input.data.time;
  }
  googleTrend(search, time);
}

function changeSomeHtml() {
  loadContent("nah");
}

$("#search").click(searchTerm);

$("#homebutton").click(requestHomeContent());

$("#json_test").click(requestJsonContent());

$("#90days").click({
  time: "today 3-m"
}, searchTerm);

$("#12months").click({
  time: "today 12-m"
}, searchTerm);

$("#5years").click({
  time: "today 5-y"
}, searchTerm);

$("#game").click(requestGameContent);

function openGame(){
  $("#game").click(requestGameContent);
}
function requestGameContent(){
  $.ajax({url: "game.html", success: loadGameContent});
}
function loadGameContent(result){
  $("#game_content").html(result);
}
function loadTwitterRss(result){
  result = xmlToJson(result);
  $("#twitter_rss").html(result);
}
function requestTwitterRss(){
  $.ajax({
    dataType: "xml",
    url: "https://twitrss.me/twitter_search_to_rss/?term=purple+mattress",
    success: loadTwitterRss

  });
}
