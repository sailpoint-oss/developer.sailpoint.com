---
id: v1-transforms
title: Transforms
pagination_label: Transforms
sidebar_label: Transforms
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Transforms', 'v1Transforms']
slug: /tools/sdk/typescript/transforms/methods/transforms
tags: ['SDK', 'Software Development Kit', 'Transforms', 'v1Transforms']
---

# TransformsV1Api
  The purpose of this API is to expose functionality for the manipulation of Transform objects.
Transforms are a form of configurable objects which define an easy way to manipulate attribute data without having
to write code. 

Refer to [Transforms](https://developer.sailpoint.com/docs/extensibility/transforms/) for more information about transforms.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-transform-v1**](#create-transform-v1) | **POST** `/transforms/v1` | Create transform
[**delete-transform-v1**](#delete-transform-v1) | **DELETE** `/transforms/v1/{id}` | Delete a transform
[**get-transform-v1**](#get-transform-v1) | **GET** `/transforms/v1/{id}` | Transform by id
[**list-transforms-v1**](#list-transforms-v1) | **GET** `/transforms/v1` | List transforms
[**update-transform-v1**](#update-transform-v1) | **PUT** `/transforms/v1/{id}` | Update a transform


## create-transform-v1
Create transform
Creates a new transform object immediately. By default, the internal flag is set to false to indicate that this is a custom transform. Only SailPoint employees have the ability to create a transform with internal set to true. Newly created Transforms can be used in the Identity Profile mappings within the UI.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-transform-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**transformV1** | `TransformV1` | The transform to be created. | 

### Return type

`TransformreadV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { TransformsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new TransformsV1Api(configuration);
const transformV1: TransformV1 = {"name":"Timestamp To Date","type":"dateFormat","attributes":{"inputFormat":"MMM dd yyyy, HH:mm:ss.SSS","outputFormat":"yyyy/dd/MM"}}; // The transform to be created.
const result = await apiInstance.createTransformV1({ transformV1: transformV1 });
console.log(result);
```

[[Back to top]](#)

## delete-transform-v1
Delete a transform
Deletes the transform specified by the given ID. Attempting to delete a transform that is used in one or more Identity Profile mappings will result in an error. If this occurs, you must first remove the transform from all mappings before deleting the transform.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-transform-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the transform to delete |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { TransformsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new TransformsV1Api(configuration);
const id: string = 2cd78adghjkja34jh2b1hkjhasuecd; // ID of the transform to delete
const result = await apiInstance.deleteTransformV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-transform-v1
Transform by id
This API returns the transform specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-transform-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the transform to retrieve |  [default to undefined]

### Return type

`TransformreadV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { TransformsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new TransformsV1Api(configuration);
const id: string = 2cd78adghjkja34jh2b1hkjhasuecd; // ID of the transform to retrieve
const result = await apiInstance.getTransformV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-transforms-v1
List transforms
Gets a list of all saved transform objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-transforms-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**name** | `string` | Name of the transform to retrieve from the list. | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw* | [optional] [default to undefined]

### Return type

`Array<TransformreadV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { TransformsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new TransformsV1Api(configuration);
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const name: string = ExampleTransformName123; // Name of the transform to retrieve from the list. (optional)
const filters: string = name eq "Uppercase"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw* (optional)
const result = await apiInstance.listTransformsV1({  });
console.log(result);
```

[[Back to top]](#)

## update-transform-v1
Update a transform
Replaces the transform specified by the given ID with the transform provided in the request body. Only the "attributes" field is mutable. Attempting to change other properties (ex. "name" and "type") will result in an error.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-transform-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the transform to update |  [default to undefined]
**transformV1** | `TransformV1` | The updated transform object. Must include \&quot;name\&quot;, \&quot;type\&quot;, and \&quot;attributes\&quot; fields, but \&quot;name\&quot; and \&quot;type\&quot; must not be modified. | [optional]

### Return type

`TransformreadV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { TransformsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new TransformsV1Api(configuration);
const id: string = 2cd78adghjkja34jh2b1hkjhasuecd; // ID of the transform to update
const transformV1: TransformV1 = {"name":"Timestamp To Date","type":"dateFormat","attributes":{"inputFormat":"MMM-dd-yyyy, HH:mm:ss.SSS","outputFormat":"yyyy/dd/MM"}}; // The updated transform object. Must include \&quot;name\&quot;, \&quot;type\&quot;, and \&quot;attributes\&quot; fields, but \&quot;name\&quot; and \&quot;type\&quot; must not be modified. (optional)
const result = await apiInstance.updateTransformV1({ id: id });
console.log(result);
```

[[Back to top]](#)

