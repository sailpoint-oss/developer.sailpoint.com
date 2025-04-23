---
id: entitlement-list
title: Entitlement List
pagination_label: Entitlement List
sidebar_label: Entitlement List
keywords: ['connectivity', 'connectors', 'entitlement list']
description: Gather a list of all entitlements available on the source.
slug: /connectivity/saas-connectivity/commands/entitlement-list
tags: ['Connectivity', 'Connector Command']
---

| Input/Output |        Data Type         |
| :----------- | :----------------------: |
| Input        | StdEntitlementListInput  |
| Output       | StdEntitlementListOutput |

### Example StdEntitlementListInput

```javascript
{
    "type": "group",
    "stateful": "true",
    "state": {
        "date": "4/23/2024"
    },
    "schema": {
        "type": "string",
        "includePermissions": true
    }
}
```

### Example StdEntitlementListOutput

```javascript
{
    "identity": "john.doe",
    "key": {
        "simple": {
            "id": "administrator"
        }
    },
    "type": "group",
    "deleted": false,
    "attributes": {
        "id": "administrator",
        "name": "Administrator"
    },
    "permissions": [
        "target": "SYSADMIN",
        "rights": "useAccounts,retrieveAccounts"
    ]
}
```

## Description

The entitlement list command triggers during a manual or scheduled entitlement aggregation operation within ISC. This operation gathers a list of all entitlements available on the target source, usually multi-valued entitlements like groups or roles. This operation provides ISC administrators with a list of entitlements available on the source so they can create access profiles and roles accordingly, and it provides ISC with more details about the entitlements. The entitlement schema’s minimum requirements are name and ID, but you can add other values, such as created date, updated date, status, etc.

To use this command, you must specify this value in the `commands` array: `std:entitlement:list`

![Discover Schema 4](./img/entitlement_list_idn.png)

## Defining the Schema

The entitlement schema is defined in the [connector-spec.json](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/connector-spec.json) file. Currently, only the multi-valued “group” type is supported. The following values are the minimum requirements, but you can add more attributes.

```javascript
...
"entitlementSchemas": [
 {
  "type": "group",
  "displayAttribute": "name",
  "identityAttribute": "id",
  "attributes": [
   {
    "name": "id",
    "type": "string",
    "description": "Unique ID of the group (ex. admin)"
   },
   {
    "name": "name",
    "type": "string",
    "description": "The display name of the group (ex. Admin)"
   }
  ]
 }
],
...
```

## Implementation

This can be implemented in the main connector file, [index.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts):

```javascript
...
.stdEntitlementList(async (context: Context, input: StdEntitlementListInput, res: Response<StdEntitlementListOutput>) => {
    const groups = await airtable.getAllEntitlements()

    for (const group of groups) {
        res.send(group.toStdEntitlementListOutput())
    }
})
...
...
...
public toStdEntitlementListOutput(): StdEntitlementListOutput {
    return this.buildStandardObject();
}
private buildStandardObject(): StdEntitlementReadOutput | StdEntitlementListOutput {
    return {
        key: SimpleKey(this.id),
        type: 'group',
        attributes: {
            id: this.id,
            name: this.name
        }
    }
}
```

:::caution Important

ISC will throw a connection timeout error if your connector doesn't respond within 3 minutes, and there are memory limitations involved with aggregating data. To prevent large memory utilization or timeout errors, you should set up your connectors to send data to ISC as it's retrieved from your source system. For more details and an example, refer to [Connector Timeouts](../in-depth/connector-timeouts.md).

:::

:::caution Important

ISC supports [delta aggregation](#delta-aggregation-state). If your source has a large number of entitlements that will be syncronized with ISC, then it is highly recommended to utilize [delta aggregation](#delta-aggregation-state) for the source.

:::

## Delta Aggregation (State)

If your source can keep track of changes to the data in some way, then delta aggregation can be performed on a source. In order to implement, there are a few things that need to be configured

1. In your connector-spec.json file, the feature needs to be enabled by adding the following key: `"supportsStatefulCommands": true,` and in the sourceConfig section, a checkbox needs to be added to enable state with the key `spConnEnableStatefulCommands`:

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

2. In the `stdEntitlementList` command, when you are done sending entitlments, you need to also send the state to ISC so it knows where to start the next time it sends a list request:

```javascript
const state = {"data": Date.now().toString()}
...
res.saveState(state)
```

In the above example, I am capturing the date, but you can use any value you want to store the state

:::caution Important

The state that you send using the `saveState` command MUST be a json object, and it is recommend to only save strings to ensure proper serialization/deserialization of the data. You cannot send a simple string or number or it will not properly save the state.

:::

3. In the `stdEntitlementList` command, you need to properly handle the state object. Something like below checks the stateful boolean as well as the state object and fetches accounts accordingly:

```javascript
.stdEntitlementList(async (context: Context, input: StdEntitlementListInput, res: Response<StdEntitlementListOutput>) => {
    let groups = []
    const state = {"data": Date.now().toString()}
    if (!input.state && input.stateful) {
        logger.info(input, "No state provided, fetching all entitlements")
        const groups = await airtable.getAllEntitlements()
    } else if (input.state && input.stateful) {
        logger.info(input ,"Current state provided, only fetching entitlements after that state")
        const groups = await airtable.getAllStatefulEntitlements(new Date(Number(input.state?.data)))
    } else {
        logger.info(input.state ,"Source is not stateful, getting all entitlements")
        const groups = await airtable.getAllEntitlements()
    }
    logger.info(groups, "fetched the following entitlements in Airtable")
    for (const group of groups) {
        res.send(group.toStdEntitlementListOutput())
    }
    res.saveState(state)
})
```

## Aggregation Filtering

Filter resource objects on a source during an entitlement aggregation process. In order to implement, there are a few things that need to be configured.

1. In order to configure Filtering feature, you need to modify the source configurations to add in a `filterString` or `group.filterString` property (The `filterString` applies to all objects which are aggregated. If you want to get more specific to groups which are filtered, you can use `group.filterString` to denote specific filters for those particular objects). This can be done with a simple partial update to the source, using the REST APIs.   

<details>
 <summary><code>PATCH</code><code>/v3/sources/\{id\}</code></summary>

##### HTTP Headers

> | Key      |  Value     | Description               |
> |-----------|-----------|-------------------------|
> | authorization      |  Bearer \{token\} | This is the JWT OAuth token   |
> | content-type     |  application/json-patch+json | This is needed for PATCH operations   |

##### Path Parameters

> id - The ID of the source. e.g. 2c9180835d191a86015d27ac132112ae

##### Query Parameters

> (Not applicable)

##### Request Body

JSON Patch syntax representing the change:

content-type: application/json-patch+json

```json
[
  {
    "op": "add",
    "path": "/connectorAttributes/filterString",
    "value": "( type != \"Employee\" )"
  }
] 
```
##### Example

```curl
curl -X PATCH \
  https://example.api.identitynow.com/beta/sources/2c9180835d191a86015d27ac132112ae \
  -H 'Authorization: Bearer eyJ...BRM' \
  -H 'Content-Type: application/json-patch+json' \
  -H 'cache-control: no-cache' \
  -d '[
  {
	"op": "add",
	"path": "/connectorAttributes/filterString",
	"value": "( type != \"Employee\" )"
  }
]'
```


##### Responses

> | HTTP Code     | HTTP Status                      | Description                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | 200         | OK        | Returned if the request was successfully processed                                |
> | 401         | Unauthorized                | Returned if there is no authorization header, or if the JWT token is expired                            |
> | 403         | Forbidden         | Returned if the user you are running as, doesn't have access to this end-point                                                            |
> | 429         | Too Many Requests        | Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again                                |
> | 500         | Internal Server Error               | Returned if there is an unexpected error                           |

##### Response Body

> content-type: application/json

</details>  

2. In the `.stdEntitlementList` command, before sending the Resource Object (groups), you need to filter the groups. Groups which match the filter string will be filtered. Groups which do not match, will be sent to ISC as normal.

```javascript
export class GitHubConnector {
    constructor(config: GitHubConfig) {
        // there can either be filterString or group.filterString config which user can input,
        this.filterString = config.filterString || config['group.filterString'];
    }
}
```

In the above example, we are setting the constructor with filter string value fetched from the config, this will be required further for filtering.

3. In the `.stdEntitlementList` command, you need to properly handle the filtering by initializing `Filter` class from `@sailpoint/connector-sdk` and calling `matcher()` from `Filter` class. Something like below which initialize Filter class by passing resource object's attributes to    `Filter` class's constructor and call `matcher()` by passing the filter string as an argument to it which we set in connector constructor in Step 2:

```javascript
.stdEntitlementList(async (context: Context,
    input: StdEntitlementListInput,
    res: Response<StdEntitlementListOutput>) => {
    const ro = {
            identity: "identity-name",
            uuid: "some-uuid",
            attributes: {
                databaseId: "some-database-id",
                name: "some-name",
                id: "some-id",
                description: "some-email",
            }
        } as StdEntitlementReadOutput;


    const filterEvaluator = new Filter(ro.attributes);
    // process the RO if the filterString is not provided by the user or matcher returns false else skip the RO from sending it to ISC
    if (this.filterString === undefined || !filterEvaluator.matcher(this.filterString)) {
        res.send(ro);
        accountCount++;
        logger.debug('RO processed:' + ro.identity);
    }
})
```

Reference doc link Filter : [Filter Class](/docs/connectivity/saas-connectivity/in-depth/filter.md)