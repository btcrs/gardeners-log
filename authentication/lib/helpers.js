'use strict';

const createResponseData = (id) => {
  const authorizationToken = {
    payload: {
      id
    },
    options: {
      expiresIn: 15
    }
  };

  return { authorizationToken };
};

const redirectProxyCallback = (context, data) => {
  context.succeed({
    statusCode: 302,
    headers: {
      Location: data.url
    }
  });
};

exports = module.exports = {
  createResponseData,
  redirectProxyCallback
};
