---
id: source-data-read
title: Source Data Read
pagination_label: Source Data Read
sidebar_label: Source Data Read
keywords: ['connectivity', 'connectors', 'Source Data Read']
description: Read source data. 
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

Use the source data read command to query a source in IdentityNow and return a set of data. This data is typically used to populate a dropdown menu for selection purposes. This functionality is typically useful for IdentityNow forms, but it can be used for any type of implementation that requires you to get other information from a source, information that is not normally retrieved from identites or entitlements.

This is a simple example of the source data read command. It is implemented to retrieve the base ID name. The `sourceDataKey` is required, the ```source data read``` command should return it.

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

You can optionally use `input.queryInput.query` to make the list searchable. One way you could do this is to import a tool like [alasql](https://github.com/AlaSQL/alasql) and allow the user to implement a search on the dataset. This example from Airtable shows how you could use the source data read command to get accounts and allow a search to be performed with the Airtable API: 

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

Now, if the source system sends a command like the following, the system will only get results that match the name "Adam Archer":

```javascript
    "type": "std:source-data:read",
    "input": {
        "queryInput": {
            "query": "filterByFormula=({displayName} = 'Adam Archer')"
        }
    },
```