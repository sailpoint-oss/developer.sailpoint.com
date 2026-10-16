# DataAccessSecurity

# DataAccessSecurityApi
  Use this API to enable data ownership election campaigns, assign resource owners, and respond to identity lifecycle events to maintain continuous accountability.
This API can also trigger and manage DAS tasks such as scans-starting them on demand, updating configurations or schedules, and retrieving statuses. Additionally, you can onboard and manage applications at scale by creating and configuring them, setting scanning schedules, retrieving metadata, and associating them with Virtual Appliances and Identity Collectors.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-task-v1**](#cancel-task-v1) | **POST** `/das/v1/tasks/cancel/{id}` | Cancel a DAS task.
[**create-application-v1**](#create-application-v1) | **POST** `/das/v1/applications` | Create application
[**create-data-dictionary-field-v1**](#create-data-dictionary-field-v1) | **POST** `/das/v1/permissions/fields` | Create data dictionary field
[**create-identity-collector-v1**](#create-identity-collector-v1) | **POST** `/das/v1/identity-collectors` | Create identity collector
[**create-schedule-v1**](#create-schedule-v1) | **POST** `/das/v1/tasks/schedules` | Create a new schedule.
[**das-v1-owners-assign-post**](#das-v1-owners-assign-post) | **POST** `/das/v1/owners/assign` | Assign owner to application resource.
[**das-v1-owners-owner-identity-id-resources-get**](#das-v1-owners-owner-identity-id-resources-get) | **GET** `/das/v1/owners/{ownerIdentityId}/resources` | List resources for owner.
[**das-v1-owners-reelect-post**](#das-v1-owners-reelect-post) | **POST** `/das/v1/owners/reelect` | Re-elect resource owner.
[**das-v1-owners-resources-resource-id-get**](#das-v1-owners-resources-resource-id-get) | **GET** `/das/v1/owners/resources/{resourceId}` | List owners for resource.
[**das-v1-owners-source-identity-id-reassign-destination-identity-id-post**](#das-v1-owners-source-identity-id-reassign-destination-identity-id-post) | **POST** `/das/v1/owners/{sourceIdentityId}/reassign/{destinationIdentityId}` | Reassign resource owner.
[**delete-application-v1**](#delete-application-v1) | **DELETE** `/das/v1/applications/{id}` | Delete an application by identifier.
[**delete-data-dictionary-field-v1**](#delete-data-dictionary-field-v1) | **DELETE** `/das/v1/permissions/fields/{name}` | Delete data dictionary field
[**delete-identity-collector-v1**](#delete-identity-collector-v1) | **DELETE** `/das/v1/identity-collectors/{id}` | Delete identity collector by identifier
[**delete-schedule-v1**](#delete-schedule-v1) | **DELETE** `/das/v1/tasks/schedules/{id}` | Delete a DAS schedule.
[**delete-task-v1**](#delete-task-v1) | **DELETE** `/das/v1/tasks/{id}` | Delete a DAS task.
[**get-application-v1**](#get-application-v1) | **GET** `/das/v1/applications/{id}` | Retrieve application details by identifier.
[**get-applications-v1**](#get-applications-v1) | **GET** `/das/v1/applications` | Search applications in DAS.
[**get-identity-collector-builtin-properties-v1**](#get-identity-collector-builtin-properties-v1) | **GET** `/das/v1/identity-collectors/properties` | List built-in identity collector properties
[**get-identity-collector-types-v1**](#get-identity-collector-types-v1) | **GET** `/das/v1/identity-collectors/types` | List identity collector types
[**get-owners-v1**](#get-owners-v1) | **GET** `/das/v1/owners/applications/{appId}` | Retrieve owners per application.
[**get-schedule-v1**](#get-schedule-v1) | **GET** `/das/v1/tasks/schedules/{id}` | Get a DAS schedule.
[**get-schedules-v1**](#get-schedules-v1) | **GET** `/das/v1/tasks/schedules` | List all schedules.
[**get-task-v1**](#get-task-v1) | **GET** `/das/v1/tasks/{id}` | Get a DAS task.
[**get-tasks-v1**](#get-tasks-v1) | **GET** `/das/v1/tasks` | Lists all DAS tasks.
[**list-data-dictionary-fields-v1**](#list-data-dictionary-fields-v1) | **GET** `/das/v1/permissions/fields` | List data dictionary fields
[**list-identity-collectors-v1**](#list-identity-collectors-v1) | **GET** `/das/v1/identity-collectors` | List identity collectors
[**put-application-v1**](#put-application-v1) | **PUT** `/das/v1/applications/{id}` | Update application by identifier.
[**put-data-dictionary-field-v1**](#put-data-dictionary-field-v1) | **PUT** `/das/v1/permissions/fields/{name}` | Replace data dictionary field
[**put-identity-collector-v1**](#put-identity-collector-v1) | **PUT** `/das/v1/identity-collectors/{id}` | Replace identity collector
[**put-schedule-v1**](#put-schedule-v1) | **PUT** `/das/v1/tasks/schedules/{id}` | Update a schedule.
[**start-task-rerun-v1**](#start-task-rerun-v1) | **POST** `/das/v1/tasks/rerun/{id}` | Rerun a DAS task.


## cancel-task-v1
Cancel a DAS task.
This end-point sends a request to cancel a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/cancel-task-v-1)

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
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const id: number = 1001; // The unique identifier of the task to cancel.
const result = await apiInstance.cancelTaskV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## create-application-v1
Create application
This endpoint creates a new application in Data Access Security with the specified configuration.

[API Spec](https://developer.sailpoint.com/docs/api/create-application-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**baseCreateApplicationRequest** | `BaseCreateApplicationRequest` | Request body containing the details required to create a new application. | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { BaseCreateApplicationRequest } from '@sailpoint/api-client/dist/data_access_security/api';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const baseCreateApplicationRequest: BaseCreateApplicationRequest = {
  "adIdentityCollectorId" : 987654321,
  "applicationType" : 9,
  "nisIdentityCollectorId" : 192837465,
  "executeNow" : false,
  "name" : "HR File Server",
  "description" : "Stores HR documents and employee records.",
  "dataClassificationSettings" : {
    "isEnabled" : true,
    "clusterId" : "cluster-001"
  },
  "activityConfigurationSettings" : {
    "excludeFolders" : [ "/tmp", "/archive" ],
    "excludeFileExtensions" : [ ".log", ".bak" ],
    "excludeActions" : [ "delete", "move" ],
    "isEnabled" : true,
    "retentionTimePeriod" : 30,
    "retentionTimeType" : "days",
    "clusterId" : "cluster-001",
    "excludeUsers" : [ "user1", "user2" ]
  },
  "applicationCrawlerSettings" : {
    "calculateResourceSize" : 2,
    "excludedResources" : [ "resourceA", "resourceB" ],
    "crawlPublicFolders" : true,
    "excludedPathsByRegex" : "^/archive/.*",
    "isEnabled" : true,
    "crawlSnapshotsFolder" : true,
    "crawlMailboxes" : false,
    "crawlTopLevelShares" : [ "share1", "share2" ],
    "clusterId" : "cluster-001",
    "includeResources" : [ "resourceX", "resourceY" ]
  },
  "identityCollectorId" : 123456789,
  "permissionCollectorSettings" : {
    "analyzeUniquePermissions" : true,
    "calculateRiskiestPermissions" : false,
    "isEnabled" : true,
    "calculateEffectivePermissions" : true,
    "clusterId" : "cluster-001",
    "effectivePermissionsSource" : "S3"
  },
  "tags" : [ {
    "key" : 1,
    "value" : "Confidential"
  } ]
}; // Request body containing the details required to create a new application.
const result = await apiInstance.createApplicationV1({ baseCreateApplicationRequest: baseCreateApplicationRequest });
console.log(result);
```

[[Back to top]](#)

## create-data-dictionary-field-v1
Create data dictionary field
Creates a custom data dictionary field. The server assigns fieldType String and required false; callers do not supply those values.

[API Spec](https://developer.sailpoint.com/docs/api/create-data-dictionary-field-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createdatadictionaryfieldrequest** | `Createdatadictionaryfieldrequest` | Custom data dictionary field to create. | 

### Return type

`Datadictionaryfieldlistitem`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Createdatadictionaryfieldrequest } from '@sailpoint/api-client/dist/data_access_security/api';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const createdatadictionaryfieldrequest: Createdatadictionaryfieldrequest = {
  "name" : "Department",
  "dataDictionaryType" : "Users"
}; // Custom data dictionary field to create.
const result = await apiInstance.createDataDictionaryFieldV1({ createdatadictionaryfieldrequest: createdatadictionaryfieldrequest });
console.log(result);
```

[[Back to top]](#)

## create-identity-collector-v1
Create identity collector
This endpoint creates a new identity collector in Data Access Security for the specified source. The identity collector type is derived from the source.

Optionally configure `users` and `groups` to register source attributes (`properties`) and map them to data dictionary fields by name (`fieldMappings.fieldDictionaryName`). When omitted, both collections are created with fixed columns only.

[API Spec](https://developer.sailpoint.com/docs/api/create-identity-collector-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createidentitycollectorrequest** | `Createidentitycollectorrequest` | Request body containing the details required to create a new identity collector. | 

### Return type

`CreateIdentityCollectorV1200Response`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Createidentitycollectorrequest } from '@sailpoint/api-client/dist/data_access_security/api';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const createidentitycollectorrequest: Createidentitycollectorrequest = {
  "sourceId" : "2c9180835d2e5168015d32f890ca1581",
  "name" : "Active Directory Identity Collector",
  "groups" : {
    "fieldMappings" : [ {
      "sourceAttributeName" : "department",
      "fieldDictionaryName" : "UPTF-1"
    }, {
      "sourceAttributeName" : "department",
      "fieldDictionaryName" : "UPTF-1"
    } ],
    "properties" : [ "UserAddress", "department" ]
  },
  "users" : {
    "fieldMappings" : [ {
      "sourceAttributeName" : "department",
      "fieldDictionaryName" : "UPTF-1"
    }, {
      "sourceAttributeName" : "department",
      "fieldDictionaryName" : "UPTF-1"
    } ],
    "properties" : [ "UserAddress", "department" ]
  }
}; // Request body containing the details required to create a new identity collector.
const result = await apiInstance.createIdentityCollectorV1({ createidentitycollectorrequest: createidentitycollectorrequest });
console.log(result);
```

[[Back to top]](#)

## create-schedule-v1
Create a new schedule.


[API Spec](https://developer.sailpoint.com/docs/api/create-schedule-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createScheduleRequest** | `CreateScheduleRequest` |  | 

### Return type

`number`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { CreateScheduleRequest } from '@sailpoint/api-client/dist/data_access_security/api';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const createScheduleRequest: CreateScheduleRequest = {
  "scheduleTaskName" : "Daily Data Sync",
  "scheduleType" : "Daily",
  "active" : true,
  "interval" : 1440,
  "startTime" : 1762237200,
  "endTime" : 1762240800,
  "taskTypeName" : "DataSync",
  "daysOfWeek" : [ "Monday", "Wednesday", "Friday" ],
  "applicationId" : 2001,
  "runAfterScheduleTaskId" : 1000
}; // 
const result = await apiInstance.createScheduleV1({ createScheduleRequest: createScheduleRequest });
console.log(result);
```

[[Back to top]](#)

## das-v1-owners-assign-post
Assign owner to application resource.


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-assign-post)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**assignResourceOwnerRequest** | `AssignResourceOwnerRequest` | The request body must contain the application ID, resource path, and identity ID to be assigned as the resource owner. | 

### Return type

`number`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { AssignResourceOwnerRequest } from '@sailpoint/api-client/dist/data_access_security/api';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const assignResourceOwnerRequest: AssignResourceOwnerRequest = {
  "fullPath" : "/shared/hr/documents/employee-records.pdf",
  "identityId" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "appId" : 12345
}; // The request body must contain the application ID, resource path, and identity ID to be assigned as the resource owner.
const result = await apiInstance.dasV1OwnersAssignPost({ assignResourceOwnerRequest: assignResourceOwnerRequest });
console.log(result);
```

[[Back to top]](#)

## das-v1-owners-owner-identity-id-resources-get
List resources for owner.


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-owner-identity-id-resources-get)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ownerIdentityId** | `string` | Unique identifier for the owner. This should be a UUID representing the owner\&#39;s identity. |  [default to undefined]
**limit** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 250]
**offset** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 0]

### Return type

`Array<ResourceModel>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const ownerIdentityId: string = a3f1c2d4-5678-4e9b-8c2d-123456789abc; // Unique identifier for the owner. This should be a UUID representing the owner\&#39;s identity.
const limit: number = 250; // Not applicable for this endpoint. Do not use. (optional)
const offset: number = 0; // Not applicable for this endpoint. Do not use. (optional)
const result = await apiInstance.dasV1OwnersOwnerIdentityIdResourcesGet({ ownerIdentityId: ownerIdentityId });
console.log(result);
```

[[Back to top]](#)

## das-v1-owners-reelect-post
Re-elect resource owner.


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-reelect-post)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**reelectRequest** | `ReelectRequest` | The request body must contain details for re-electing a resource owner. Date/time fields should use epoch format in seconds. | 

### Return type

`number`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ReelectRequest } from '@sailpoint/api-client/dist/data_access_security/api';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const reelectRequest: ReelectRequest = {
  "ownerId" : "c1a2b3d4-e5f6-7890-abcd-1234567890ab",
  "campaignName" : "Annual Resource Owner Election",
  "reviewers" : [ "d4e5f6a7-b8c9-0123-4567-89abcdef0123", "e7f8g9h0-i1j2-3456-7890-klmnopqrstuv" ]
}; // The request body must contain details for re-electing a resource owner. Date/time fields should use epoch format in seconds.
const result = await apiInstance.dasV1OwnersReelectPost({ reelectRequest: reelectRequest });
console.log(result);
```

[[Back to top]](#)

## das-v1-owners-resources-resource-id-get
List owners for resource.


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-resources-resource-id-get)

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
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const resourceId: number = 101; // Unique identifier for the resource.
const limit: number = 250; // Not applicable for this endpoint. Do not use. (optional)
const offset: number = 0; // Not applicable for this endpoint. Do not use. (optional)
const result = await apiInstance.dasV1OwnersResourcesResourceIdGet({ resourceId: resourceId });
console.log(result);
```

[[Back to top]](#)

## das-v1-owners-source-identity-id-reassign-destination-identity-id-post
Reassign resource owner.


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-source-identity-id-reassign-destination-identity-id-post)

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
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const sourceIdentityId: string = a3f1c2d4-5678-4e9b-8c2d-123456789abc; // Unique identifier for the source owner. This should be a UUID representing the identity to reassign from.
const destinationIdentityId: string = b4e2d3c5-6789-4f0a-9d3e-234567890bcd; // Unique identifier for the destination owner. This should be a UUID representing the identity to reassign to.
const result = await apiInstance.dasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost({ sourceIdentityId: sourceIdentityId, destinationIdentityId: destinationIdentityId });
console.log(result);
```

[[Back to top]](#)

## delete-application-v1
Delete an application by identifier.
This endpoint deletes an application from Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/delete-application-v-1)

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
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const id: number = 12345; // The unique identifier of the application to delete.
const result = await apiInstance.deleteApplicationV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-data-dictionary-field-v1
Delete data dictionary field
Deletes a custom data dictionary field. Built-in fields where required is true cannot be deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-data-dictionary-field-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | The field name to delete. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const name: string = Department; // The field name to delete.
const result = await apiInstance.deleteDataDictionaryFieldV1({ name: name });
console.log(result);
```

[[Back to top]](#)

## delete-identity-collector-v1
Delete identity collector by identifier
This endpoint deletes an identity collector from Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/delete-identity-collector-v-1)

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
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const id: number = 12345; // The unique identifier of the identity collector to delete.
const result = await apiInstance.deleteIdentityCollectorV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-schedule-v1
Delete a DAS schedule.
This end-point sends a request to delete a schedule in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/delete-schedule-v-1)

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
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const id: number = 1001; // The unique identifier of the schedule to delete.
const result = await apiInstance.deleteScheduleV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-task-v1
Delete a DAS task.
This end-point sends a request to delete a task in Data Access Security.


[API Spec](https://developer.sailpoint.com/docs/api/delete-task-v-1)

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
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const id: number = 1001; // The unique identifier of the task to delete.
const result = await apiInstance.deleteTaskV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-application-v1
Retrieve application details by identifier.
This endpoint retrieves the details of a specific application in Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/get-application-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the application to retrieve. |  [default to undefined]

### Return type

`ApplicationItem`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const id: number = 12345; // The unique identifier of the application to retrieve.
const result = await apiInstance.getApplicationV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-applications-v1
Search applications in DAS.
This endpoint lists all the applications in Data Access Security with optional filtering.

[API Spec](https://developer.sailpoint.com/docs/api/get-applications-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **appIds**: *eq, in*  **tagIds**: *eq, in*  **statuses**: *eq, in*  **groupCodes**: *eq, in*  **virtualAppId**: *eq*  **appName**: *eq*  **supportsValidation**: *eq*  Supported composite operators are *and, or* | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<ApplicationItem>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const filters: string = AppType eq 'ActiveDirectory' and Statuses eq 'Passed'; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **appIds**: *eq, in*  **tagIds**: *eq, in*  **statuses**: *eq, in*  **groupCodes**: *eq, in*  **virtualAppId**: *eq*  **appName**: *eq*  **supportsValidation**: *eq*  Supported composite operators are *and, or* (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getApplicationsV1({  });
console.log(result);
```

[[Back to top]](#)

## get-identity-collector-builtin-properties-v1
List built-in identity collector properties
Returns the built-in source attribute names for users and groups collections. When no filter is provided, built-in properties for all public identity collector types are returned (the same base types listed by [List Identity Collector Types](https://developer.sailpoint.com/docs/api/get-identity-collector-types-v-1)). When filtered by `type`, only the matching type is returned; the filter accepts any supported type display name, including SaaS variants such as `Box SaaS` or `AWS SaaS`.

These attributes are always available for field mapping without being listed in `properties`.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-collector-builtin-properties-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq* | [optional] [default to undefined]

### Return type

`Identitycollectorbuiltinpropertiesresponse`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const filters: string = type eq "Azure Active Directory"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq* (optional)
const result = await apiInstance.getIdentityCollectorBuiltinPropertiesV1({  });
console.log(result);
```

[[Back to top]](#)

## get-identity-collector-types-v1
List identity collector types
Returns the public identity collector type display names exposed for metadata and UI discovery. This endpoint lists base types only (for example, `Box` rather than `Box SaaS`). SaaS variants are not listed here; the identity collector type is derived from `sourceId` when creating an identity collector. Existing identity collectors may still report SaaS variant types in list and update responses.

Pagination is not supported for this endpoint; the full set of public types is always returned.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-collector-types-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<string>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getIdentityCollectorTypesV1({  });
console.log(result);
```

[[Back to top]](#)

## get-owners-v1
Retrieve owners per application.


[API Spec](https://developer.sailpoint.com/docs/api/get-owners-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**appId** | `number` | The unique identifier of the application for which to retrieve owners. |  [default to undefined]
**limit** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 250]
**offset** | `number` | Not applicable for this endpoint. Do not use. | [optional] [default to 0]

### Return type

`Array<DataOwnerModel>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
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

[API Spec](https://developer.sailpoint.com/docs/api/get-schedule-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the schedule to retrieve. |  [default to undefined]

### Return type

`ScheduleInfo`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const id: number = 1001; // The unique identifier of the schedule to retrieve.
const result = await apiInstance.getScheduleV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-schedules-v1
List all schedules.
This end-point lists all the schedules in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/get-schedules-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **scheduleTaskIds**: *eq, in*  **taskTypeName**: *eq, in*  **status**: *eq*  **applicationId**: *eq*  **fullName**: *eq*  **nameSubString**: *eq*  **scheduleType**: *eq*  Supported composite operators are *and, or* | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<ScheduleInfo>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
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

[API Spec](https://developer.sailpoint.com/docs/api/get-task-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the task to retrieve. |  [default to undefined]

### Return type

`TaskInfo`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const id: number = 1001; // The unique identifier of the task to retrieve.
const result = await apiInstance.getTaskV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-tasks-v1
Lists all DAS tasks.
This end-point lists all the tasks in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/get-tasks-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **taskIds**: *eq, in*  **statuses**: *eq, in*  **taskTypeName**: *eq, in*  **taskName**: *eq*  **endBeforeTime**: *eq*  Supported composite operators are *and, or*  Example: taskTypeName eq \&quot;DataSync\&quot; and endBeforeTime eq 1762240800 | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<TaskInfo>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const filters: string = TaskTypeName eq "DataClassification and EndBeforeTime eq 1762240800; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **taskIds**: *eq, in*  **statuses**: *eq, in*  **taskTypeName**: *eq, in*  **taskName**: *eq*  **endBeforeTime**: *eq*  Supported composite operators are *and, or*  Example: taskTypeName eq \&quot;DataSync\&quot; and endBeforeTime eq 1762240800 (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getTasksV1({  });
console.log(result);
```

[[Back to top]](#)

## list-data-dictionary-fields-v1
List data dictionary fields
Returns custom data dictionary fields that can be used when configuring identity collector field mappings and other permission-related settings. Built-in fields are not included in list responses; only custom fields created via [Create Data Dictionary Field](https://developer.sailpoint.com/docs/api/create-data-dictionary-field-v-1) are returned. All listed fields have `required: false`.

[API Spec](https://developer.sailpoint.com/docs/api/list-data-dictionary-fields-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **dataDictionaryType**: *eq*  **name**: *eq*  Supported composite operators are *and* | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<Datadictionaryfieldlistitem>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const filters: string = dataDictionaryType eq "Users" and name eq "Department"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **dataDictionaryType**: *eq*  **name**: *eq*  Supported composite operators are *and* (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listDataDictionaryFieldsV1({  });
console.log(result);
```

[[Back to top]](#)

## list-identity-collectors-v1
List identity collectors
This endpoint lists the identity collectors in Data Access Security with optional filtering and pagination.

Sorting is not supported for this endpoint; supplying the `sorters` query parameter results in a validation error.

[API Spec](https://developer.sailpoint.com/docs/api/list-identity-collectors-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  **name**: *eq, co*  For &#x60;name&#x60;, &#x60;eq&#x60; performs an exact match and &#x60;co&#x60; performs a contains (substring) match. Use public type display names from [List Identity Collector Types](https://developer.sailpoint.com/docs/api/get-identity-collector-types-v-1) with &#x60;type&#x60; filters (for example, &#x60;AWS&#x60;, not &#x60;AWS SaaS&#x60;).  Supported composite operators are *and, or* | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<Identitycollectorlistitem>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const filters: string = name co "Finance" and type eq "AWS"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  **name**: *eq, co*  For &#x60;name&#x60;, &#x60;eq&#x60; performs an exact match and &#x60;co&#x60; performs a contains (substring) match. Use public type display names from [List Identity Collector Types](https://developer.sailpoint.com/docs/api/get-identity-collector-types-v-1) with &#x60;type&#x60; filters (for example, &#x60;AWS&#x60;, not &#x60;AWS SaaS&#x60;).  Supported composite operators are *and, or* (optional)
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

[API Spec](https://developer.sailpoint.com/docs/api/put-application-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the application to update. |  [default to undefined]
**baseCreateApplicationRequest** | `BaseCreateApplicationRequest` | Request body containing the updated details for the application. | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { BaseCreateApplicationRequest } from '@sailpoint/api-client/dist/data_access_security/api';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const id: number = 12345; // The unique identifier of the application to update.
const baseCreateApplicationRequest: BaseCreateApplicationRequest = {
  "adIdentityCollectorId" : 987654321,
  "applicationType" : 9,
  "nisIdentityCollectorId" : 192837465,
  "executeNow" : false,
  "name" : "HR File Server",
  "description" : "Stores HR documents and employee records.",
  "dataClassificationSettings" : {
    "isEnabled" : true,
    "clusterId" : "cluster-001"
  },
  "activityConfigurationSettings" : {
    "excludeFolders" : [ "/tmp", "/archive" ],
    "excludeFileExtensions" : [ ".log", ".bak" ],
    "excludeActions" : [ "delete", "move" ],
    "isEnabled" : true,
    "retentionTimePeriod" : 30,
    "retentionTimeType" : "days",
    "clusterId" : "cluster-001",
    "excludeUsers" : [ "user1", "user2" ]
  },
  "applicationCrawlerSettings" : {
    "calculateResourceSize" : 2,
    "excludedResources" : [ "resourceA", "resourceB" ],
    "crawlPublicFolders" : true,
    "excludedPathsByRegex" : "^/archive/.*",
    "isEnabled" : true,
    "crawlSnapshotsFolder" : true,
    "crawlMailboxes" : false,
    "crawlTopLevelShares" : [ "share1", "share2" ],
    "clusterId" : "cluster-001",
    "includeResources" : [ "resourceX", "resourceY" ]
  },
  "identityCollectorId" : 123456789,
  "permissionCollectorSettings" : {
    "analyzeUniquePermissions" : true,
    "calculateRiskiestPermissions" : false,
    "isEnabled" : true,
    "calculateEffectivePermissions" : true,
    "clusterId" : "cluster-001",
    "effectivePermissionsSource" : "S3"
  },
  "tags" : [ {
    "key" : 1,
    "value" : "Confidential"
  } ]
}; // Request body containing the updated details for the application.
const result = await apiInstance.putApplicationV1({ id: id, baseCreateApplicationRequest: baseCreateApplicationRequest });
console.log(result);
```

[[Back to top]](#)

## put-data-dictionary-field-v1
Replace data dictionary field
Fully replaces a custom data dictionary field. This is a PUT operation, not a partial update: the request body must contain the complete resource representation. Omitted properties are rejected. For custom fields, `fieldType`, `dataDictionaryType`, and `required` must match the current values; only `name` may change. Built-in fields where `required` is true cannot be updated.

List the field first with [List Data Dictionary Fields](https://developer.sailpoint.com/docs/api/list-data-dictionary-fields-v-1) to obtain the current representation before replacing it.

[API Spec](https://developer.sailpoint.com/docs/api/put-data-dictionary-field-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | The current field name. |  [default to undefined]
**updatedatadictionaryfieldrequest** | `Updatedatadictionaryfieldrequest` | Complete data dictionary field representation used to fully replace the existing field. | 

### Return type

`Datadictionaryfieldlistitem`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Updatedatadictionaryfieldrequest } from '@sailpoint/api-client/dist/data_access_security/api';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const name: string = Department; // The current field name.
const updatedatadictionaryfieldrequest: Updatedatadictionaryfieldrequest = {
  "name" : "Cost Center",
  "dataDictionaryType" : "Users",
  "fieldType" : "String",
  "required" : false
}; // Complete data dictionary field representation used to fully replace the existing field.
const result = await apiInstance.putDataDictionaryFieldV1({ name: name, updatedatadictionaryfieldrequest: updatedatadictionaryfieldrequest });
console.log(result);
```

[[Back to top]](#)

## put-identity-collector-v1
Replace identity collector
Fully replaces an existing identity collector in Data Access Security. This is a PUT operation, not a partial update: the request body must contain the complete resource representation. Omitted or null top-level properties are rejected. After a successful request, a subsequent list request returns exactly the configuration that was sent.

Retrieve the current configuration with [List Identity Collectors](https://developer.sailpoint.com/docs/api/list-identity-collectors-v-1) before replacing it. The `sourceId` and `type` cannot be changed and must match the current values.

[API Spec](https://developer.sailpoint.com/docs/api/put-identity-collector-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the identity collector to replace. |  [default to undefined]
**updateidentitycollectorrequest** | `Updateidentitycollectorrequest` | Complete identity collector representation used to fully replace the existing resource. Partial updates are not supported. | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Updateidentitycollectorrequest } from '@sailpoint/api-client/dist/data_access_security/api';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const id: number = 12345; // The unique identifier of the identity collector to replace.
const updateidentitycollectorrequest: Updateidentitycollectorrequest = {
  "sourceId" : "2c9180835d2e5168015d32f890ca1581",
  "name" : "Active Directory Identity Collector",
  "groups" : {
    "fieldMappings" : [ {
      "sourceAttributeName" : "department",
      "fieldDictionaryName" : "UPTF-1"
    }, {
      "sourceAttributeName" : "department",
      "fieldDictionaryName" : "UPTF-1"
    } ],
    "properties" : [ "UserAddress", "department" ]
  },
  "type" : "Active Directory",
  "users" : {
    "fieldMappings" : [ {
      "sourceAttributeName" : "department",
      "fieldDictionaryName" : "UPTF-1"
    }, {
      "sourceAttributeName" : "department",
      "fieldDictionaryName" : "UPTF-1"
    } ],
    "properties" : [ "UserAddress", "department" ]
  }
}; // Complete identity collector representation used to fully replace the existing resource. Partial updates are not supported.
const result = await apiInstance.putIdentityCollectorV1({ id: id, updateidentitycollectorrequest: updateidentitycollectorrequest });
console.log(result);
```

[[Back to top]](#)

## put-schedule-v1
Update a schedule.


[API Spec](https://developer.sailpoint.com/docs/api/put-schedule-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `number` | The unique identifier of the schedule to update. |  [default to undefined]
**updateScheduleRequest** | `UpdateScheduleRequest` |  | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { UpdateScheduleRequest } from '@sailpoint/api-client/dist/data_access_security/api';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const id: number = 1001; // The unique identifier of the schedule to update.
const updateScheduleRequest: UpdateScheduleRequest = {
  "scheduleTaskName" : "Daily Data Sync",
  "scheduleType" : "Daily",
  "active" : true,
  "interval" : 1440,
  "startTime" : 1762237200,
  "endTime" : 1762240800,
  "taskTypeName" : "DataSync",
  "daysOfWeek" : [ "Monday", "Wednesday", "Friday" ],
  "applicationId" : 2001,
  "runAfterScheduleTaskId" : 1000
}; // 
const result = await apiInstance.putScheduleV1({ id: id, updateScheduleRequest: updateScheduleRequest });
console.log(result);
```

[[Back to top]](#)

## start-task-rerun-v1
Rerun a DAS task.
This end-point sends a request to re-run a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/start-task-rerun-v-1)

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
import { DataAccessSecurityApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataAccessSecurityApi(configuration);
const id: number = 1001; // The unique identifier of the task to rerun.
const result = await apiInstance.startTaskRerunV1({ id: id });
console.log(result);
```

[[Back to top]](#)

