---
id: authenticate
title: Authenticate
pagination_label: Authenticate
sidebar_label: Authenticate
keywords: ['connectivity', 'connectors', 'authenticate', 'pass-through authentication']
description: Check a user's credentials on the source for pass-through authentication.
slug: /connectivity/saas-connectivity/commands/authenticate
tags: ['Connectivity', 'Connector Command']
---

| Input/Output |        Data Type        |
| :----------- | :---------------------: |
| Input        |  StdAuthenticateInput   |
| Output       |  StdAuthenticateOutput  |

### Example StdAuthenticateInput

```javascript
{
    "identity": "john.doe",
    "key": {
        "simple": {
            "id": "john.doe"
        }
    },
    "username": "john.doe",
    "password": "<password>",
    "schema": {
        "displayAttribute": "displayName",
        "identityAttribute": "id",
        "groupAttribute": "groups",
        "attributes": [
            {
                "name": "id",
                "description": "Unique ID",
                "type": "string"
            }
        ]
    }
}
```

### Example StdAuthenticateOutput

```javascript
{
    "identity": "john.doe",
    "key": {
        "simple": {
            "id": "john.doe"
        }
    },
    "disabled": false,
    "locked": false,
    "attributes": {
        "id": "john.doe",
        "displayName": "John Doe",
        "email": "example@sailpoint.com"
    }
}
```

## Description

The authenticate command supports pass-through authentication. With pass-through authentication, users sign in to SailPoint Identity Security with their username and password from the source. SailPoint Identity Security does not store these passwords. It sends them to the connector, and the connector tests them against the source.

If the admin sets the sign-in method to **Directory Connection** with this source, SailPoint Identity Security sends `std:authenticate` each time a user signs in. The connector must do these steps:

1. Test the username and password against the source.
2. If the credentials are valid, get the user's account from the source.
3. Send the account to SailPoint Identity Security. SailPoint Identity Security then lets the user sign in.

If the credentials are not valid, throw a `ConnectorError`. SailPoint Identity Security then rejects the sign-in.

The output has the same shape as the account read output, and it can also include `permissions`. The input includes the account schema of the source in `input.schema`. Use it to decide which attributes to return.

To use this command, you must specify this value in the `commands` array: `std:authenticate`

### Disabled and locked accounts

Let the source decide whether a disabled or locked user can sign in. If the source accepts the credentials, send the account. Set `disabled` and `locked` to the values from the source.

### Usernames

The username that reaches the connector depends on what the user types and on the account correlation of the identity profile. If the user cannot sign in, and the connector logs show no `std:authenticate` command, look at the correlation settings first.

## Implementation

```typescript
import {
    ConnectorError,
    Context,
    createConnector,
    readConfig,
    Response,
    StdAuthenticateInput,
    StdAuthenticateOutput,
} from '@sailpoint/connector-sdk'
import { MyClient } from './my-client'

export const connector = async () => {
    const config = await readConfig()
    const client = new MyClient(config)

    return createConnector()
        .stdAuthenticate(async (context: Context, input: StdAuthenticateInput, res: Response<StdAuthenticateOutput>) => {
            const account = await client.authenticate(input.username, input.password)
            if (!account) {
                throw new ConnectorError(`Authentication failed for ${input.username}`)
            }
            res.send({
                identity: account.id,
                disabled: !account.active,
                locked: account.locked,
                attributes: {
                    id: account.id,
                    displayName: account.displayName,
                    email: account.email,
                },
            })
        })
}
```

Do not log `input.password`.
