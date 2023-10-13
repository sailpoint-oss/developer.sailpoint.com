---
id: source-data-read
title: Source Data Read
pagination_label: Source Data Read
sidebar_label: Source Data Read
keywords: ['connectivity', 'connectors', 'Source Data Read']
description: Create account on the source.
slug: /docs/saas-connectivity/commands/source-data-read
tags: ['Connectivity', 'Connector Command']
---

| Input/Output |            Data Type        |
| :----------- | :-------------------------: |
| Input        | StdSourceDataReadInput  |
| Output       | StdSourceDataReadOutput |

### Example StdSourceDataReadInput

```javascript
{
    "sourceDataKey": "name",
    "queryInput": {
        "query": "fetchAll",
        "limit": 10
    }
}
```

### Example StdSourceDataReadOutput

```javascript
[
    {
        key: 'id',
        label: 'Id',
        subLabel: 'Airtable Base Id'
    },
    {
        key: 'name',
        label: 'Name',
        subLabel: 'Airtable Source Table Name'
    }
]
```

## Description

The Source Data Read command is used to query a source in IdentityNow and return a set of data that is typically used to populate a dropdown for selection purposes. This is normally used for the IdentityNow forms but can be used for any type of implementation where you need to get other information from a source not normally retrieved from identites or entitlements.

Below is a simple example of the Source Data Read command implemented where it simply retrieves the base ID name. The sourceDataKey is required and should be returned from the ```source data read``` command.

```javascript
.stdSourceDataRead(async (context: Context, input: StdSourceDataReadInput, res: Response<StdSourceDataReadOutput>) => {
    if (input.sourceDataKey === 'id') {
        res.send([{
            key: airtable.getAirtableBase(),
            label: airtable.getAirtableBase(),
            subLabel: 'Airtable Base Id'
        }])
    } else {
        throw new ConnectorError('invalid/unsupported source data key')
    }
})
```

You can optionally use the input.queryInput.query to allow the list to be searchable. One way you might do this is importing a tool like [alasql](https://github.com/AlaSQL/alasql) and allowing the user to implement a search on the dataset or in the below case of Airtable, one might retrieve accounts and allow a search to be performed on the airtable API.

```javascript
.stdSourceDataRead(async (context: Context, input: StdSourceDataReadInput, res: Response<StdSourceDataReadOutput>) => {
    if (input.sourceDataKey === 'id') {
        res.send([{
            key: airtable.getAirtableBase(),
            label: airtable.getAirtableBase(),
            subLabel: 'Airtable Base Id'
        }])
    } else if (input.sourceDataKey === 'accounts' && input.queryInput?.query) {
        let accounts = await airtable.queryAccounts(input.queryInput.query)
        let result: StdSourceDataReadOutput = []
        for (let account of accounts) {
            result.push({ key: account.id, label: account.displayName, subLabel: account.email })
        }
        res.send(result)
    } else {
        throw new ConnectorError('invalid/unsupported source data key')
    }
})

// airtable.ts implementation of queryAccounts:

async queryAccounts(query: string): Promise<AirtableAccount[]> {
    return this.airTableBase('Users').select({
        view: 'Grid view',
        filterByFormula: query
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

Now if the source system sends a command like the following, they will only get a results that match the name "Adam Archer"

```javascript
    "type": "std:source-data:read",
    "input": {
        "queryInput": {
            "query": "filterByFormula=({displayName} = 'Adam Archer')"
        }
    },
```