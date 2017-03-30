'use strict';

const Promise = require('bluebird');
const dynamoUser = require('./dynamoUser');

const saveDatabase = profile => new Promise((resolve, reject) => {
  if (profile) {
    dynamoUser.saveUser(profile)
      .then(resolve)
      .catch(reject);
  } else {
    reject('Invalid profile');
  }
});


const saveUser = (profile) => {
  return saveDatabase(profile);
  return true;
};

exports = module.exports = {
  saveUser
};
