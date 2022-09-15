---
id: entitlement-list
title: Entitlement List
pagination_label: Entitlement List
sidebar_label: Entitlement List
keywords: ["connectivity", "connectors", "entitlement list"]
description: Gather a list of all entitlements available on the source.
slug: /docs/saas-connectivity/commands/entitlement-list
tags: ["Connectivity"]
---

| Input/Output |  Data Type                  |
|:-------------|:---------------------------:|
| Input        | StdEntitlementListInput       |
| Output       | StdEntitlementListOutput      |

### Example StdEntitlementListInput

```javascript
{
    "type": "group" 
}
```

### Example StdEntitlementListOutput

```javascript
{
    "key": {
        "simple": {
            "id": "administrator"
        }
    },
    "type": "group",
    "attributes": {
        "id": "administrator",
        "name": "Administrator"
    }
}
```

## Description

The entitlement list command triggers during a manual or scheduled entitlement aggregation operation within IDN. This operation gathers a list of all entitlements available on the target source, usually multi-valued entitlements like groups or roles. This operation provides IDN administrators with a list of entitlements available on the source so they can create access profiles and roles accordingly, and it provides IDN with more details about the entitlements. The entitlement schema’s minimum requirements are name and ID, but you can add other values, such as created date, updated date, status, etc.

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
