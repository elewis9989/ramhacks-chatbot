'use strict';

exports.handler = (event, context, callback) => {
    // when intent get fulfilled, inform lex to complete the state
    var purchase = event.currentIntent.name;
    let response = {sessionAttributes: event.sessionAttributes,
      dialogAction: {
        type: "Close",
        fulfillmentState: "Fulfilled",
        message: {
          contentType: "PlainText",
          content: purchase
        }
      }
    }
    callback(null, response);
};

