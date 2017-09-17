'use strict';
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

module.exports.hello = (event, context, callback) => {
  //AWS.config.region = 'us-east-1';

  try{
      const response = {
        statusCode: 200,
        body: JSON.stringify({message: "1.20"}),
      }
    var params = {
    botAlias: 'dev', /* required */
    botName: 'TestBot', /* required */
    inputText: 'Admissions what do i need', /* required */
    userId: 'USER', /* required */
    sessionAttributes: {
      }
    };
    returned = lexruntime.postText(params, function(err, data) {
      if (err) {
        //console.log(err, err.stack);
      }  // an error occurred
      else{

      }                // successful response
    });
    response[body] = JSON.stringify(returned);
    callback(null,response);
  }
  catch (err) {
    callback(null, err);
  }  
}
  //callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });


