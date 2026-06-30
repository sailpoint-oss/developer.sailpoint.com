---
id: v1-search
title: Search
pagination_label: Search
sidebar_label: Search
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Search', 'v1Search']
slug: /tools/sdk/typescript/search/methods/search
tags: ['SDK', 'Software Development Kit', 'Search', 'v1Search']
---

# SearchV1Api
  Use this API to implement search functionality. 
With search functionality in place, users can search their tenants for nearly any information from throughout their organizations. 

Identity Security Cloud enables organizations to store user data from across all their connected sources and manage the users&#39; access, so the ability to query and filter that data is essential.  
Its search goes through all those sources and finds the results quickly and specifically. 

The search query is flexible - it can be very broad or very narrow. 
The search only returns results for searchable objects it is filtering for. 
The following objects are searchable: identities, roles, access profiles, entitlements, events, and account activities. 
By default, no filter is applied, so a search for &quot;Ad&quot; returns both the identity &quot;Adam.Archer&quot; as well as the role &quot;Administrator.&quot;

Users can further narrow their results by using Identity Security Cloud&#39;s specific syntax and punctuation to structure their queries. 
For example, the query &quot;attributes.location:austin AND NOT manager.name:amanda.ross&quot; returns all results associated with the Austin location, but it excludes those associated with the manager Amanda Ross.
Refer to [Building a Search Query](https://documentation.sailpoint.com/saas/help/search/building-query.html) for more information about how to construct specific search queries. 

Refer to [Using Search](https://documentation.sailpoint.com/saas/help/search/index.html) for more information about Identity Security Cloud&#39;s search and its different possibilities. 

The search feature uses Elasticsearch as a datastore and query engine. 
The power of Elasticsearch makes this feature suitable for ad-hoc reporting.
However, data from the operational databases (ex. identities, roles, events, etc) has to be ingested into Elasticsearch. 
This ingestion process introduces a latency from when the operational data is created to when it is available in search. 
Depending on the system load, this can take a few seconds to a few minutes. 
Please keep this latency in mind when you use search.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search-aggregate-v1**](#search-aggregate-v1) | **POST** `/search/v1/aggregate` | Perform a search query aggregation
[**search-count-v1**](#search-count-v1) | **POST** `/search/v1/count` | Count documents satisfying a query
[**search-get-v1**](#search-get-v1) | **GET** `/search/v1/{index}/{id}` | Get a document by id
[**search-post-v1**](#search-post-v1) | **POST** `/search/v1` | Perform search


## search-aggregate-v1
Perform a search query aggregation
Performs a search query aggregation and returns the aggregation result. By default, you can page a maximum of 10,000 search result records.  To page past 10,000 records, you can use searchAfter paging.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement searchAfter paging. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/search-aggregate-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchV1** | `SearchV1` |  | 
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`AggregationresultV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/csv

### Example

```typescript
import { SearchV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SearchV1Api(configuration);
const searchV1: SearchV1 = ; // 
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.searchAggregateV1({ searchV1: searchV1 });
console.log(result);
```

[[Back to top]](#)

## search-count-v1
Count documents satisfying a query
Performs a search with a provided query and returns the count of results in the X-Total-Count header.

[API Spec](https://developer.sailpoint.com/docs/api/v1/search-count-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchV1** | `SearchV1` |  | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SearchV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SearchV1Api(configuration);
const searchV1: SearchV1 = ; // 
const result = await apiInstance.searchCountV1({ searchV1: searchV1 });
console.log(result);
```

[[Back to top]](#)

## search-get-v1
Get a document by id
Fetches a single document from the specified index, using the specified document ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/search-get-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**index** | `'accessprofiles' | 'accountactivities' | 'entitlements' | 'events' | 'identities' | 'roles'` | The index from which to fetch the specified document.  The currently supported index names are: *accessprofiles*, *accountactivities*, *entitlements*, *events*, *identities*, and *roles*.  |  [default to undefined]
**id** | `string` | ID of the requested document. |  [default to undefined]

### Return type

`object`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SearchV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SearchV1Api(configuration);
const index: string = identities; // The index from which to fetch the specified document.  The currently supported index names are: *accessprofiles*, *accountactivities*, *entitlements*, *events*, *identities*, and *roles*. 
const id: string = 2c91808568c529c60168cca6f90c1313; // ID of the requested document.
const result = await apiInstance.searchGetV1({ index: index, id: id });
console.log(result);
```

[[Back to top]](#)

## search-post-v1
Perform search
Perform a search with the provided query and return a matching result collection. To page past 10,000 records, you can use `searchAfter` paging.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement `searchAfter` paging. The search query itself has a size limitation of approximately 800 objects when filtering by large lists of IDs or values (e.g., using `terms` filters with extensive lists).

[API Spec](https://developer.sailpoint.com/docs/api/v1/search-post-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchV1** | `SearchV1` |  | 
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<object>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SearchV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SearchV1Api(configuration);
const searchV1: SearchV1 = ; // 
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 10000; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.searchPostV1({ searchV1: searchV1 });
console.log(result);
```

[[Back to top]](#)

