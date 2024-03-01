---
id: patch-requests
title: Patch Requests
pagination_label: Patch Requests
sidebar_label: Patch Requests
sidebar_position: 8
sidebar_class_name: patchRequests
keywords: ['patch']
description: Send PATCH ISC API requests.
tags: ['patch', 'guide']
---

## PATCH requests 

You can use the Identity Security Cloud APIs to update existing resources. Many of the APIs offer multiple ways to do so: 

- You can send a **PUT** request to replace the existing resource with a new one. For example, if you wanted to update one of John Doe's source accounts, you could use the [Put Account](https://developer.sailpoint.com/docs/api/v3/put-account) endpoint to replace John Doe's existing source account with a new one. This is a viable way to update a resource, but it requires you to update the entire resource each time. 

- You can send a **PATCH** request to make a specific change to the resource. For example, if you wanted to update John Doe's account's associated "city" attribute, you could use the [Patch Account](https://developer.sailpoint.com/docs/api/v3/update-account) endpoint to replace his existing "city" with a new one, all without affecting any of the other source account details. This can be very helpful when you want to make specific updates to resources, but it requires some knowledge of the types of changes, or "operations", that are possible, the specific paths of the fields you want to update, and some understanding of the basic data types. 

This guide will focus on the partial update method, PATCH requests. Read this guide to learn how to start sending PATCH requests. 

## Get the resource ID

To use PATCH to update a resource, you first need to know the resource ID. 

Not all resource IDs are available in the Identity Security Cloud UI, so you may need to use the API to find the ID for the resource you want to update. 

For example, account IDs aren't avilable in the Identity Security Cloud UI. If you want to use the [Patch Account](https://developer.sailpoint.com/docs/api/v3/update-account) endpoint to make a change to a specific account, you first need to find out the account's ID. 

You can use the [List Accounts](https://developer.sailpoint.com/docs/api/v3/list-accounts) endpoint to view all the accounts in your tenant, along with their details, such as their identities. You can find your account and its ID in this list. 

## Get the resource details 

Once you know the resource ID, you can use a GET request to get that resource's details. To successfully use a PATCH request to make changes to a resource, you need to know which paths you can update, what values they have, and the structure of those paths. 

For example, once you know the ID for the source you want to update with a PATCH request, you can use the [Get Source by ID](https://developer.sailpoint.com/docs/api/v3/get-source) endpoint to view only that source and its details. 

In this example, the API returns a source, "ubuntu", along with all its details. This JSON response shows the resource's structure and its different paths: 

<details>
  <summary>Example Source Details</summary>

```json

{
    "description": "ubuntu",
    "owner": {
        "type": "IDENTITY",
        "id": "2c91808475b4334b0175e1e005006401",
        "name": "SailPoint Services"
    },
    "cluster": null,
    "accountCorrelationConfig": null,
    "accountCorrelationRule": null,
    "managerCorrelationMapping": null,
    "managerCorrelationRule": null,
    "beforeProvisioningRule": null,
    "schemas": [
        {
            "type": "CONNECTOR_SCHEMA",
            "id": "2c91808c771b686101772a91dbd877ab",
            "name": "account"
        },
        {
            "type": "CONNECTOR_SCHEMA",
            "id": "2c91808c771b686101772a91dbd877ac",
            "name": "group"
        }
    ],
    "passwordPolicies": null,
    "features": [
        "NO_RANDOM_ACCESS",
        "DISCOVER_SCHEMA",
        "DIRECT_PERMISSIONS"
    ],
    "type": "DelimitedFile",
    "connector": "delimited-file-angularsc",
    "connectorClass": "sailpoint.connector.DelimitedFileConnector",
    "connectorAttributes": {
        "mergeColumns": [
            "groups"
        ],
        "group.mergeRows": true,
        "group.delimiter": ",",
        "mergeRows": true,
        "group.filetransport": "local",
        "partitionMode": "disabled",
        "connectionType": "file",
        "group.host": "local",
        "group.indexColumn": "id",
        "file": "/tmp/source-account-2c91808c771b686101772a91dbd877aa3299228430527475607.csv",
        "delimiter": ",",
        "deltaAggregation": null,
        "host": "local",
        "cloudExternalId": "23012",
        "group.indexColumns": [
            "id"
        ],
        "cloudIdentityProfileName": null,
        "group.mergeColumns": [
            "entitlements",
            "groups",
            "permissions"
        ],
        "hasHeader": true,
        "filterEmptyRecords": true,
        "oauth_body_attrs_to_exclude": "client_secret,client_id",
        "filetransport": "local",
        "idnPreviousCorrelationConfig": null,
        "deleteThresholdPercentage": 10,
        "group.filterEmptyRecords": true,
        "group.hasHeader": true,
        "group.partitionMode": "disabled",
        "cloudAuthoritativeSourcePrecedence": null,
        "formPath": null,
        "group.columnNames": [
            "id",
            "name",
            "displayName",
            "created",
            "description",
            "modified",
            "entitlements",
            "groups",
            "permissions"
        ],
        "templateApplication": "DelimitedFile Template",
        "group.file": "/var/lib/identityiq_workspace/27c92c24-8681-4574-9453-5c56370b3fc9-groups.csv",
        "indexColumn": "id",
        "healthy": false,
        "cloudDisplayName": "Ubuntu",
        "connectorName": "Delimited File",
        "beforeProvisioningRule": null,
        "cloudOriginalApplicationType": "Delimited File",
        "since": "2021-01-22T14:48:58.072Z",
        "status": "SOURCE_STATE_ERROR_ACCOUNT_FILE_IMPORT"
    },
    "deleteThreshold": 10,
    "authoritative": false,
    "healthy": false,
    "status": "SOURCE_STATE_ERROR_ACCOUNT_FILE_IMPORT",
    "since": "2021-01-22T14:48:58.072Z",
    "connectorId": "delimited-file",
    "connectorName": "Delimited File",
    "connectionType": "file",
    "connectorImplementationId": "delimited-file",
    "managementWorkgroup": null,
    "id": "2c91808c771b686101772a91dbd877aa",
    "name": "Ubuntu",
    "created": "2021-01-22T14:48:58.072Z",
    "modified": "2023-06-30T13:39:07.456Z"
}

```

</details>

## PATCH request structure 

A PATCH request involves sending a JSON PATCH document that represents an array of objects. Each object represents a single operation to be applied to the target resource. 

PATCH requests all share the same essential structure. A PATCH request must include an object that specifies exactly one operation to apply to update the resource, as well as exactly one path that represents the target location where the operation is applied. 

This example request has the basic PATCH structure: 

```text
PATCH https://{tenant}.api.identitynow.com/v3/sources/:id
```

```json
[
  {
    "op": "replace",
    "path": "/description",
    "value": "new description"
  }
]

```

This example request uses a "replace" operation to replace the source's existing description with a new value, "new description". This example shows the parts involved in sending a PATCH request. You must specify an operation to apply to the target resource, a path to apply the operation to, and the change you want to make, often in the form of a value or a "from" location for "copy" and "move" operations. 

You can find this example in the [Patch Source](https://developer.sailpoint.com/docs/api/v3/update-source) specification. The API specifications have examples on the right side of the page that you can copy and use to get started. You can tab between the different examples to see a variety of pre-built requests you can use. 

A PATCH request can be more complex as well - the values can be simple or vast and detailed. You can use a PATCH request to apply multiple operations, with a path for each, or you can apply the same type of operation to multiple paths. The PATCH request will always have the same essential structure though. 

:::note

The ordering of members in JSON objects doesn't affect the response. These examples all specify the operation first, but you would get the same response if you specified the members in any other order. 

:::

You can specify a single operation, or you can specify multiple. If you are using multiple operations in one PATCH request, each operation must include its own path. 

This example request applies "replace" and "add" ops to different paths:  

```text
PATCH https://{tenant}.api.identitynow.com/v3/sources/:id
```

```json

[
  {
    "op": "replace",
    "path": "/description",
    "value": "new description"
  },
  {
    "op": "add",
    "path": "/connectorAttributes/filterString",
    "value": "!( id.contains( \"m\" ) ) || !( id.contains( \"d\" ) )"
  }
]

```

This example request uses a "replace" to update the source's description and an "add" to add a filter string to the source's connector. 

## Specify an operation 

Once you know the ID of the resource you want to update and you have the resource's details, you can start writing your PATCH request. 

The first step is to specify an operation to apply to the target resource. 

Operation objects must have exactly one "op" member, whose value indicates the operation to perform. 

These are the available PATCH operations: 

- [Add](#add)
- [Remove](#remove)
- [Replace](#replace)
- [Move](#move)
- [Copy](#copy) 
- [Test](#test)

### Add 

The "add" operation adds a value to the target location. For more information about the "add" operation and how it behaves in different scenarios, refer to the [JSON PATCH documentation](https://datatracker.ietf.org/doc/html/rfc6902). 

This example uses the [Patch Source Schema](https://developer.sailpoint.com/docs/api/v3/update-source-schema) endpoint to add a new "office" attribute to the end of a source schema's array of attributes:

```json
[
  {
    "op": "add", 
    "path": "/attributes/-", 
    "value": 
    {
      "name": "office", 
      "type": "STRING", 
      "schema": null, 
      "description": "Office Location", 
      "isMulti": false, 
      "isEntitlement": false, 
      "isGroup": false
    }
  }
]
```

If you are adding a new value to an array of values, you can specify the position within the array where you want to add the new value. In this example, using the "-" expression at the end of the path specifies that the new attribute will be added to the end of the array of attributes. 

You can use "0" to add a value to the beginning of the array. You can use "1" to add a value to the second positon, and so on. Using "-" adds the value to the end of the array. 

### Remove 

The "remove" operation removes a value from the target location. The target location must exist for the operation to be successful. 

This example uses the [Patch Source](https://developer.sailpoint.com/docs/api/v3/update-source) endpoint to remove an existing filter string from a source's connector:

```json
 [
  {
    "op": "remove", 
    "path": "/connectorAttributes/filterString" 
  }
 ] 
 ```

 In this example, the PATCH request is removing a connector's string filter. If there is no string filter to remove, the request will fail and you will receive an error. 

 Because there is only one value for the path, the request removes that value. 

 If there is an array of values, you must specify the position within the array to remove that value. 

This example uses the [Patch Source](https://developer.sailpoint.com/docs/api/v3/update-source) endpoint to remove the first feature from a source's list of features. 

The source has three features, "ENABLE", "PROVISIONING", AND "UNLOCK". 

This request will remove the the first value from the list, "ENABLE". 

```json
[
  {
    "op": "remove", 
    "path": "/features/0"
  }
] 
```

### Replace 

The "replace" operation replaces the value at the target location with a new value. The operation object must contain a "value" member whose content specifies the replacement value, and the target location must exist for the operation to be successful. This operation is the equivalent of a "remove" followed by an "add". 

This example uses the [Patch Source](https://developer.sailpoint.com/docs/api/v3/update-source) endpoint to replace a source's existing features with new ones: 

```json
[
  {
    "op": "replace", 
    "path": "/features", 
    "value": 
    [
      "PASSWORD", 
      "PROVISIONING", 
      "ENABLE", 
      "AUTHENTICATE"
    ]
  }
] 
```

You can also replace a value within an array. This example uses the [Patch Source](https://developer.sailpoint.com/docs/api/v3/update-source) endpoint to replace the first value in the array with the specified value: 

```json
[
  {
    "op": "replace",
    "path": "/features/0",
    "value": "CURRENT_PASSWORD"
  }
]
```

This request removes the first feature ("PASSWORD") in the list and adds the "CURRENT_PASSWORD" value in its place. 

### Move

The "move" operation removes the operation from a specified location and adds it to the target location. This operation object must contain a "from" member whose content specifies the location to remove the value from, and the "from" location must exist for the operation to be successful. 

This example uses the [Patch Source Schema](https://developer.sailpoint.com/docs/api/v3/update-source-schema) endpoint to move an attribute from the beginning to the end of the schema's array of attributes: 

```json 
[
  {
    "op": "move", 
    "from": "/attributes/0", 
    "path": "/attributes/-"
  }
] 
```

### Copy 

The "copy" operation copies the value from a specified location to the target location. The operation object must contain a "from" member whose content specifies the location to copy the value from, and the "from" location must exist for the operation to be successful.

This example uses the [Patch Source Schema](https://developer.sailpoint.com/docs/api/v3/update-source-schema) endpoint to copies an attribute from the beginning and duplicates it at the end of the schema's array of attributes: 

```json 
[
  {
    "op": "copy", 
    "from": "/attributes/0", 
    "path": "/attributes/-"
  }
] 
```

### Test 

The "test" operation is unique in that it does not apply changes to the resource. The "test" operation tests that a value at the target location is equal to a specified value. The operation object must contain a "value" member whose content specifies the value to be compared to the target location's value, and the values must be equal for the operation to be successful. For more information about what "equal" means for different JSON types, refer [here](https://datatracker.ietf.org/doc/html/rfc6902#section-4.6).

The "test" operation allows you to check that a resource has the values you expect it to have, and then you can make changes to those values from there with another PATCH request. 

This example uses the [Patch Source](https://developer.sailpoint.com/docs/api/v3/update-source) endpoint to test a source's existing features to make sure they match the specified values.: 

```json 
[
  {
    "op": "test", 
    "path": "/features", 
    "value": 
    [
      "PASSWORD",
      "PROVISIONING", 
      "ENABLE", 
      "AUTHENTICATE"
    ]
  }
]
```

## Specify a path 

Once you have specified the operation you want to apply to the target resource, you must specify the path, the JSON Pointer for the target location that you want to apply the operation to. 

To send a PATCH request, you must know the path where you want to make the change. This is why it's important to get the resource's details so that you can see all the resource's available paths where you can make changes. 

For example, this snippet from the beginning of the earlier source details example lists many of the source's top-level paths: 

<details>
  <summary>Example Source Paths</summary>

```json
{
    "description": "ubuntu",
    "owner": {
        "type": "IDENTITY",
        "id": "2c91808475b4334b0175e1e005006401",
        "name": "SailPoint Services"
    },
    "cluster": null,
    "accountCorrelationConfig": null,
    "accountCorrelationRule": null,
    "managerCorrelationMapping": null,
    "managerCorrelationRule": null,
    "beforeProvisioningRule": null,
    "schemas": [
        {
            "type": "CONNECTOR_SCHEMA",
            "id": "2c91808c771b686101772a91dbd877ab",
            "name": "account"
        },
        {
            "type": "CONNECTOR_SCHEMA",
            "id": "2c91808c771b686101772a91dbd877ac",
            "name": "group"
        }
    ],
    "passwordPolicies": null,
    "features": [
        "NO_RANDOM_ACCESS",
        "DISCOVER_SCHEMA",
        "DIRECT_PERMISSIONS"
    ],
```

</details>

You can send PATCH requests to make changes to some of these paths, like editing the source's description with this PATCH request from earlier: 

```text
PATCH https://{tenant}.api.identitynow.com/v3/sources/:id
```

```json
[
  {
    "op": "replace",
    "path": "/description",
    "value": "new description"
  }
]
```

However, you cannot make changes to all paths. Use the API specifications for the PATCH endpoint you want to use to find out which paths you can make changes to. The API specifications will list the paths, or fields, that are immutable, if there are any. For example, the [Patch Source](https://developer.sailpoint.com/docs/api/v3/update-source) specification lists paths like `id` and `type` as being immutable. Trying to use modify these paths results in a 400 error. 

The paths are often nested within other paths, like within the "connectorAttributes" path from the earlier example source's details: 

<details>
  <summary>Example Source Connector Attributes</summary>

```json
"connectorAttributes": {
        "mergeColumns": [
            "groups"
        ],
        "filterString": "!( id.contains( \"m\" ) ) || !( id.contains( \"d\" ) )",
        "group.mergeRows": true,
        "group.delimiter": ",",
        "mergeRows": true,
        "group.filetransport": "local",
        "partitionMode": "disabled",
        "connectionType": "file",
        "group.host": "local",
        "group.indexColumn": "id",
        "file": "/tmp/source-account-2c91808c771b686101772a91dbd877aa3299228430527475607.csv",
        "delimiter": ",",
        "deltaAggregation": null,
        "host": "local",
        "cloudExternalId": "23012",
        "group.indexColumns": [
            "id"
        ],
        "cloudIdentityProfileName": null,
        "group.mergeColumns": [
            "entitlements",
            "groups",
            "permissions"
        ],
        "hasHeader": true,
        "filterEmptyRecords": true,
        "oauth_body_attrs_to_exclude": "client_secret,client_id",
        "filetransport": "local",
        "idnPreviousCorrelationConfig": null,
        "deleteThresholdPercentage": 10,
        "group.filterEmptyRecords": true,
        "group.hasHeader": true,
        "group.partitionMode": "disabled",
        "cloudAuthoritativeSourcePrecedence": null,
        "formPath": null,
        "group.columnNames": [
            "id",
            "name",
            "displayName",
            "created",
            "description",
            "modified",
            "entitlements",
            "groups",
            "permissions"
        ],
        "templateApplication": "DelimitedFile Template",
        "group.file": "/var/lib/identityiq_workspace/27c92c24-8681-4574-9453-5c56370b3fc9-groups.csv",
        "indexColumn": "id",
        "healthy": false,
        "cloudDisplayName": "Ubuntu",
        "connectorName": "Delimited File",
        "beforeProvisioningRule": null,
        "cloudOriginalApplicationType": "Delimited File",
        "since": "2021-01-22T14:48:58.072Z",
        "status": "SOURCE_STATE_ERROR_ACCOUNT_FILE_IMPORT"
    },
```

</details>

You can send a PATCH request to make changes to paths within the "connectorAttributes" path itself. This example request removes the "filterString" path and its value. 

```text
PATCH https://{tenant}.api.identitynow.com/v3/sources/:id
```

```json
[
  {
    "op": "remove",
    "path": "/connectorAttributes/filterString",
    "value": "!( id.contains( \"m\" ) ) || !( id.contains( \"d\" ) )"
  }
]
```

This request specifies the top-level path, "connectorAttributes", following it with the path where the value is going to be removed from, "filterString". 

The request will only remove a filter string matching the one specified, so any other filter strings or connector attributes will be unaffected. 

If there is no value matching the filter string specified by the PATCH request, the request will fail and you will receive an error. 

## Specify a value 

For many of the operations, once you have specified the operation you want to apply and the path you want to apply it to, you need to specify the value you want to send with the request. The value you specify must fit the path's data type. 

The operations that don't require a value are the "copy" and "move" operations. Those operations instead use a "from" to represent the location they are copying or moving the data from. Refer to the [Specify a From](#specify-a-from) section for more information about how to use "from" with your "copy" and "move" operations. 

You can specify a single simple value for an operation. In this example from earlier, the PATCH request replaces the source's description: 

```text
PATCH https://{tenant}.api.identitynow.com/v3/sources/:id
```

```json
[
  {
    "op": "replace",
    "path": "/description",
    "value": "new description"
  }
]
```

You can also specify multiple values for an operation to be applied to, as long as they all affect the same path. For example, this PATCH request replaces the source's current features with a number of new ones: 

```text
PATCH https://{tenant}.api.identitynow.com/v3/sources/:id
```

```json
[
  {
    "op": "replace",
    "path": "/features",
    "value": [
      "PASSWORD",
      "PROVISIONING",
      "ENABLE",
      "AUTHENTICATE"
    ]
  }
]
```

A value can also be an object that contains other values within it. For example, this PATCH request adds a new "location" attribute to the end of the source schema's array of attributes: 

```text
PATCH https://{tenant}.api.identitynow.com//v3/sources/:sourceId/schemas/:schemaId
```

```json
[
  {
    "op": "add",
    "path": "/attributes/-",
    "value": {
      "name": "location",
      "type": "STRING",
      "schema": null,
      "description": "Employee location",
      "isMulti": false,
      "isEntitlement": false,
      "isGroup": false
    }
  }
]
```

This request uses the [PATCH Source Schema](https://developer.sailpoint.com/docs/api/v3/update-source-schema) endpoint to add a new attribute, along with its details, to the end of the array of a source's schema's attributes. 

This example uses the "-" after the path to indicate that the value will be added to the end of the array. When you are adding a new value to an array of values, you can specify the position within the array where you want to add the new value. In this example, using the "-" expression at the end of the path specifies that the new attribute will be added to the end of the array of attributes. 

You can use "0" to add a value to the beginning of the array. You can use "1" to add a value to the second positon, and so on. Using "-" adds the value to the end of the array. 

## Specify a from 

The "move" and "copy" operations allow you to remove or copy information from one path and add it to another path without your needing to specify the value, which could be an extensive array of information. To use the "move" and "copy" operations, you must specify a "from", a JSON Pointer representing the location you are moving or copying the value from. 

This example request uses the [PATCH Source schema](https://developer.sailpoint.com/docs/api/v3/update-source-schema) endpoint to move an attribute, along with its details, from the beginning to the end of a source schema's array of attributes: 

```text
PATCH https://{tenant}.api.identitynow.com//v3/sources/:sourceId/schemas/:schemaId
```

```json

 [
  {
    "op": "move", 
    "from": "/attributes/0", 
    "path": "/attributes/-"
    }
  ] 

 ```

 Instead of having to specify the value yourself, which could be an extensive array of information, you can use the "move" operation to move everything from one path to another. 

## Apply the PATCH request header

With an operation, a path, and a change to make, a PATCH request is almost ready. 

To send the request as a PATCH, you must apply this special PATCH content type header: `Content-Type: application/json-patch+json`

## Send your PATCH request 

Once you have specified the operation you want to apply, the path you want to change, the change you want to make, and you have applied the PATCH content type header, you can send your PATCH request. 

When the request is successful, the API will return the updated resource. 

## Get started 

Now you can use PATCH requests partially update resources. For more information about PATCH requests, refer to this [documentation](https://datatracker.ietf.org/doc/html/rfc6902).  For more information about the Identity Security Cloud PATCH endpoints and which paths can be changed for each one, refer to their API specifications. 

Use this guide to get started, and if you have questions, don't hesitate to reach out on the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss!