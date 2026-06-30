---
id: v1-identity-history
title: IdentityHistory
pagination_label: IdentityHistory
sidebar_label: IdentityHistory
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'IdentityHistory', 'v1IdentityHistory']
slug: /tools/sdk/typescript/identity_history/methods/identity-history
tags: ['SDK', 'Software Development Kit', 'IdentityHistory', 'v1IdentityHistory']
---

# IdentityHistoryV1Api
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compare-identity-snapshots-access-type-v1**](#compare-identity-snapshots-access-type-v1) | **GET** `/historical-identities/v1/{id}/compare/{access-type}` | Gets a list of differences of specific accesstype for the given identity between 2 snapshots
[**compare-identity-snapshots-v1**](#compare-identity-snapshots-v1) | **GET** `/historical-identities/v1/{id}/compare` | Gets a difference of count for each access item types for the given identity between 2 snapshots
[**get-historical-identity-events-v1**](#get-historical-identity-events-v1) | **GET** `/historical-identities/v1/{id}/events` | List identity event history
[**get-historical-identity-v1**](#get-historical-identity-v1) | **GET** `/historical-identities/v1/{id}` | Get latest snapshot of identity
[**get-identity-snapshot-summary-v1**](#get-identity-snapshot-summary-v1) | **GET** `/historical-identities/v1/{id}/snapshot-summary` | Gets the summary for the event count for a specific identity
[**get-identity-snapshot-v1**](#get-identity-snapshot-v1) | **GET** `/historical-identities/v1/{id}/snapshots/{date}` | Gets an identity snapshot at a given date
[**get-identity-start-date-v1**](#get-identity-start-date-v1) | **GET** `/historical-identities/v1/{id}/start-date` | Gets the start date of the identity
[**list-historical-identities-v1**](#list-historical-identities-v1) | **GET** `/historical-identities/v1` | Lists all the identities
[**list-identity-access-items-v1**](#list-identity-access-items-v1) | **GET** `/historical-identities/v1/{id}/access-items` | List access items by identity
[**list-identity-snapshot-access-items-v1**](#list-identity-snapshot-access-items-v1) | **GET** `/historical-identities/v1/{id}/snapshots/{date}/access-items` | Gets the list of identity access items at a given date filterd by item type
[**list-identity-snapshots-v1**](#list-identity-snapshots-v1) | **GET** `/historical-identities/v1/{id}/snapshots` | Lists all the snapshots for the identity


## compare-identity-snapshots-access-type-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets a list of differences of specific accesstype for the given identity between 2 snapshots
This method gets a list of differences of specific accessType for the given identity between 2 snapshots Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v1/compare-identity-snapshots-access-type-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity id |  [default to undefined]
**accessType** | `'accessProfile' | 'account' | 'app' | 'entitlement' | 'role'` | The specific type which needs to be compared |  [default to undefined]
**accessAssociated** | `boolean` | Indicates if added or removed access needs to be returned. true - added, false - removed, null - both added &amp; removed | [optional] [default to undefined]
**snapshot1** | `string` | The snapshot 1 of identity | [optional] [default to undefined]
**snapshot2** | `string` | The snapshot 2 of identity | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<AccessitemdiffV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentityHistoryV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IdentityHistoryV1Api(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The identity id
const accessType: string = role; // The specific type which needs to be compared
const accessAssociated: boolean = 2007-03-01T13:00:00Z; // Indicates if added or removed access needs to be returned. true - added, false - removed, null - both added &amp; removed (optional)
const snapshot1: string = 2008-03-01T13:00:00Z; // The snapshot 1 of identity (optional)
const snapshot2: string = 2009-03-01T13:00:00Z; // The snapshot 2 of identity (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.compareIdentitySnapshotsAccessTypeV1({ id: id, accessType: accessType });
console.log(result);
```

[[Back to top]](#)

## compare-identity-snapshots-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets a difference of count for each access item types for the given identity between 2 snapshots
This method gets a difference of count for each access item types for the given identity between 2 snapshots Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v1/compare-identity-snapshots-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity id |  [default to undefined]
**snapshot1** | `string` | The snapshot 1 of identity | [optional] [default to undefined]
**snapshot2** | `string` | The snapshot 2 of identity | [optional] [default to undefined]
**accessItemTypes** | `Array<string>` | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned  | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<IdentitycompareresponseV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentityHistoryV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IdentityHistoryV1Api(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The identity id
const snapshot1: string = 2007-03-01T13:00:00Z; // The snapshot 1 of identity (optional)
const snapshot2: string = 2008-03-01T13:00:00Z; // The snapshot 2 of identity (optional)
const accessItemTypes: Array&lt;string&gt; = ; // An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned  (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.compareIdentitySnapshotsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-historical-identity-events-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List identity event history
This method retrieves all access events for the identity Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-historical-identity-events-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity id |  [default to undefined]
**from** | `string` | The optional instant until which access events are returned | [optional] [default to undefined]
**eventTypes** | `Array<string>` | An optional list of event types to return.  If null or empty, all events are returned | [optional] [default to undefined]
**accessItemTypes** | `Array<string>` | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<GetHistoricalIdentityEventsV1200ResponseInnerV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentityHistoryV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IdentityHistoryV1Api(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The identity id
const from: string = 2024-03-01T13:00:00Z; // The optional instant until which access events are returned (optional)
const eventTypes: Array&lt;string&gt; = ["AccessAddedEvent","AccessRemovedEvent"]; // An optional list of event types to return.  If null or empty, all events are returned (optional)
const accessItemTypes: Array&lt;string&gt; = ["entitlement","account"]; // An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getHistoricalIdentityEventsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-historical-identity-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get latest snapshot of identity
This method retrieves a specified identity Requires authorization scope of 'idn:identity-history:read'

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-historical-identity-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity id |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`IdentityhistoryresponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentityHistoryV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IdentityHistoryV1Api(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The identity id
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getHistoricalIdentityV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-identity-snapshot-summary-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets the summary for the event count for a specific identity
This method gets the summary for the event count for a specific identity by month/day Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-snapshot-summary-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity id |  [default to undefined]
**before** | `string` | The date before which snapshot summary is required | [optional] [default to undefined]
**interval** | `'day' | 'month'` | The interval indicating day or month. Defaults to month if not specified | [optional] [default to undefined]
**timeZone** | `string` | The time zone. Defaults to UTC if not provided | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<MetricresponseV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentityHistoryV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IdentityHistoryV1Api(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The identity id
const before: string = 2007-03-01T13:00:00Z; // The date before which snapshot summary is required (optional)
const interval: string = interval_example; // The interval indicating day or month. Defaults to month if not specified (optional)
const timeZone: string = UTC; // The time zone. Defaults to UTC if not provided (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getIdentitySnapshotSummaryV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-identity-snapshot-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets an identity snapshot at a given date
This method retrieves a specified identity snapshot at a given date Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-snapshot-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity id |  [default to undefined]
**date** | `string` | The specified date |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`IdentityhistoryresponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentityHistoryV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IdentityHistoryV1Api(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The identity id
const date: string = 2007-03-01T13:00:00Z; // The specified date
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getIdentitySnapshotV1({ id: id, date: date });
console.log(result);
```

[[Back to top]](#)

## get-identity-start-date-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets the start date of the identity
This method retrieves start date of the identity Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-start-date-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity id |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`string`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentityHistoryV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IdentityHistoryV1Api(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The identity id
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getIdentityStartDateV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-historical-identities-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Lists all the identities
This gets the list of identities for the customer. This list end point does not support count=true request param. The total  count of identities would never be returned even if the count param is specified in the request Requires authorization scope of 'idn:identity-history:read'

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-historical-identities-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**startsWithQuery** | `string` | This param is used for starts-with search for first, last and display name of the identity | [optional] [default to undefined]
**isDeleted** | `boolean` | Indicates if we want to only list down deleted identities or not. | [optional] [default to undefined]
**isActive** | `boolean` | Indicates if we want to only list active or inactive identities. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<IdentitylistitemV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentityHistoryV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IdentityHistoryV1Api(configuration);
const startsWithQuery: string = Ada; // This param is used for starts-with search for first, last and display name of the identity (optional)
const isDeleted: boolean = true; // Indicates if we want to only list down deleted identities or not. (optional)
const isActive: boolean = true; // Indicates if we want to only list active or inactive identities. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.listHistoricalIdentitiesV1({  });
console.log(result);
```

[[Back to top]](#)

## list-identity-access-items-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List access items by identity
This method retrieves a list of access item for the identity filtered by the access item type


[API Spec](https://developer.sailpoint.com/docs/api/v1/list-identity-access-items-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity id |  [default to undefined]
**type** | `'account' | 'entitlement' | 'app' | 'accessProfile' | 'role'` | The type of access item for the identity. If not provided, it defaults to account | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<ListIdentityAccessItemsV1200ResponseInnerV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentityHistoryV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IdentityHistoryV1Api(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The identity id
const type: string = account; // The type of access item for the identity. If not provided, it defaults to account (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listIdentityAccessItemsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-identity-snapshot-access-items-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets the list of identity access items at a given date filterd by item type
This method retrieves the list of identity access items at a given date filterd by item type Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-identity-snapshot-access-items-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity id |  [default to undefined]
**date** | `string` | The specified date |  [default to undefined]
**type** | `string` | The access item type | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<ListIdentitySnapshotAccessItemsV1200ResponseInnerV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentityHistoryV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IdentityHistoryV1Api(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The identity id
const date: string = 2007-03-01T13:00:00Z; // The specified date
const type: string = account; // The access item type (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.listIdentitySnapshotAccessItemsV1({ id: id, date: date });
console.log(result);
```

[[Back to top]](#)

## list-identity-snapshots-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Lists all the snapshots for the identity
This method retrieves all the snapshots for the identity Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-identity-snapshots-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity id |  [default to undefined]
**start** | `string` | The specified start date | [optional] [default to undefined]
**interval** | `'day' | 'month'` | The interval indicating the range in day or month for the specified interval-name | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<IdentitysnapshotsummaryresponseV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentityHistoryV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IdentityHistoryV1Api(configuration);
const id: string = 8c190e6787aa4ed9a90bd9d5344523fb; // The identity id
const start: string = 2007-03-01T13:00:00Z; // The specified start date (optional)
const interval: string = interval_example; // The interval indicating the range in day or month for the specified interval-name (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.listIdentitySnapshotsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

