exports.authHandler = async (event) => {
  console.log('Event:', event);
  console.log('Headers:', event.headers);
  console.log('Method:', event.httpMethod);
  console.log('Path:', event.path);
  
  switch(event.httpMethod) {
    case 'GET':
      return handleGet(event);
    default:
      return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Method Not Allowed' }),
      };
  }
}

function handleGet(event){
  console.log('Handling GET request');
  const { path } = event;
  console.log('Path:', path);
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'GET request handled successfully' }),
  }
}
