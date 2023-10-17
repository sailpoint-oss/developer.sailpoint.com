---
id: source-data-discover
title: Source Data Discover
pagination_label: Source Data Discover
sidebar_label: Source Data Discover
keywords: ['connectivity', 'connectors', 'Source Data Discover']
description: Discover potential source data types. 
slug: /docs/saas-connectivity/commands/source-data-discover
tags: ['Connectivity', 'Connector Command']
---

| Input/Output |            Data Type        |
| :----------- | :-------------------------: |
| Input        | StdSourceDataDiscoverInput  |
| Output       | StdSourceDataDiscoverOutput |

### Example StdSourceDataDiscoverInput

```javascript
{
    "queryInput": {
        "query": "fetchAll",
        "limit": 10
    }
}
```

### Example StdSourceDataDiscoverOutput

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

Use the source data discover command to identify the types of data your source can return. Different sources can send different types of data to IdentityNow. For example, one source may be able to send a list of the different languages it supports, while another may be able to send values describing source details normally sent through accounts and entitlements. You can use the source data discover command to discover these possibilities. 

One typical use for the source data discover command is found in IdentityNow customer forms for dropdown menus: they use the command to identify the additional source types their sources can provide to IdentityNow and use that information to populate the dropdown menus. 

This is a simple example of the source data discover command. It has been implemented to list two types of queries that the Airtable source can supply. 

```javascript
.stdSourceDataDiscover(async (context: Context, input: StdSourceDataDiscoverInput, res: Response<StdSourceDataDiscoverOutput>) => {
    res.send([
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
    ])
})
```

You can optionally use `input.queryInput.query` to make the list searchable. One way you could do this is to import a tool like [alasql](https://github.com/AlaSQL/alasql) and allow the user to implement a search on the dataset, as shown in this example:

```javascript
.stdSourceDataDiscover(async (context: Context, input: StdSourceDataDiscoverInput, res: Response<StdSourceDataDiscoverOutput>) => {
    const data = [
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

    if (input.queryInput?.query) {
        let result = alasql(input.queryInput?.query, [data] );
        res.send(result)
    } else {
        res.send(data)
    }
})
```

Now, if the source system sends a command like the following, they will only get the "name" back:

```javascript
    "type": "std:source-data:discover",
    "input": {
        "sourceDataKey": "id",
        "queryInput": {
            "query": "select * from ? where key = 'name'"
        }
    },
```