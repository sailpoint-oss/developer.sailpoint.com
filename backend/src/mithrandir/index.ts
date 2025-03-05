// Create a DocumentClient that represents the query to add an item
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';
import crypto from 'crypto';
import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import { logger } from 'hono/logger'

const app = new Hono()

//DynamoDB Endpoint
const ENDPOINT_OVERRIDE = process.env.ENDPOINT_OVERRIDE;
let ddbClient = undefined;

if (ENDPOINT_OVERRIDE) {
  ddbClient = new DynamoDBClient({ endpoint: ENDPOINT_OVERRIDE });
} else {
  ddbClient = new DynamoDBClient({}); // Use default values for DynamoDB endpoint
  console.warn("No value for ENDPOINT_OVERRIDE provided for DynamoDB, using default");
}

const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE;

app.use(logger())

app.post('/uuid', (c) => c.json({ code: crypto.randomUUID() }))
app.post('/code/:code', (c) => c.text(`Processing token exchange for code: ${c.req.param('code')}`))
app.get('/code/:code', async (c) => c.json({message: `Here is the token`, code: `${c.req.param('code')}`}))

// export const authHandler: Handler = async (event, context) => {
//   const { http } = event.requestContext;
//   console.log('Method:', http.method);
//   console.log('Path:', http.path);

//   switch (http.method) {
//     case 'GET':
//       return await handleGet(event);
//     default:
//       return {
//         statusCode: 405,
//         body: JSON.stringify({ message: 'Method Not Allowed' }),
//       };
//   }
// }

// async function handleGet(event) {
//   console.log('Handling GET request');
//   const { http } = event.requestContext;

//   if (http.path === '/code') {
//     console.log(`path matches /code`);
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ code: crypto.randomUUID() }),
//     };
//   } else if (http.path.startsWith('/code/')) {
//     console.log(`path matches /code/{code}`);
//     const code = http.path.split('/').pop();
//     console.log(`code: ${code}`);
//     try {
//       const data = await ddbDocClient.send(new GetCommand({ TableName: tableName, Key: { code } }));
//       const item = data.Item;
//       return {
//         statusCode: 200,
//         body: JSON.stringify(item),
//       };
//     } catch (err) {
//       console.error("Error retrieving item:", err.message);
//       console.error("Error code:", err.code);
//       console.error("Error name:", err.name);
//       console.error("Error stack:", err.stack);

//       return {
//         statusCode: 404,
//         body: JSON.stringify({ message: 'Item not found' }),
//       };
//     }
//   } else {
//     return {
//       statusCode: 404,
//       body: JSON.stringify({ message: 'Requested Path Not Found' }),
//     };
//   }
// }

export const handler = handle(app)