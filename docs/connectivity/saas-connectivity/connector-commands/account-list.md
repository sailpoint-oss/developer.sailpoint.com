---
id: account-list
title: Account List
pagination_label: Account List
sidebar_label: Account List
keywords: ['connectivity', 'connectors', 'account list']
description: Aggregate all accounts from the source into Identity Security Cloud.
slug: /connectivity/saas-connectivity/commands/account-list
tags: ['Connectivity', 'Connector Command']
---

| Input/Output |      Data Type       |
| :----------- | :------------------: |
| Input        | StdAccountListInput  |
| Output       | StdAccountListOutput |

### Example StdAccountListInput

```javascript
"state": {"date": "1686341338871"},
"stateful": true
```

### Example StdAccountListOutput

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
        "email": "example@sailpoint.com",
        "entitlements": [
            "administrator",
            "sailpoint"
        ]
    }
}
```

## Description

The account list command aggregates all accounts from the target source into Identity Security Cloud. ISC calls this command during a manual or scheduled account aggregation.

![Account List](./img/account_list_idn.png)

## Implementation

For you to be able to implement this endpoint, the web service must expose an API for listing user accounts and entitlements (i.e. roles or groups). Sometimes, a target source’s API has a single endpoint providing all the attributes and entitlements a source account contains. However, some APIs may break these attributes and entitlements into separate API endpoints, requiring you to make multiple calls to gather all an account's necessary data. The following code from [airtable.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts) shows the necessary steps to create a complete account from the various endpoints the API offers:

```javascript
async getAllAccounts(): Promise<AirtableAccount[]> {
    return this.airTableBase('Users').select({
        view: 'Grid view'
    }).firstPage().then(records => {
        const recordArray: Array<AirtableAccount> = []
        for (const record of records) {
            recordArray.push(AirtableAccount.createWithRecords(record))
        }
        return recordArray
    }).catch(err => {
        throw new ConnectorError('error while getting accounts: ' + err)
    })
}
```

:::caution Important

ISC will throw a connection timeout error if your connector doesn't respond within 3 minutes, and there are memory limitations involved with aggregating data. To prevent large memory utilization or timeout errors, you should set up your connectors to send data to ISC as it's retrieved from your source system. For more details and an example, refer to [Connector Timeouts](../in-depth/connector-timeouts.md).

:::

:::caution Important

ISC supports [delta aggregation](#delta-aggregation-state). If your source has a large number of accounts that will be syncronized with ISC, then it is highly recommended to utilize [delta aggregation](#delta-aggregation-state) for the source. 

:::

The following code snippet from [index.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts) shows how to register the account list command on the connector object:

```javascript
export const connector = async () => {

    // Get connector source config
    const config = await readConfig()

    // Use the vendor SDK or implement own client as necessary to initialize a client
    const airtable = new AirtableClient(config)

    return createConnector()
        .stdAccountList(async (context: Context, input: undefined, res: Response<StdAccountListOutput>) => {
            const accounts = await airtable.getAllAccounts()

            for (const account of accounts) {
                res.send(account.toStdAccountListOutput())
            }
        })
...
```

ISC expects each user in the target source to be converted into a format ISC understands. The specific attributes the web service returns depend on what your source provides.

```javascript
public toStdAccountListOutput(): StdAccountListOutput {
    return this.buildStandardObject();
}

private buildStandardObject(): StdAccountListOutput | StdAccountCreateOutput | StdAccountReadOutput | StdAccountListOutput {
    return {
        key: SimpleKey(this.id),
        disabled: !this.enabled,
        locked: this.locked,
        attributes: {
            id: this.id,
            displayName: this.displayName,
            department: this.department,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            entitlements: this.entitlments,
        },
    }
}
```

The result of the account list command is not an array of objects but several individual objects. This is the format ISC expects, so if you see something like the following result while testing, it is normal:

```javascript
{
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
        "department": "sailpoint admins",
        "firstName": "John",
        "lastName": "Doe",
        "email": "example@sailpoint.com",
        "entitlements": [
            "administrator",
            "sailpoint"
        ]
    }
}
{
    "key": {
        "simple": {
            "id": "john"
        }
    },
    "disabled": false,
    "locked": false,
    "attributes": {
        "id": "john",
        "displayName": "John Doe External",
        "department": "external",
        "firstName": "John",
        "lastName": "Doe",
        "email": "example@gmail.com",
        "entitlements": [
            "administrator"
        ]
    }
}
```

## Delta Aggregation (State)

If your source can keep track of changes to the data in some way, then delta aggregation can be performed on a source. In order to implement, there are a few things that need to be configured

1. In your connector-spec.json file, the feature needs to be enabled by adding the following key: ```"supportsStatefulCommands": true,``` and in the sourceConfig section, a checkbox needs to be added to enable state with the key ```spConnEnableStatefulCommands```:

```javascript
"supportsStatefulCommands": true,
...
{
    "key": "spConnEnableStatefulCommands",
    "label": "Stateful",
    "required": true,
    "type": "checkbox"
}
```

2. In the ```stdAccountList``` command, when you are done sending accounts, you need to also send the state to ISC so it knows where to start the next time it sends a list request:

```javascript
const state = {"data": Date.now().toString()}
...
res.saveState(state)
```

In the above example, I am capturing the date, but you can use any value you want to store the state

:::caution Important

The state that you send using the ```saveState``` command MUST be a json object, and it is recommend to only save strings to ensure proper serialization/deserialization of the data. You cannot send a simple string or number or it will not properly save the state.

:::

3. In the ```stdAccountList``` command, you need to properly handle the state object. Something like below checks the stateful boolean as well as the state object and fetches accounts accordingly:

```javascript
.stdAccountList(async (context: Context, input: StdAccountListInput, res: Response<StdAccountListOutput>) => {
    let accounts = []
    const state = {"data": Date.now().toString()}
    if (!input.state && input.stateful) {
        logger.info(input, "No state provided, fetching all accounts")
        accounts = await airtable.getAllAccounts()
    } else if (input.state && input.stateful) {
        logger.info(input ,"Current state provided, only fetching accounts after that state")
        accounts = await airtable.getAllStatefulAccounts(new Date(Number(input.state?.data)))
    } else {
        logger.info(input.state ,"Source is not stateful, getting all acounts")
        accounts = await airtable.getAllAccounts()
    }
    logger.info(accounts, "fetched the following accounts from Airtable")
    for (const account of accounts) {
        res.send(account.toStdAccountListOutput())
    }
    res.saveState(state)
})
```