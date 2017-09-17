'use strict';
var AWS = require('aws-sdk');
var lexruntime = new AWS.LexRuntime();
var params = {
  botAlias: '$LATEST', /* required */
  botName: 'TestBot', /* required */
  inputText: 'Admissions requirements', /* required */
  userId: 'USER', /* required */
  sessionAttributes: {
  }
};
var returned = lexruntime.postText(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else {
    console.log(data);
    console.log(typeof(data));
  }               // successful response
});


module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode:200,
    body: JSON.stringify({ 
      message: "1.0" + JSON.stringify(returned),
    }),
  };
  callback(null,response);
}
/*
exports.handler = (event, context, callback) => {
    // when intent get fulfilled, inform lex to complete the state
    var purchase = event.currentIntent.name;
    var answer = "hi";
    if (purchase=='Questionone'){
      answer = 'hi1'
    }
    else if (purchase=='Questiontwo'){
      answer = 'hi2'
    }    
    let response = {sessionAttributes: event.sessionAttributes,
      dialogAction: {
        type: "Close",
        fulfillmentState: "Fulfilled",
        message: {
          contentType: "PlainText",
          content: answer
        }
      }
    }
    callback(null, response);
};
*/
