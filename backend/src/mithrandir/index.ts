// Create a DocumentClient that represents the query to add an item
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import crypto from 'crypto';
import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import { logger } from 'hono/logger'
import { HTTPException } from 'hono/http-exception'

const app = new Hono()

function generateRandomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function getTenantInfo(apiUrl: string) {
  try {

    const authInfo = await fetch(apiUrl + `/oauth/info`)
    if (!authInfo.ok) {
      throw new HTTPException(400, { "message": "Error retrieving tenant info" })
    }
    console.log(authInfo)
  } catch (err) {
    throw new HTTPException(400, { "message": "apiBaseURL or tenant provided is invalid" })
  }
}

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

app.post('/uuid', async (c) => {
  if (c.req.header('Content-Type') !== 'application/json') {
    throw new HTTPException(400, { "message": "Content-Type must be application/json" })
  }

  const body = await c.req.json()

  if (!body.apiBaseURL && !body.tenant) {
    throw new HTTPException(400, { "message": "apiBaseURL or tenant must be provided in the request body" })
  }

  let apiURL

  if (body.apiBaseURL) {
    apiURL = new URL(body.apiBaseURL)
    if (!apiURL.hostname) {
      throw new HTTPException(400, { "message": "apiBaseURL is not a valid URL" })
    }
  } else {
    apiURL = new URL(`https://${body.tenant}.api.identitynow.com`)
    if (!apiURL.hostname) {
      throw new HTTPException(400, { "message": "tenant is not valid" })
    }

  }

  console.log(apiURL)
  if(!apiURL.origin){
    throw new HTTPException(400, { "message": "apiBaseURL or tenant provided is invalid" })
  }

  const baseURL = apiURL?.origin

  console.log("BaseAPIURL:", baseURL)

  const tenantInfo = await getTenantInfo(baseURL)
  console.log(tenantInfo)

  const objectToPut = { id: crypto.randomUUID(), apiBaseURL: body.apiBaseURL }
  const objectToRespond = { encryptionKey: generateRandomString(20), ...objectToPut }

  try {
    const data = await ddbDocClient.send(new PutCommand({ TableName: tableName, Item: objectToPut }));
    console.log(data)
    if (!data) {
      throw new HTTPException(400, { "message": "Error creating UUID" })
    }
    return c.json(objectToRespond)
  } catch (err) {
    //@ts-expect-error Unknown error shape
    console.error("Error retrieving item:", err.message);
    //@ts-expect-error Unknown error shape
    console.error("Error code:", err.code);
    //@ts-expect-error Unknown error shape
    console.error("Error name:", err.name);
    //@ts-expect-error Unknown error shape
    console.error("Error stack:", err.stack);

    throw new HTTPException(400, { "message": "Error creating UUID" })
  }
})

app.post('/code/:code', async (c) => {
  const code = c.req.param('code');
  if (!code) {
    throw new HTTPException(400, { "message": "code not provided" })
  }

  const { state: uuid } = c.req.query()

  console.log("Exchanging code for token", code, uuid)

  const token = "temp_token"

  try {
    const data = await ddbDocClient.send(new UpdateCommand({
      TableName: tableName, Key: { id: uuid }, UpdateExpression: "set token = :token",
      ExpressionAttributeValues: {
        ":token": token,
      }
    }));
    console.log(data)
    if (!data) {
      throw new HTTPException(400, { "message": "Error adding token" })
    }
    return c.json(data)
  } catch (err) {
    //@ts-expect-error Unknown error shape
    console.error("Error retrieving item:", err.message);
    //@ts-expect-error Unknown error shape
    console.error("Error code:", err.code);
    //@ts-expect-error Unknown error shape
    console.error("Error name:", err.name);
    //@ts-expect-error Unknown error shape
    console.error("Error stack:", err.stack);

    throw new HTTPException(400, { "message": "Error creating UUID" })
  }
})

app.get('/uuid/:uuid', async (c) => {
  const uuid = c.req.param('uuid');
  if (!uuid) {
    throw new HTTPException(400, { "message": "uuid not provided" })
  }
  try {
    const data = await ddbDocClient.send(new GetCommand({ TableName: tableName, Key: { id: uuid } }));
    console.log(data)
    if (!data) {
      throw new HTTPException(400, { "message": "uuid not authenticated" })
    }
    return c.json(data)

  } catch (err) {
    //@ts-expect-error Unknown error shape
    console.error("Error retrieving item:", err.message);
    //@ts-expect-error Unknown error shape
    console.error("Error code:", err.code);
    //@ts-expect-error Unknown error shape
    console.error("Error name:", err.name);
    //@ts-expect-error Unknown error shape
    console.error("Error stack:", err.stack);

    throw new HTTPException(400, { "message": "uuid not authenticated" })
  }
})

export const handler = handle(app)