---
id: source-data-discover
title: Source Data Discover
pagination_label: Source Data Discover
sidebar_label: Source Data Discover
keywords: ['connectivity', 'connectors', 'Source Data Discover']
description: Create account on the source.
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

The Source Data Discover command is used to identify what types of data your source can return. This is typically used by IdentityNow customer forms for dropdowns to identify what types of additional information your source might be able to provide to IdentityNow. For example, a source might be able to retrieve a list of different languages it supports, or it might be able to send values describing source details no normally sent via accounts and entitlements. 

Below is a simple example of the source data discover command implemented where it simply lists two types of queries that the Airtable source can supply. 

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

You can optionally use the input.queryInput.query to allow the list to be searchable. One way you might do this is importing a tool like [alasql](https://github.com/AlaSQL/alasql) and allowing the user to implement a search on the dataset like the following example:

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

Now if the source system sends a command like the following, they will only get the "name" back:

```javascript
    "type": "std:source-data:read",
    "input": {
        "sourceDataKey": "id",
        "queryInput": {
            "query": "select * from ? where key = 'name'"
        }
    },
```