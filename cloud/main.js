
var messenger = require('messenger');
var client = messenger.createSpeaker(8800);

Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.job("myJob", function(request, status) {
  // the params passed through the start request
  var params = request.params;
  // Headers from the request that triggered the job
  var headers = request.headers;

  // get the parse-server logger
  var log = request.log;

  // Update the Job status message
  status.message("I just started");
});

Parse.Cloud.afterSave("scheduleList", function(request, response) {
  console.log( "processingState=" + request.object.get("processingState") );
  request.object.set("processingState", "active"); // why useless ???
  //console.log(request);
  //console.log(request.object);
  //console.log( "objectId=" + request.object.get("_id") );
  //console.log( "processingState=" + request.object.get("processingState") );

  console.log("wakeup");
  client.request('wakeup', {hello:'world'}, function(data){
    console.log(data);
    console.log("wakeup sent");
  });
  response.success();
});

Parse.Cloud.afterSave("eventList", function(request, response) {
  console.log( "command=" + request.object.get("command") );
  console.log( "processingState=" + request.object.get("processingState") );

  console.log("wakeup");
  client.request('wakeup', {hello:'world'}, function(data){
    console.log(data);
    console.log("wakeup sent");
  });
  response.success();
});
