const twitterInput = $("#twitter_input");
const latestTwitterName = $("#latest_name");
const voteOnTwitter = $("#vote_twitter");
const twitterOutput = $("#twitter_output");

var firestore = firebase.firestore();
const databaseDocumentRef = firestore.doc("twitterNames/latestTwitterName");



function nameSuccess() {
  console.log("Name saved!");
}

function generalErrorHandler(errer) {
    console.log("Got an error", error);
};

function submitTwitterName() {
    console.log('submitting twitter name: ' + twitterInput.val());
    databaseDocumentRef.set(
      {
          latestName : twitterInput.val()
      }
    ).then(nameSuccess).catch(generalErrorHandler);
}



voteOnTwitter.click(submitTwitterName);


function getTwitterName(doc){
  if(doc && doc.exists){
    var myData = doc.data();
    console.log(myData);
    twitterOutput.html(myData.latestName);
  }
}

function getLatestName(){
  databaseDocumentRef.get().then(getTwitterName).catch(generalErrorHandler);
}

latestTwitterName.click(getLatestName);

function getRealTimeUpdate(){
  databaseDocumentRef.onSnapshot(getTwitterName);
}

getRealTimeUpdate();
