'use strict';

exports.handler = (event, context, callback) => {
    // when intent get fulfilled, inform lex to complete the state
    let response = {sessionAttributes: event.sessionAttributes,
      dialogAction: {
        type: "Close",
        fulfillmentState: "Fulfilled",
        message: {
          contentType: "PlainText",
          content: "Thanks for purchasing book."
        }
      }
    }
    callback(null, response);
};