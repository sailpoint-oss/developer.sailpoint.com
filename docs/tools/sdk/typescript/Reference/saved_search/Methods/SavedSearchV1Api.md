---
id: v1-saved-search
title: SavedSearch
pagination_label: SavedSearch
sidebar_label: SavedSearch
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SavedSearch', 'v1SavedSearch']
slug: /tools/sdk/typescript/saved_search/methods/saved-search
tags: ['SDK', 'Software Development Kit', 'SavedSearch', 'v1SavedSearch']
---

# SavedSearchV1Api
  Use this API to implement saved search functionality. 
With saved search functionality in place, users can save search queries and then view those saved searches, as well as rerun them. 

Search queries in Identity Security Cloud can grow very long and specific, which can make reconstructing them difficult or tedious, so it can be especially helpful to save search queries. 
It also opens the possibility to configure Identity Security Cloud to run the saved queries on a schedule, which is essential to detecting user information and access changes throughout an organization&#39;s tenant and across all its sources. 
Refer to [Scheduled Search](https://developer.sailpoint.com/docs/api/v2025/scheduled-search/) for more information about running saved searches on a schedule. 

In Identity Security Cloud, users can save searches under a name, and then they can access that saved search and run it again when they want. 

Refer to [Managing Saved Searches](https://documentation.sailpoint.com/saas/help/search/saved-searches.html) for more information about saving searches and using them.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-saved-search-v1**](#create-saved-search-v1) | **POST** `/saved-searches/v1` | Create a saved search
[**delete-saved-search-v1**](#delete-saved-search-v1) | **DELETE** `/saved-searches/v1/{id}` | Delete document by id
[**execute-saved-search-v1**](#execute-saved-search-v1) | **POST** `/saved-searches/v1/{id}/execute` | Execute a saved search by id
[**get-saved-search-v1**](#get-saved-search-v1) | **GET** `/saved-searches/v1/{id}` | Return saved search by id
[**list-saved-searches-v1**](#list-saved-searches-v1) | **GET** `/saved-searches/v1` | A list of saved searches
[**put-saved-search-v1**](#put-saved-search-v1) | **PUT** `/saved-searches/v1/{id}` | Updates an existing saved search 


## create-saved-search-v1
Create a saved search
Creates a new saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-saved-search-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createSavedSearchV1RequestV1** | `CreateSavedSearchV1RequestV1` | The saved search to persist. | 

### Return type

`SavedsearchV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SavedSearchV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SavedSearchV1Api(configuration);
const createSavedSearchV1RequestV1: CreateSavedSearchV1RequestV1 = ; // The saved search to persist.
const result = await apiInstance.createSavedSearchV1({ createSavedSearchV1RequestV1: createSavedSearchV1RequestV1 });
console.log(result);
```

[[Back to top]](#)

## delete-saved-search-v1
Delete document by id
Deletes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-saved-search-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the requested document. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SavedSearchV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SavedSearchV1Api(configuration);
const id: string = 2c91808568c529c60168cca6f90c1313; // ID of the requested document.
const result = await apiInstance.deleteSavedSearchV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## execute-saved-search-v1
Execute a saved search by id
Executes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/execute-saved-search-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the requested document. |  [default to undefined]
**searchargumentsV1** | `SearchargumentsV1` | When saved search execution is triggered by a scheduled search, *scheduleId* will specify the ID of the triggering scheduled search.  If *scheduleId* is not specified (when execution is triggered by a UI test), the *owner* and *recipients* arguments must be provided.  | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SavedSearchV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SavedSearchV1Api(configuration);
const id: string = 2c91808568c529c60168cca6f90c1313; // ID of the requested document.
const searchargumentsV1: SearchargumentsV1 = ; // When saved search execution is triggered by a scheduled search, *scheduleId* will specify the ID of the triggering scheduled search.  If *scheduleId* is not specified (when execution is triggered by a UI test), the *owner* and *recipients* arguments must be provided. 
const result = await apiInstance.executeSavedSearchV1({ id: id, searchargumentsV1: searchargumentsV1 });
console.log(result);
```

[[Back to top]](#)

## get-saved-search-v1
Return saved search by id
Returns the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-saved-search-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the requested document. |  [default to undefined]

### Return type

`SavedsearchV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SavedSearchV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SavedSearchV1Api(configuration);
const id: string = 2c91808568c529c60168cca6f90c1313; // ID of the requested document.
const result = await apiInstance.getSavedSearchV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-saved-searches-v1
A list of saved searches
Returns a list of saved searches.


[API Spec](https://developer.sailpoint.com/docs/api/v1/list-saved-searches-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq* | [optional] [default to undefined]

### Return type

`Array<SavedsearchV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SavedSearchV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SavedSearchV1Api(configuration);
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = owner.id eq "7a724640-0c17-4ce9-a8c3-4a89738459c8"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq* (optional)
const result = await apiInstance.listSavedSearchesV1({  });
console.log(result);
```

[[Back to top]](#)

## put-saved-search-v1
Updates an existing saved search 
Updates an existing saved search. 

>**NOTE: You cannot update the `owner` of the saved search.**


[API Spec](https://developer.sailpoint.com/docs/api/v1/put-saved-search-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the requested document. |  [default to undefined]
**savedsearchV1** | `SavedsearchV1` | The saved search to persist. | 

### Return type

`SavedsearchV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SavedSearchV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SavedSearchV1Api(configuration);
const id: string = 2c91808568c529c60168cca6f90c1313; // ID of the requested document.
const savedsearchV1: SavedsearchV1 = ; // The saved search to persist.
const result = await apiInstance.putSavedSearchV1({ id: id, savedsearchV1: savedsearchV1 });
console.log(result);
```

[[Back to top]](#)

