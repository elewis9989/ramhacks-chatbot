'use strict';

module.exports.hello = (event, context, callback) => {
  event.
  const response = {
    statusCode:200,
    body: JSON.stringify({ 
      message: "1.0",
    }),
  };
  callback(null,response);
}

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

