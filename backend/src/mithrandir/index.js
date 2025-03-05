const crypto = require("crypto") 

exports.authHandler = async (event) => {
  const { http } = event.requestContext
  console.log('Method:', http.method);
  console.log('Path:', http.path);

  switch (http.method) {
    case 'GET':
      return handleGet(event);
    default:
      return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Method Not Allowed' }),
      };
  }
}

function handleGet(event) {
  console.log('Handling GET request');
  const { http } = event.requestContext

  if (http.path === '/code') {
    console.log(`path matches /code`)
    return {
      statusCode: 200,
      body: JSON.stringify({ code: crypto.randomUUID() }),
    }
  } else if (http.path.startsWith('/code/')) {
    console.log(`path matches /code/{code}`)
  }
  else {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Requested Path Not Found' }),
    }
  }
}
