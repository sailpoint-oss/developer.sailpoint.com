---
id: v1-data-access-security
title: DataAccessSecurity
pagination_label: DataAccessSecurity
sidebar_label: DataAccessSecurity
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'DataAccessSecurity', 'v1DataAccessSecurity']
slug: /tools/sdk/typescript/data_access_security/methods/data-access-security
tags: ['SDK', 'Software Development Kit', 'DataAccessSecurity', 'v1DataAccessSecurity']
---

# DataAccessSecurityV1Api
  Use this API to enable data ownership election campaigns, assign resource owners, and respond to identity lifecycle events to maintain continuous accountability.
This API can also trigger and manage DAS tasks such as scans-starting them on demand, updating configurations or schedules, and retrieving statuses. Additionally, you can onboard and manage applications at scale by creating and configuring them, setting scanning schedules, retrieving metadata, and associating them with Virtual Appliances and Identity Collectors.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-task-v1**](#cancel-task-v1) | **POST** `/das/v1/tasks/cancel/{id}` | Cancel a DAS task.
[**create-application-v1**](#create-application-v1) | **POST** `/das/v1/applications` | Create application
[**create-identity-collector-v1**](#create-identity-collector-v1) | **POST** `/das/identity-collectors/v1` | Create identity collector
[**create-schedule-v1**](#create-schedule-v1) | **POST** `/das/v1/tasks/schedules` | Create a new schedule.
[**das-v1-owners-assign-post**](#das-v1-owners-assign-post) | **POST** `/das/v1/owners/assign` | Assign owner to application resource.
[**das-v1-owners-owner-identity-id-resources-get**](#das-v1-owners-owner-identity-id-resources-get) | **GET** `/das/v1/owners/{ownerIdentityId}/resources` | List resources for owner.
[**das-v1-owners-reelect-post**](#das-v1-owners-reelect-post) | **POST** `/das/v1/owners/reelect` | Re-elect resource owner.
[**das-v1-owners-resources-resource-id-get**](#das-v1-owners-resources-resource-id-get) | **GET** `/das/v1/owners/resources/{resourceId}` | List owners for resource.
[**das-v1-owners-source-identity-id-reassign-destination-identity-id-post**](#das-v1-owners-source-identity-id-reassign-destination-identity-id-post) | **POST** `/das/v1/owners/{sourceIdentityId}/reassign/{destinationIdentityId}` | Reassign resource owner.
[**delete-application-v1**](#delete-application-v1) | **DELETE** `/das/v1/applications/{id}` | Delete an application by identifier.
[**delete-identity-collector-v1**](#delete-identity-collector-v1) | **DELETE** `/das/identity-collectors/v1/{id}` | Delete identity collector by identifier
[**delete-schedule-v1**](#delete-schedule-v1) | **DELETE** `/das/v1/tasks/schedules/{id}` | Delete a DAS schedule.
[**delete-task-v1**](#delete-task-v1) | **DELETE** `/das/v1/tasks/{id}` | Delete a DAS task.
[**get-application-v1**](#get-application-v1) | **GET** `/das/v1/applications/{id}` | Retrieve application details by identifier.
[**get-applications-v1**](#get-applications-v1) | **GET** `/das/v1/applications` | Search applications in DAS.
[**get-owners-v1**](#get-owners-v1) | **GET** `/das/v1/owners/applications/{appId}` | Retrieve owners per application.
[**get-schedule-v1**](#get-schedule-v1) | **GET** `/das/v1/tasks/schedules/{id}` | Get a DAS schedule.
[**get-schedules-v1**](#get-schedules-v1) | **GET** `/das/v1/tasks/schedules` | List all schedules.
[**get-task-v1**](#get-task-v1) | **GET** `/das/v1/tasks/{id}` | Get a DAS task.
[**get-tasks-v1**](#get-tasks-v1) | **GET** `/das/v1/tasks` | Lists all DAS tasks.
[**list-identity-collectors-v1**](#list-identity-collectors-v1) | **GET** `/das/identity-collectors/v1` | List identity collectors
[**put-application-v1**](#put-application-v1) | **PUT** `/das/v1/applications/{id}` | Update application by identifier.
[**put-identity-collector-v1**](#put-identity-collector-v1) | **PUT** `/das/identity-collectors/v1/{id}` | Update identity collector by identifier
[**put-schedule-v1**](#put-schedule-v1) | **PUT** `/das/v1/tasks/schedules/{id}` | Update a schedule.
[**start-task-rerun-v1**](#start-task-rerun-v1) | **POST** `/das/v1/tasks/rerun/{id}` | Rerun a DAS task.


## cancel-task-v1
Cancel a DAS task.
This end-point sends a request to cancel a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-task-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the task to cancel. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const id: number = 1001; // The unique identifier of the task to cancel.
const result = await apiInstance.cancelTaskV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## create-application-v1
Create application
This endpoint creates a new application in Data Access Security with the specified configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-application-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**basecreateapplicationrequestV1** | `BasecreateapplicationrequestV1` | Request body containing the details required to create a new application. | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const basecreateapplicationrequestV1: BasecreateapplicationrequestV1 = ; // Request body containing the details required to create a new application.
const result = await apiInstance.createApplicationV1({ basecreateapplicationrequestV1: basecreateapplicationrequestV1 });
console.log(result);
```

[[Back to top]](#)

## create-identity-collector-v1
Create identity collector
This endpoint creates a new identity collector in Data Access Security for the specified source. The identity collector type is derived from the source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-identity-collector-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createidentitycollectorrequestV1** | `CreateidentitycollectorrequestV1` | Request body containing the details required to create a new identity collector. | 

### Return type

`CreateIdentityCollectorV1200ResponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const createidentitycollectorrequestV1: CreateidentitycollectorrequestV1 = ; // Request body containing the details required to create a new identity collector.
const result = await apiInstance.createIdentityCollectorV1({ createidentitycollectorrequestV1: createidentitycollectorrequestV1 });
console.log(result);
```

[[Back to top]](#)

## create-schedule-v1
Create a new schedule.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-schedule-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createschedulerequestV1** | `CreateschedulerequestV1` |  | 

### Return type

`number`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const createschedulerequestV1: CreateschedulerequestV1 = ; // 
const result = await apiInstance.createScheduleV1({ createschedulerequestV1: createschedulerequestV1 });
console.log(result);
```

[[Back to top]](#)

## das-v1-owners-assign-post
Assign owner to application resource.


[API Spec](https://developer.sailpoint.com/docs/api/v1/das-v1-owners-assign-post)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**assignresourceownerrequestV1** | `AssignresourceownerrequestV1` | The request body must contain the application ID, resource path, and identity ID to be assigned as the resource owner. | 

### Return type

`number`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const assignresourceownerrequestV1: AssignresourceownerrequestV1 = ; // The request body must contain the application ID, resource path, and identity ID to be assigned as the resource owner.
const result = await apiInstance.dasV1OwnersAssignPost({ assignresourceownerrequestV1: assignresourceownerrequestV1 });
console.log(result);
```

[[Back to top]](#)

## das-v1-owners-owner-identity-id-resources-get
List resources for owner.


[API Spec](https://developer.sailpoint.com/docs/api/v1/das-v1-owners-owner-identity-id-resources-get)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ownerIdentityId** | `string` | Unique identifier for the owner. This should be a UUID representing the owner\&#39;s identity. |  [default to undefined]
**limit** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 250]
**offset** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 0]

### Return type

`Array<ResourcemodelV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const ownerIdentityId: string = a3f1c2d4-5678-4e9b-8c2d-123456789abc; // Unique identifier for the owner. This should be a UUID representing the owner\&#39;s identity.
const limit: number = 250; // Not applicable for this endpoint. Do not use. (optional)
const offset: number = 0; // Not applicable for this endpoint. Do not use. (optional)
const result = await apiInstance.dasV1OwnersOwnerIdentityIdResourcesGet({ ownerIdentityId: ownerIdentityId });
console.log(result);
```

[[Back to top]](#)

## das-v1-owners-reelect-post
Re-elect resource owner.


[API Spec](https://developer.sailpoint.com/docs/api/v1/das-v1-owners-reelect-post)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**reelectrequestV1** | `ReelectrequestV1` | The request body must contain details for re-electing a resource owner. Date/time fields should use epoch format in seconds. | 

### Return type

`number`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const reelectrequestV1: ReelectrequestV1 = ; // The request body must contain details for re-electing a resource owner. Date/time fields should use epoch format in seconds.
const result = await apiInstance.dasV1OwnersReelectPost({ reelectrequestV1: reelectrequestV1 });
console.log(result);
```

[[Back to top]](#)

## das-v1-owners-resources-resource-id-get
List owners for resource.


[API Spec](https://developer.sailpoint.com/docs/api/v1/das-v1-owners-resources-resource-id-get)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**resourceId** | `number` | Unique identifier for the resource. |  [default to undefined]
**limit** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 250]
**offset** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 0]

### Return type

`Array<string>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const resourceId: number = 101; // Unique identifier for the resource.
const limit: number = 250; // Not applicable for this endpoint. Do not use. (optional)
const offset: number = 0; // Not applicable for this endpoint. Do not use. (optional)
const result = await apiInstance.dasV1OwnersResourcesResourceIdGet({ resourceId: resourceId });
console.log(result);
```

[[Back to top]](#)

## das-v1-owners-source-identity-id-reassign-destination-identity-id-post
Reassign resource owner.


[API Spec](https://developer.sailpoint.com/docs/api/v1/das-v1-owners-source-identity-id-reassign-destination-identity-id-post)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceIdentityId** | `string` | Unique identifier for the source owner. This should be a UUID representing the identity to reassign from. |  [default to undefined]
**destinationIdentityId** | `string` | Unique identifier for the destination owner. This should be a UUID representing the identity to reassign to. |  [default to undefined]

### Return type

`number`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const sourceIdentityId: string = a3f1c2d4-5678-4e9b-8c2d-123456789abc; // Unique identifier for the source owner. This should be a UUID representing the identity to reassign from.
const destinationIdentityId: string = b4e2d3c5-6789-4f0a-9d3e-234567890bcd; // Unique identifier for the destination owner. This should be a UUID representing the identity to reassign to.
const result = await apiInstance.dasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost({ sourceIdentityId: sourceIdentityId, destinationIdentityId: destinationIdentityId });
console.log(result);
```

[[Back to top]](#)

## delete-application-v1
Delete an application by identifier.
This endpoint deletes an application from Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-application-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the application to delete. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const id: number = 12345; // The unique identifier of the application to delete.
const result = await apiInstance.deleteApplicationV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-identity-collector-v1
Delete identity collector by identifier
This endpoint deletes an identity collector from Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-identity-collector-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the identity collector to delete. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const id: number = 12345; // The unique identifier of the identity collector to delete.
const result = await apiInstance.deleteIdentityCollectorV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-schedule-v1
Delete a DAS schedule.
This end-point sends a request to delete a schedule in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-schedule-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the schedule to delete. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const id: number = 1001; // The unique identifier of the schedule to delete.
const result = await apiInstance.deleteScheduleV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-task-v1
Delete a DAS task.
This end-point sends a request to delete a task in Data Access Security.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-task-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the task to delete. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const id: number = 1001; // The unique identifier of the task to delete.
const result = await apiInstance.deleteTaskV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-application-v1
Retrieve application details by identifier.
This endpoint retrieves the details of a specific application in Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-application-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the application to retrieve. |  [default to undefined]

### Return type

`ApplicationitemV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const id: number = 12345; // The unique identifier of the application to retrieve.
const result = await apiInstance.getApplicationV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-applications-v1
Search applications in DAS.
This endpoint lists all the applications in Data Access Security with optional filtering.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-applications-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **appIds**: *eq, in*  **tagIds**: *eq, in*  **statuses**: *eq, in*  **groupCodes**: *eq, in*  **virtualAppId**: *eq*  **appName**: *eq*  **supportsValidation**: *eq*  Supported composite operators are *and, or* | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<ApplicationitemV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const filters: string = AppType eq 'ActiveDirectory' and Statuses eq 'Passed'; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **appIds**: *eq, in*  **tagIds**: *eq, in*  **statuses**: *eq, in*  **groupCodes**: *eq, in*  **virtualAppId**: *eq*  **appName**: *eq*  **supportsValidation**: *eq*  Supported composite operators are *and, or* (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getApplicationsV1({  });
console.log(result);
```

[[Back to top]](#)

## get-owners-v1
Retrieve owners per application.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-owners-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**appId** | `number` | The unique identifier of the application for which to retrieve owners. |  [default to undefined]
**limit** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 250]
**offset** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 0]

### Return type

`Array<DataownermodelV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const appId: number = 2001; // The unique identifier of the application for which to retrieve owners.
const limit: number = 250; // Not applicable for this endpoint. Do not use. (optional)
const offset: number = 0; // Not applicable for this endpoint. Do not use. (optional)
const result = await apiInstance.getOwnersV1({ appId: appId });
console.log(result);
```

[[Back to top]](#)

## get-schedule-v1
Get a DAS schedule.
This end-point gets a schedule in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-schedule-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the schedule to retrieve. |  [default to undefined]

### Return type

`ScheduleinfoV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const id: number = 1001; // The unique identifier of the schedule to retrieve.
const result = await apiInstance.getScheduleV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-schedules-v1
List all schedules.
This end-point lists all the schedules in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-schedules-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **scheduleTaskIds**: *eq, in*  **taskTypeName**: *eq, in*  **status**: *eq*  **applicationId**: *eq*  **fullName**: *eq*  **nameSubString**: *eq*  **scheduleType**: *eq*  Supported composite operators are *and, or* | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<ScheduleinfoV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const filters: string = ScheduleType eq "Daily" and startTime eq 1762237200; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **scheduleTaskIds**: *eq, in*  **taskTypeName**: *eq, in*  **status**: *eq*  **applicationId**: *eq*  **fullName**: *eq*  **nameSubString**: *eq*  **scheduleType**: *eq*  Supported composite operators are *and, or* (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getSchedulesV1({  });
console.log(result);
```

[[Back to top]](#)

## get-task-v1
Get a DAS task.
This end-point gets a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-task-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the task to retrieve. |  [default to undefined]

### Return type

`TaskinfoV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const id: number = 1001; // The unique identifier of the task to retrieve.
const result = await apiInstance.getTaskV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-tasks-v1
Lists all DAS tasks.
This end-point lists all the tasks in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-tasks-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **taskIds**: *eq, in*  **statuses**: *eq, in*  **taskTypeName**: *eq, in*  **taskName**: *eq*  **endBeforeTime**: *eq*  Supported composite operators are *and, or*  Example: taskTypeName eq \&quot;DataSync\&quot; and endBeforeTime eq 1762240800 | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<TaskinfoV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const filters: string = TaskTypeName eq "DataClassification and EndBeforeTime eq 1762240800; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **taskIds**: *eq, in*  **statuses**: *eq, in*  **taskTypeName**: *eq, in*  **taskName**: *eq*  **endBeforeTime**: *eq*  Supported composite operators are *and, or*  Example: taskTypeName eq \&quot;DataSync\&quot; and endBeforeTime eq 1762240800 (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getTasksV1({  });
console.log(result);
```

[[Back to top]](#)

## list-identity-collectors-v1
List identity collectors
This endpoint lists the identity collectors in Data Access Security with optional filtering and pagination.

Sorting is not supported for this endpoint; supplying the `sorters` query parameter results in a validation error.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-identity-collectors-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  Supported composite operators are *and, or* | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<IdentitycollectorlistitemV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const filters: string = sourceId eq "2c9180835d2e5168015d32f890ca1581"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  Supported composite operators are *and, or* (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listIdentityCollectorsV1({  });
console.log(result);
```

[[Back to top]](#)

## put-application-v1
Update application by identifier.
This endpoint updates an existing application in Data Access Security with the specified configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-application-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the application to update. |  [default to undefined]
**basecreateapplicationrequestV1** | `BasecreateapplicationrequestV1` | Request body containing the updated details for the application. | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const id: number = 12345; // The unique identifier of the application to update.
const basecreateapplicationrequestV1: BasecreateapplicationrequestV1 = ; // Request body containing the updated details for the application.
const result = await apiInstance.putApplicationV1({ id: id, basecreateapplicationrequestV1: basecreateapplicationrequestV1 });
console.log(result);
```

[[Back to top]](#)

## put-identity-collector-v1
Update identity collector by identifier
This endpoint updates the name of an existing identity collector in Data Access Security. The `sourceId` and `type` cannot be changed and must match the current values.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-identity-collector-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the identity collector to update. |  [default to undefined]
**updateidentitycollectorrequestV1** | `UpdateidentitycollectorrequestV1` | Request body containing the updated details for the identity collector. | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const id: number = 12345; // The unique identifier of the identity collector to update.
const updateidentitycollectorrequestV1: UpdateidentitycollectorrequestV1 = ; // Request body containing the updated details for the identity collector.
const result = await apiInstance.putIdentityCollectorV1({ id: id, updateidentitycollectorrequestV1: updateidentitycollectorrequestV1 });
console.log(result);
```

[[Back to top]](#)

## put-schedule-v1
Update a schedule.


[API Spec](https://developer.sailpoint.com/docs/api/v1/put-schedule-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the schedule to update. |  [default to undefined]
**updateschedulerequestV1** | `UpdateschedulerequestV1` |  | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const id: number = 1001; // The unique identifier of the schedule to update.
const updateschedulerequestV1: UpdateschedulerequestV1 = ; // 
const result = await apiInstance.putScheduleV1({ id: id, updateschedulerequestV1: updateschedulerequestV1 });
console.log(result);
```

[[Back to top]](#)

## start-task-rerun-v1
Rerun a DAS task.
This end-point sends a request to re-run a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-task-rerun-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the task to rerun. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityV1Api(configuration);
const id: number = 1001; // The unique identifier of the task to rerun.
const result = await apiInstance.startTaskRerunV1({ id: id });
console.log(result);
```

[[Back to top]](#)

