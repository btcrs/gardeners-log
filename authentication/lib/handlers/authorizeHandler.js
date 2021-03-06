'use strict';

const slsAuth = require('serverless-authentication');
const config = slsAuth.config;
const utils = slsAuth.utils;

const authorize = (event, callback) => {
  const stage = event.methodArn.split('/')[1] || 'dev'; // @todo better implementation
  let error = null;
  let policy;
  const authorizationToken = event.authorizationToken;
  if (authorizationToken) {
    try {
      // this example uses simple expiration time validation
      const providerConfig = config({ provider: '', stage });
      const data = utils.readToken(authorizationToken, providerConfig.token_secret);
      policy = utils.generatePolicy(data.id, 'Allow', event.methodArn);
    } catch (err) {
      error = 'Unauthorized';
    }
  } else {
    error = 'Unauthorized';
  }
  callback(error, policy);
};


exports = module.exports = authorize;
