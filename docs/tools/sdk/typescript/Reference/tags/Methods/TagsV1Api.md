---
id: v1-tags
title: Tags
pagination_label: Tags
sidebar_label: Tags
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Tags', 'v1Tags']
slug: /tools/sdk/typescript/tags/methods/tags
tags: ['SDK', 'Software Development Kit', 'Tags', 'v1Tags']
---

# TagsV1Api
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-tag-v1**](#create-tag-v1) | **POST** `/tags/v1` | Create tag
[**delete-tag-by-id-v1**](#delete-tag-by-id-v1) | **DELETE** `/tags/v1/{id}` | Delete tag
[**get-tag-by-id-v1**](#get-tag-by-id-v1) | **GET** `/tags/v1/{id}` | Get tag by id
[**list-tags-v1**](#list-tags-v1) | **GET** `/tags/v1` | List tags


## create-tag-v1
Create tag
This API creates new tag.

A token with API, ORG_ADMIN, CERT_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-tag-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tag2V1** | `Tag2V1` |  | 

### Return type

`Tag2V1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { TagsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new TagsV1Api(configuration);
const tag2V1: Tag2V1 = ; // 
const result = await apiInstance.createTagV1({ tag2V1: tag2V1 });
console.log(result);
```

[[Back to top]](#)

## delete-tag-by-id-v1
Delete tag
This API deletes a tag by specified id.

A token with API, ORG_ADMIN, CERT_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-tag-by-id-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the object reference to delete. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { TagsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new TagsV1Api(configuration);
const id: string = 329d96cf-3bdb-40a9-988a-b5037ab89022; // The ID of the object reference to delete.
const result = await apiInstance.deleteTagByIdV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-tag-by-id-v1
Get tag by id
Returns a tag by its id.

A token with API, ORG_ADMIN, CERT_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-tag-by-id-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the object reference to retrieve. |  [default to undefined]

### Return type

`Tag2V1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { TagsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new TagsV1Api(configuration);
const id: string = 329d96cf-3bdb-40a9-988a-b5037ab89022; // The ID of the object reference to retrieve.
const result = await apiInstance.getTagByIdV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-tags-v1
List tags
This API returns a list of tags.

A token with API, ORG_ADMIN, CERT_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-tags-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified** | [optional] [default to undefined]

### Return type

`Array<Tag2V1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { TagsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new TagsV1Api(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = id eq "27462f54-61c7-4140-b5da-d5dbe27fc6db"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw* (optional)
const sorters: string = name,-modified; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified** (optional)
const result = await apiInstance.listTagsV1({  });
console.log(result);
```

[[Back to top]](#)

