---
id: v1-role-propagation
title: RolePropagation
pagination_label: RolePropagation
sidebar_label: RolePropagation
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RolePropagation', 'v1RolePropagation']
slug: /tools/sdk/typescript/role_propagation/methods/role-propagation
tags: ['SDK', 'Software Development Kit', 'RolePropagation', 'v1RolePropagation']
---

# RolePropagationV1Api
  Role Change Propagation ensures that any changes to the composition of a role’s access objects 
(entitlements, access profiles, or dimensions) are applied to all member identities. 
For example: If an entitlement is removed from a role, all identities assigned to that role 
should lose access to that entitlement as part of this process.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-role-propagation-v1**](#cancel-role-propagation-v1) | **POST** `/role-propagation/v1/terminate` | Terminate Role Propagation process
[**get-ongoing-role-propagation-v1**](#get-ongoing-role-propagation-v1) | **GET** `/role-propagation/v1/is-running` | Get ongoing Role Propagation process
[**get-role-propagation-config-v1**](#get-role-propagation-config-v1) | **GET** `/role-propagation-config/v1` | Get Role Change Propagation Configuration
[**get-role-propagation-status-v1**](#get-role-propagation-status-v1) | **GET** `/role-propagation/v1/{rolePropagationId}/status` | Get status of Role-Propagation process
[**set-role-propagation-config-v1**](#set-role-propagation-config-v1) | **PUT** `/role-propagation-config/v1` | Update Role Change Propagation Configuration
[**start-role-propagation-v1**](#start-role-propagation-v1) | **POST** `/role-propagation/v1` | Initiate Role Propagation process


## cancel-role-propagation-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Terminate Role Propagation process
This endpoint terminates the ongoing role change propagation process for a tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-role-propagation-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RolePropagationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolePropagationV1Api(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.cancelRolePropagationV1({  });
console.log(result);
```

[[Back to top]](#)

## get-ongoing-role-propagation-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get ongoing Role Propagation process
This endpoint returns the information of ongoing role change propagation process for a tenant. It returns the information whether the role propagation process is currently running or not, If it is running it returns the details of the ongoing role propagation process. The execution stage of the role propagation process can be one of the following: - PENDING - The role propagation process is queued to be executed. - DATA_AGGREGATION_RUNNING - The role propagation process is currently aggregating data. - LAUNCH_PROVISIONING - The role propagation process has started to provision the access to the identities. - SUCCEEDED - The role propagation process has successfully completed. - FAILED - The role propagation process has failed. - TERMINATED - The role propagation process was externally terminated.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-ongoing-role-propagation-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`RolePropagationOngoingResponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RolePropagationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolePropagationV1Api(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getOngoingRolePropagationV1({  });
console.log(result);
```

[[Back to top]](#)

## get-role-propagation-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get Role Change Propagation Configuration
This endpoint fetches the Role Change Propagation Configuration for the tenant

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-propagation-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`RolePropagationConfigResponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RolePropagationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolePropagationV1Api(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getRolePropagationConfigV1({  });
console.log(result);
```

[[Back to top]](#)

## get-role-propagation-status-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get status of Role-Propagation process
This endpoint returns the information of the specified role change propagation process. The execution stage of the role propagation process can be one of the following:
    - PENDING - The role propagation process is queued to be executed.
    - DATA_AGGREGATION_RUNNING - The role propagation process is currently aggregating data.
    - LAUNCH_PROVISIONING - The role propagation process has started to provision the access to the identities.
    - SUCCEEDED - The role propagation process has successfully completed.
    - FAILED - The role propagation process has failed.
    - TERMINATED - The role propagation process was externally terminated.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-propagation-status-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**rolePropagationId** | `string` | The ID of the role propagation process to retrieve the status for. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`RolePropagationStatusResponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RolePropagationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolePropagationV1Api(configuration);
const rolePropagationId: string = 47b9fb02-e12e-42ba-8bfe-1860d78c88eb; // The ID of the role propagation process to retrieve the status for.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getRolePropagationStatusV1({ rolePropagationId: rolePropagationId });
console.log(result);
```

[[Back to top]](#)

## set-role-propagation-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update Role Change Propagation Configuration
This endpoint enables or disables the Role Change Propagation Process for the tenant

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-role-propagation-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**rolePropagationConfigInputV1** | `RolePropagationConfigInputV1` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`RolePropagationConfigResponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { RolePropagationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolePropagationV1Api(configuration);
const rolePropagationConfigInputV1: RolePropagationConfigInputV1 = ; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.setRolePropagationConfigV1({ rolePropagationConfigInputV1: rolePropagationConfigInputV1 });
console.log(result);
```

[[Back to top]](#)

## start-role-propagation-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Initiate Role Propagation process
This endpoint initiates a role change propagation process for a tenant asynchronously.  If all preconditions are met, the request is accepted and a rolePropagationId is returned which  can be used to view the status.
API throws 4xx if any of the following conditions are met - Role propagation feature is disabled  - There is an ongoing role propagation for the tenant - Role refresh needs to be kicked off as part of the role propagation (skipRoleRefresh=false) and there is an ongoing refresh for the tenant

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-role-propagation-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**skipRoleRefresh** | `boolean` | When true, the role refresh is not performed. Keeping it false is recommended. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`RolePropagationResponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RolePropagationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolePropagationV1Api(configuration);
const skipRoleRefresh: boolean = true; // When true, the role refresh is not performed. Keeping it false is recommended. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.startRolePropagationV1({  });
console.log(result);
```

[[Back to top]](#)

