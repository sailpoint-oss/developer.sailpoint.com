---
id: v1-role-insights
title: RoleInsights
pagination_label: RoleInsights
sidebar_label: RoleInsights
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RoleInsights', 'v1RoleInsights']
slug: /tools/sdk/typescript/role_insights/methods/role-insights
tags: ['SDK', 'Software Development Kit', 'RoleInsights', 'v1RoleInsights']
---

# RoleInsightsV1Api
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-role-insight-requests-v1**](#create-role-insight-requests-v1) | **POST** `/role-insights/v1/requests` | Generate insights for roles
[**download-role-insights-entitlements-changes-v1**](#download-role-insights-entitlements-changes-v1) | **GET** `/role-insights/v1/{insightId}/entitlement-changes/download` | Download entitlement insights for a role
[**get-entitlement-changes-identities-v1**](#get-entitlement-changes-identities-v1) | **GET** `/role-insights/v1/{insightId}/entitlement-changes/{entitlementId}/identities` | Get identities for a suggested entitlement (for a role)
[**get-role-insight-v1**](#get-role-insight-v1) | **GET** `/role-insights/v1/{insightId}` | Get a single role insight
[**get-role-insights-current-entitlements-v1**](#get-role-insights-current-entitlements-v1) | **GET** `/role-insights/v1/{insightId}/current-entitlements` | Get current entitlement for a role
[**get-role-insights-entitlements-changes-v1**](#get-role-insights-entitlements-changes-v1) | **GET** `/role-insights/v1/{insightId}/entitlement-changes` | Get entitlement insights for a role
[**get-role-insights-requests-v1**](#get-role-insights-requests-v1) | **GET** `/role-insights/v1/requests/{id}` | Returns metadata from prior request.
[**get-role-insights-summary-v1**](#get-role-insights-summary-v1) | **GET** `/role-insights/v1/summary` | Get role insights summary information
[**get-role-insights-v1**](#get-role-insights-v1) | **GET** `/role-insights/v1` | Get role insights


## create-role-insight-requests-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Generate insights for roles
Submits a create role insights request to the role insights application. At this time there are no parameters. All business roles will be processed for the customer.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-role-insight-requests-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`RoleinsightsresponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RoleInsightsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RoleInsightsV1Api(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createRoleInsightRequestsV1({  });
console.log(result);
```

[[Back to top]](#)

## download-role-insights-entitlements-changes-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Download entitlement insights for a role
This endpoint returns the entitlement insights for a role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/download-role-insights-entitlements-changes-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**insightId** | `string` | The role insight id |  [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order. | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`string`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example

```typescript
import { RoleInsightsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RoleInsightsV1Api(configuration);
const insightId: string = 8c190e67-87aa-4ed9-a90b-d9d5344523fb; // The role insight id
const sorters: string = identitiesWithAccess; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order. (optional)
const filters: string = name sw "r"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.downloadRoleInsightsEntitlementsChangesV1({ insightId: insightId });
console.log(result);
```

[[Back to top]](#)

## get-entitlement-changes-identities-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get identities for a suggested entitlement (for a role)
Role insights suggests entitlements to be added for a role. This endpoint returns a list of identities in the role, with or without the entitlements, for a suggested entitlement so that the user can see which identities would be affected if the suggested entitlement were to be added to the role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-entitlement-changes-identities-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**insightId** | `string` | The role insight id |  [default to undefined]
**entitlementId** | `string` | The entitlement id |  [default to undefined]
**hasEntitlement** | `boolean` | Identity has this entitlement or not | [optional] [default to false]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<RoleinsightsidentitiesV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RoleInsightsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RoleInsightsV1Api(configuration);
const insightId: string = 8c190e67-87aa-4ed9-a90b-d9d5344523fb; // The role insight id
const entitlementId: string = 8c190e67-87aa-4ed9-a90b-d9d5344523fb; // The entitlement id
const hasEntitlement: boolean = true; // Identity has this entitlement or not (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const sorters: string = name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
const filters: string = name sw "Jan"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getEntitlementChangesIdentitiesV1({ insightId: insightId, entitlementId: entitlementId });
console.log(result);
```

[[Back to top]](#)

## get-role-insight-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a single role insight
This endpoint gets role insights information for a role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-insight-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**insightId** | `string` | The role insight id |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`RoleinsightV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RoleInsightsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RoleInsightsV1Api(configuration);
const insightId: string = 8c190e67-87aa-4ed9-a90b-d9d5344523fb; // The role insight id
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getRoleInsightV1({ insightId: insightId });
console.log(result);
```

[[Back to top]](#)

## get-role-insights-current-entitlements-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get current entitlement for a role
This endpoint gets the entitlements for a role. The term "current" is to distinguish from the entitlement(s) an insight might recommend adding.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-insights-current-entitlements-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**insightId** | `string` | The role insight id |  [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<RoleinsightsentitlementV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RoleInsightsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RoleInsightsV1Api(configuration);
const insightId: string = 8c190e67-87aa-4ed9-a90b-d9d5344523fb; // The role insight id
const filters: string = name sw "r"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getRoleInsightsCurrentEntitlementsV1({ insightId: insightId });
console.log(result);
```

[[Back to top]](#)

## get-role-insights-entitlements-changes-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get entitlement insights for a role
This endpoint returns entitlement insights for a role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-insights-entitlements-changes-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**insightId** | `string` | The role insight id |  [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<RoleinsightsentitlementchangesV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RoleInsightsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RoleInsightsV1Api(configuration);
const insightId: string = 8c190e67-87aa-4ed9-a90b-d9d5344523fb; // The role insight id
const sorters: string = sorters_example; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name** (optional)
const filters: string = name sw "Admin"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getRoleInsightsEntitlementsChangesV1({ insightId: insightId });
console.log(result);
```

[[Back to top]](#)

## get-role-insights-requests-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns metadata from prior request.
This endpoint returns details of a prior role insights request. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-insights-requests-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The role insights request id |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`RoleinsightsresponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RoleInsightsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RoleInsightsV1Api(configuration);
const id: string = 8c190e67-87aa-4ed9-a90b-d9d5344523fb; // The role insights request id
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getRoleInsightsRequestsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-role-insights-summary-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get role insights summary information
This method returns high level summary information for role insights for a customer.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-insights-summary-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`RoleinsightssummaryV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RoleInsightsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RoleInsightsV1Api(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getRoleInsightsSummaryV1({  });
console.log(result);
```

[[Back to top]](#)

## get-role-insights-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get role insights
This method returns detailed role insights for each role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-insights-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<RoleinsightV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RoleInsightsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RoleInsightsV1Api(configuration);
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const sorters: string = numberOfUpdates; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities** (optional)
const filters: string = name sw "John"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw* (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getRoleInsightsV1({  });
console.log(result);
```

[[Back to top]](#)

