---
id: v1-multi-host-integration
title: MultiHostIntegration
pagination_label: MultiHostIntegration
sidebar_label: MultiHostIntegration
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MultiHostIntegration', 'v1MultiHostIntegration']
slug: /tools/sdk/typescript/multi_host_integration/methods/multi-host-integration
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegration', 'v1MultiHostIntegration']
---

# MultiHostIntegrationV1Api
  Use this API to build a Multi-Host Integration.
Multi-Host Integration will help customers to configure and manage similar type of target system in Identity Security Cloud.
In Identity Security Cloud, administrators can create a Multi-Host Integration by going to Admin &gt; Connections &gt; Multi-Host Sources and selecting &#39;Create.&#39;
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-multi-host-integration-v1**](#create-multi-host-integration-v1) | **POST** `/multihosts/v1` | Create multi-host integration
[**create-sources-within-multi-host-v1**](#create-sources-within-multi-host-v1) | **POST** `/multihosts/v1/{multihostId}` | Create sources within multi-host integration
[**delete-multi-host-sources-v1**](#delete-multi-host-sources-v1) | **POST** `/multihosts/v1/{multiHostId}/sources/bulk-delete` | Delete sources within multi-host integration
[**delete-multi-host-v1**](#delete-multi-host-v1) | **DELETE** `/multihosts/v1/{multihostId}` | Delete multi-host integration
[**get-acct-aggregation-groups-v1**](#get-acct-aggregation-groups-v1) | **GET** `/multihosts/v1/{multihostId}/acctAggregationGroups` | List account-aggregation-groups by multi-host id
[**get-entitlement-aggregation-groups-v1**](#get-entitlement-aggregation-groups-v1) | **GET** `/multihosts/v1/{multiHostId}/entitlementAggregationGroups` | List entitlement-aggregation-groups by integration id
[**get-multi-host-integrations-list-v1**](#get-multi-host-integrations-list-v1) | **GET** `/multihosts/v1` | List all existing multi-host integrations
[**get-multi-host-integrations-v1**](#get-multi-host-integrations-v1) | **GET** `/multihosts/v1/{multihostId}` | Get multi-host integration by id
[**get-multi-host-source-creation-errors-v1**](#get-multi-host-source-creation-errors-v1) | **GET** `/multihosts/v1/{multiHostId}/sources/errors` | List multi-host source creation errors
[**get-multihost-integration-types-v1**](#get-multihost-integration-types-v1) | **GET** `/multihosts/v1/types` | List multi-host integration types
[**get-sources-within-multi-host-v1**](#get-sources-within-multi-host-v1) | **GET** `/multihosts/v1/{multihostId}/sources` | List sources within multi-host integration
[**test-connection-multi-host-sources-v1**](#test-connection-multi-host-sources-v1) | **POST** `/multihosts/v1/{multihostId}/sources/testConnection` | Test configuration for multi-host integration
[**test-source-connection-multihost-v1**](#test-source-connection-multihost-v1) | **GET** `/multihosts/v1/{multihostId}/sources/{sourceId}/testConnection` | Test configuration for multi-host integration\&#39;s single source
[**update-multi-host-sources-v1**](#update-multi-host-sources-v1) | **PATCH** `/multihosts/v1/{multihostId}` | Update multi-host integration


## create-multi-host-integration-v1
Create multi-host integration
This API is used to create Multi-Host Integration. Multi-host Integration holds similar types of sources.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-multi-host-integration-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostintegrationscreateV1** | `MultihostintegrationscreateV1` | The specifics of the Multi-Host Integration to create | 

### Return type

`MultihostintegrationsV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MultiHostIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MultiHostIntegrationV1Api(configuration);
const multihostintegrationscreateV1: MultihostintegrationscreateV1 = ; // The specifics of the Multi-Host Integration to create
const result = await apiInstance.createMultiHostIntegrationV1({ multihostintegrationscreateV1: multihostintegrationscreateV1 });
console.log(result);
```

[[Back to top]](#)

## create-sources-within-multi-host-v1
Create sources within multi-host integration
This API is used to create sources within Multi-Host Integration. Multi-Host Integration holds similar types of sources.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-sources-within-multi-host-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of the Multi-Host Integration. |  [default to undefined]
**multihostintegrationscreatesourcesV1** | `Array<MultihostintegrationscreatesourcesV1>` | The specifics of the sources to create within Multi-Host Integration. | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MultiHostIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MultiHostIntegrationV1Api(configuration);
const multihostId: string = 2c91808568c529c60168cca6f90c1326; // ID of the Multi-Host Integration.
const multihostintegrationscreatesourcesV1: Array&lt;MultihostintegrationscreatesourcesV1&gt; = ; // The specifics of the sources to create within Multi-Host Integration.
const result = await apiInstance.createSourcesWithinMultiHostV1({ multihostId: multihostId, multihostintegrationscreatesourcesV1: multihostintegrationscreatesourcesV1 });
console.log(result);
```

[[Back to top]](#)

## delete-multi-host-sources-v1
Delete sources within multi-host integration
This endpoint performs bulk sources delete within Multi-Host Integration via a list of supplied IDs.

The following rights are required to access this endpoint: idn:multihosts:delete, idn:sources:delete

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-multi-host-sources-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multiHostId** | `string` | ID of the Multi-Host Integration |  [default to undefined]
**requestBody** | `Array<string>` | The delete bulk sources within multi-host integration request body | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MultiHostIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MultiHostIntegrationV1Api(configuration);
const multiHostId: string = 004091cb79b04636b88662afa50a4440; // ID of the Multi-Host Integration
const requestBody: Array&lt;string&gt; = ; // The delete bulk sources within multi-host integration request body
const result = await apiInstance.deleteMultiHostSourcesV1({ multiHostId: multiHostId, requestBody: requestBody });
console.log(result);
```

[[Back to top]](#)

## delete-multi-host-v1
Delete multi-host integration
Delete an existing Multi-Host Integration by ID.  

A token with Org Admin or Multi Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-multi-host-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of Multi-Host Integration to delete. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MultiHostIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MultiHostIntegrationV1Api(configuration);
const multihostId: string = 2c91808568c529c60168cca6f90c1326; // ID of Multi-Host Integration to delete.
const result = await apiInstance.deleteMultiHostV1({ multihostId: multihostId });
console.log(result);
```

[[Back to top]](#)

## get-acct-aggregation-groups-v1
List account-aggregation-groups by multi-host id
This API will return array of account aggregation groups within provided Multi-Host Integration ID.
A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-acct-aggregation-groups-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of the Multi-Host Integration to update |  [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]

### Return type

`Array<MultihostintegrationsaggscheduleupdateV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MultiHostIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MultiHostIntegrationV1Api(configuration);
const multihostId: string = aMultiHostId; // ID of the Multi-Host Integration to update
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getAcctAggregationGroupsV1({ multihostId: multihostId });
console.log(result);
```

[[Back to top]](#)

## get-entitlement-aggregation-groups-v1
List entitlement-aggregation-groups by integration id
This API will return array of aggregation groups within provided Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-entitlement-aggregation-groups-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multiHostId** | `string` | ID of the Multi-Host Integration to update |  [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]

### Return type

`Array<MultihostintegrationsaggscheduleupdateV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MultiHostIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MultiHostIntegrationV1Api(configuration);
const multiHostId: string = aMultiHostId; // ID of the Multi-Host Integration to update
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getEntitlementAggregationGroupsV1({ multiHostId: multiHostId });
console.log(result);
```

[[Back to top]](#)

## get-multi-host-integrations-list-v1
List all existing multi-host integrations
Get a list of Multi-Host Integrations.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-multi-host-integrations-list-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in* | [optional] [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**forSubadmin** | `string` | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity\&#39;s ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. | [optional] [default to undefined]

### Return type

`Array<MultihostintegrationsV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MultiHostIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MultiHostIntegrationV1Api(configuration);
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const sorters: string = name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
const filters: string = id eq 2c91808b6ef1d43e016efba0ce470904; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in* (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const forSubadmin: string = 5168015d32f890ca15812c9180835d2e; // If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity\&#39;s ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)
const result = await apiInstance.getMultiHostIntegrationsListV1({  });
console.log(result);
```

[[Back to top]](#)

## get-multi-host-integrations-v1
Get multi-host integration by id
Get an existing Multi-Host Integration. 

A token with Org Admin or Multi-Host Integration Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-multi-host-integrations-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of the Multi-Host Integration. |  [default to undefined]

### Return type

`MultihostintegrationsV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MultiHostIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MultiHostIntegrationV1Api(configuration);
const multihostId: string = 2c91808568c529c60168cca6f90c1326; // ID of the Multi-Host Integration.
const result = await apiInstance.getMultiHostIntegrationsV1({ multihostId: multihostId });
console.log(result);
```

[[Back to top]](#)

## get-multi-host-source-creation-errors-v1
List multi-host source creation errors
Get a list of sources creation errors within Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-multi-host-source-creation-errors-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multiHostId** | `string` | ID of the Multi-Host Integration |  [default to undefined]

### Return type

`Array<SourcecreationerrorsV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MultiHostIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MultiHostIntegrationV1Api(configuration);
const multiHostId: string = 004091cb79b04636b88662afa50a4440; // ID of the Multi-Host Integration
const result = await apiInstance.getMultiHostSourceCreationErrorsV1({ multiHostId: multiHostId });
console.log(result);
```

[[Back to top]](#)

## get-multihost-integration-types-v1
List multi-host integration types
This API endpoint returns the current list of supported Multi-Host Integration types.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-multihost-integration-types-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`Array<MultihostintegrationtemplatetypeV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MultiHostIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MultiHostIntegrationV1Api(configuration);
const result = await apiInstance.getMultihostIntegrationTypesV1({  });
console.log(result);
```

[[Back to top]](#)

## get-sources-within-multi-host-v1
List sources within multi-host integration
Get a list of sources within Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sources-within-multi-host-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of the Multi-Host Integration to update |  [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in* | [optional] [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<MultihostsourcesV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MultiHostIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MultiHostIntegrationV1Api(configuration);
const multihostId: string = aMultiHostId; // ID of the Multi-Host Integration to update
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const sorters: string = name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
const filters: string = id eq 2c91808b6ef1d43e016efba0ce470904; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in* (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getSourcesWithinMultiHostV1({ multihostId: multihostId });
console.log(result);
```

[[Back to top]](#)

## test-connection-multi-host-sources-v1
Test configuration for multi-host integration
This endpoint performs a more detailed validation of the Multi-Host Integration's configuration.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-connection-multi-host-sources-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of the Multi-Host Integration |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MultiHostIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MultiHostIntegrationV1Api(configuration);
const multihostId: string = 2c91808568c529c60168cca6f90c1324; // ID of the Multi-Host Integration
const result = await apiInstance.testConnectionMultiHostSourcesV1({ multihostId: multihostId });
console.log(result);
```

[[Back to top]](#)

## test-source-connection-multihost-v1
Test configuration for multi-host integration\'s single source
This endpoint performs a more detailed validation of the source's configuration.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-source-connection-multihost-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of the Multi-Host Integration |  [default to undefined]
**sourceId** | `string` | ID of the source within the Multi-Host Integration |  [default to undefined]

### Return type

`TestSourceConnectionMultihostV1200ResponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MultiHostIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MultiHostIntegrationV1Api(configuration);
const multihostId: string = 2c91808568c529c60168cca6f90c1326; // ID of the Multi-Host Integration
const sourceId: string = 2c91808568c529f60168cca6f90c1324; // ID of the source within the Multi-Host Integration
const result = await apiInstance.testSourceConnectionMultihostV1({ multihostId: multihostId, sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## update-multi-host-sources-v1
Update multi-host integration
Update existing sources within Multi-Host Integration.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-multi-host-sources-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of the Multi-Host Integration to update. |  [default to undefined]
**updateMultiHostSourcesV1RequestInnerV1** | `Array<UpdateMultiHostSourcesV1RequestInnerV1>` | This endpoint allows you to update a Multi-Host Integration.  | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { MultiHostIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MultiHostIntegrationV1Api(configuration);
const multihostId: string = anId; // ID of the Multi-Host Integration to update.
const updateMultiHostSourcesV1RequestInnerV1: Array&lt;UpdateMultiHostSourcesV1RequestInnerV1&gt; = [{"op":"add","path":"/description","value":"MDK Multi-Host Integration 222 description"}]; // This endpoint allows you to update a Multi-Host Integration. 
const result = await apiInstance.updateMultiHostSourcesV1({ multihostId: multihostId, updateMultiHostSourcesV1RequestInnerV1: updateMultiHostSourcesV1RequestInnerV1 });
console.log(result);
```

[[Back to top]](#)

