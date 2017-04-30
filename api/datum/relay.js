'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
var http = require('http');
var request = require('request');

module.exports.relay = (event, context, callback) => {
  const data = event.body;
  try {
      const data = JSON.parse(event.body);
  } catch (e) {console.log("Already JSON")}

  request({
    method: 'POST',
    url: 'http://www.vicsgarden.duckdns.org:5000',
    headers: {'content-type' : 'application/json'},
    json: data 
  }, (error, response, body) => {
      if(error){
        callback(new Error('Couldn\'t create the data entry.'));
      } else {
          const response = {
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin" : "*"
            },
            body: body,
          };
          callback(null, response);
        }
    });
};
