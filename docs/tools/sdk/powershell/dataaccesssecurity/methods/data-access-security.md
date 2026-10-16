# DataAccessSecurity

# DataAccessSecurity
  Use this API to enable data ownership election campaigns, assign resource owners, and respond to identity lifecycle events to maintain continuous accountability.
This API can also trigger and manage DAS tasks such as scans-starting them on demand, updating configurations or schedules, and retrieving statuses. Additionally, you can onboard and manage applications at scale by creating and configuring them, setting scanning schedules, retrieving metadata, and associating them with Virtual Appliances and Identity Collectors.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Suspend-TaskV1**](#cancel-task-v1) | **POST** `/das/v1/tasks/cancel/{id}` | Cancel a DAS task.
[**New-ApplicationV1**](#create-application-v1) | **POST** `/das/v1/applications` | Create application
[**New-DataDictionaryFieldV1**](#create-data-dictionary-field-v1) | **POST** `/das/v1/permissions/fields` | Create data dictionary field
[**New-IdentityCollectorV1**](#create-identity-collector-v1) | **POST** `/das/v1/identity-collectors` | Create identity collector
[**New-ScheduleV1**](#create-schedule-v1) | **POST** `/das/v1/tasks/schedules` | Create a new schedule.
[**Invoke-DasV1OwnersAssignPost**](#das-v1-owners-assign-post) | **POST** `/das/v1/owners/assign` | Assign owner to application resource.
[**Invoke-DasV1OwnersOwnerIdentityIdResourcesGet**](#das-v1-owners-owner-identity-id-resources-get) | **GET** `/das/v1/owners/{ownerIdentityId}/resources` | List resources for owner.
[**Invoke-DasV1OwnersReelectPost**](#das-v1-owners-reelect-post) | **POST** `/das/v1/owners/reelect` | Re-elect resource owner.
[**Invoke-DasV1OwnersResourcesResourceIdGet**](#das-v1-owners-resources-resource-id-get) | **GET** `/das/v1/owners/resources/{resourceId}` | List owners for resource.
[**Invoke-DasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost**](#das-v1-owners-source-identity-id-reassign-destination-identity-id-post) | **POST** `/das/v1/owners/{sourceIdentityId}/reassign/{destinationIdentityId}` | Reassign resource owner.
[**Remove-ApplicationV1**](#delete-application-v1) | **DELETE** `/das/v1/applications/{id}` | Delete an application by identifier.
[**Remove-DataDictionaryFieldV1**](#delete-data-dictionary-field-v1) | **DELETE** `/das/v1/permissions/fields/{name}` | Delete data dictionary field
[**Remove-IdentityCollectorV1**](#delete-identity-collector-v1) | **DELETE** `/das/v1/identity-collectors/{id}` | Delete identity collector by identifier
[**Remove-ScheduleV1**](#delete-schedule-v1) | **DELETE** `/das/v1/tasks/schedules/{id}` | Delete a DAS schedule.
[**Remove-TaskV1**](#delete-task-v1) | **DELETE** `/das/v1/tasks/{id}` | Delete a DAS task.
[**Get-ApplicationV1**](#get-application-v1) | **GET** `/das/v1/applications/{id}` | Retrieve application details by identifier.
[**Get-ApplicationsV1**](#get-applications-v1) | **GET** `/das/v1/applications` | Search applications in DAS.
[**Get-IdentityCollectorBuiltinPropertiesV1**](#get-identity-collector-builtin-properties-v1) | **GET** `/das/v1/identity-collectors/properties` | List built-in identity collector properties
[**Get-IdentityCollectorTypesV1**](#get-identity-collector-types-v1) | **GET** `/das/v1/identity-collectors/types` | List identity collector types
[**Get-OwnersV1**](#get-owners-v1) | **GET** `/das/v1/owners/applications/{appId}` | Retrieve owners per application.
[**Get-ScheduleV1**](#get-schedule-v1) | **GET** `/das/v1/tasks/schedules/{id}` | Get a DAS schedule.
[**Get-SchedulesV1**](#get-schedules-v1) | **GET** `/das/v1/tasks/schedules` | List all schedules.
[**Get-TaskV1**](#get-task-v1) | **GET** `/das/v1/tasks/{id}` | Get a DAS task.
[**Get-TasksV1**](#get-tasks-v1) | **GET** `/das/v1/tasks` | Lists all DAS tasks.
[**Get-DataDictionaryFieldsV1**](#list-data-dictionary-fields-v1) | **GET** `/das/v1/permissions/fields` | List data dictionary fields
[**Get-IdentityCollectorsV1**](#list-identity-collectors-v1) | **GET** `/das/v1/identity-collectors` | List identity collectors
[**Send-ApplicationV1**](#put-application-v1) | **PUT** `/das/v1/applications/{id}` | Update application by identifier.
[**Send-DataDictionaryFieldV1**](#put-data-dictionary-field-v1) | **PUT** `/das/v1/permissions/fields/{name}` | Replace data dictionary field
[**Send-IdentityCollectorV1**](#put-identity-collector-v1) | **PUT** `/das/v1/identity-collectors/{id}` | Replace identity collector
[**Send-ScheduleV1**](#put-schedule-v1) | **PUT** `/das/v1/tasks/schedules/{id}` | Update a schedule.
[**Start-TaskRerunV1**](#start-task-rerun-v1) | **POST** `/das/v1/tasks/rerun/{id}` | Rerun a DAS task.


## cancel-task-v1
This end-point sends a request to cancel a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/cancel-task-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the task to cancel.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = 1001 # Int64 | The unique identifier of the task to cancel.

# Cancel a DAS task.

try {
    Suspend-TaskV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Suspend-TaskV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-TaskV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-application-v1
This endpoint creates a new application in Data Access Security with the specified configuration.

[API Spec](https://developer.sailpoint.com/docs/api/create-application-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BaseCreateApplicationRequest | [**BaseCreateApplicationRequest**](../models/base-create-application-request) | True  | Request body containing the details required to create a new application.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$BaseCreateApplicationRequest = @"{
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
}"@

# Create application

try {
    $Result = ConvertFrom-JsonToBaseCreateApplicationRequest -Json $BaseCreateApplicationRequest
    New-ApplicationV1 -BaseCreateApplicationRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-ApplicationV1 -BaseCreateApplicationRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ApplicationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-data-dictionary-field-v1
Creates a custom data dictionary field. The server assigns fieldType String and required false; callers do not supply those values.

[API Spec](https://developer.sailpoint.com/docs/api/create-data-dictionary-field-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Createdatadictionaryfieldrequest | [**Createdatadictionaryfieldrequest**](../models/createdatadictionaryfieldrequest) | True  | Custom data dictionary field to create.

### Return type
[**Datadictionaryfieldlistitem**](../models/datadictionaryfieldlistitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The data dictionary field was created. | Datadictionaryfieldlistitem
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
409 | Conflict - Returned if an identity collector with the same name already exists. | CreateIdentityCollectorV1409Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Createdatadictionaryfieldrequest = @"{
  "name" : "Department",
  "dataDictionaryType" : "Users"
}"@

# Create data dictionary field

try {
    $Result = ConvertFrom-JsonToCreatedatadictionaryfieldrequest -Json $Createdatadictionaryfieldrequest
    New-DataDictionaryFieldV1 -Createdatadictionaryfieldrequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-DataDictionaryFieldV1 -Createdatadictionaryfieldrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-DataDictionaryFieldV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-identity-collector-v1
This endpoint creates a new identity collector in Data Access Security for the specified source. The identity collector type is derived from the source.

Optionally configure `users` and `groups` to register source attributes (`properties`) and map them to data dictionary fields by name (`fieldMappings.fieldDictionaryName`). When omitted, both collections are created with fixed columns only.

[API Spec](https://developer.sailpoint.com/docs/api/create-identity-collector-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Createidentitycollectorrequest | [**Createidentitycollectorrequest**](../models/createidentitycollectorrequest) | True  | Request body containing the details required to create a new identity collector.

### Return type
[**CreateIdentityCollectorV1200Response**](../models/create-identity-collector-v1200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The identity collector was created successfully. | CreateIdentityCollectorV1200Response
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
409 | Conflict - Returned if an identity collector with the same name already exists. | CreateIdentityCollectorV1409Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Createidentitycollectorrequest = @"{
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
}"@

# Create identity collector

try {
    $Result = ConvertFrom-JsonToCreateidentitycollectorrequest -Json $Createidentitycollectorrequest
    New-IdentityCollectorV1 -Createidentitycollectorrequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-IdentityCollectorV1 -Createidentitycollectorrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-IdentityCollectorV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-schedule-v1


[API Spec](https://developer.sailpoint.com/docs/api/create-schedule-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CreateScheduleRequest | [**CreateScheduleRequest**](../models/create-schedule-request) | True  | 

### Return type
**Int64**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | Int64
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$CreateScheduleRequest = @"{
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
}"@

# Create a new schedule.

try {
    $Result = ConvertFrom-JsonToCreateScheduleRequest -Json $CreateScheduleRequest
    New-ScheduleV1 -CreateScheduleRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-ScheduleV1 -CreateScheduleRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ScheduleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## das-v1-owners-assign-post


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-assign-post)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | AssignResourceOwnerRequest | [**AssignResourceOwnerRequest**](../models/assign-resource-owner-request) | True  | The request body must contain the application ID, resource path, and identity ID to be assigned as the resource owner.

### Return type
**Int32**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | 1 - success, otherwise failure. | Int32
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$AssignResourceOwnerRequest = @"{
  "fullPath" : "/shared/hr/documents/employee-records.pdf",
  "identityId" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "appId" : 12345
}"@

# Assign owner to application resource.

try {
    $Result = ConvertFrom-JsonToAssignResourceOwnerRequest -Json $AssignResourceOwnerRequest
    Invoke-DasV1OwnersAssignPost -AssignResourceOwnerRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Invoke-DasV1OwnersAssignPost -AssignResourceOwnerRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-DasV1OwnersAssignPost"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## das-v1-owners-owner-identity-id-resources-get


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-owner-identity-id-resources-get)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | OwnerIdentityId | **String** | True  | Unique identifier for the owner. This should be a UUID representing the owner's identity.
  Query | Limit | **Int32** |   (optional) (default to 250) | Not applicable for this endpoint. Do not use.
  Query | Offset | **Int32** |   (optional) (default to 0) | Not applicable for this endpoint. Do not use.

### Return type
[**ResourceModel[]**](../models/resource-model)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of resources owned by the specified identity was retrieved successfully. | ResourceModel[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OwnerIdentityId = "a3f1c2d4-5678-4e9b-8c2d-123456789abc" # String | Unique identifier for the owner. This should be a UUID representing the owner's identity.
$Limit = 250 # Int32 | Not applicable for this endpoint. Do not use. (optional) (default to 250)
$Offset = 0 # Int32 | Not applicable for this endpoint. Do not use. (optional) (default to 0)

# List resources for owner.

try {
    Invoke-DasV1OwnersOwnerIdentityIdResourcesGet -OwnerIdentityId $OwnerIdentityId 
    
    # Below is a request that includes all optional parameters
    # Invoke-DasV1OwnersOwnerIdentityIdResourcesGet -OwnerIdentityId $OwnerIdentityId -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-DasV1OwnersOwnerIdentityIdResourcesGet"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## das-v1-owners-reelect-post


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-reelect-post)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ReelectRequest | [**ReelectRequest**](../models/reelect-request) | True  | The request body must contain details for re-electing a resource owner. Date/time fields should use epoch format in seconds.

### Return type
**Int32**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The number of elections CREATED. In case of failure, some elections may not be STARTED. | Int32
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$ReelectRequest = @"{
  "ownerId" : "c1a2b3d4-e5f6-7890-abcd-1234567890ab",
  "campaignName" : "Annual Resource Owner Election",
  "reviewers" : [ "d4e5f6a7-b8c9-0123-4567-89abcdef0123", "e7f8g9h0-i1j2-3456-7890-klmnopqrstuv" ]
}"@

# Re-elect resource owner.

try {
    $Result = ConvertFrom-JsonToReelectRequest -Json $ReelectRequest
    Invoke-DasV1OwnersReelectPost -ReelectRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Invoke-DasV1OwnersReelectPost -ReelectRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-DasV1OwnersReelectPost"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## das-v1-owners-resources-resource-id-get


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-resources-resource-id-get)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ResourceId | **Int64** | True  | Unique identifier for the resource.
  Query | Limit | **Int32** |   (optional) (default to 250) | Not applicable for this endpoint. Do not use.
  Query | Offset | **Int32** |   (optional) (default to 0) | Not applicable for this endpoint. Do not use.

### Return type
**String[]**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of owner identity UUIDs for the specified resource was retrieved successfully. | String[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$ResourceId = 101 # Int64 | Unique identifier for the resource.
$Limit = 250 # Int32 | Not applicable for this endpoint. Do not use. (optional) (default to 250)
$Offset = 0 # Int32 | Not applicable for this endpoint. Do not use. (optional) (default to 0)

# List owners for resource.

try {
    Invoke-DasV1OwnersResourcesResourceIdGet -ResourceId $ResourceId 
    
    # Below is a request that includes all optional parameters
    # Invoke-DasV1OwnersResourcesResourceIdGet -ResourceId $ResourceId -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-DasV1OwnersResourcesResourceIdGet"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## das-v1-owners-source-identity-id-reassign-destination-identity-id-post


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-source-identity-id-reassign-destination-identity-id-post)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceIdentityId | **String** | True  | Unique identifier for the source owner. This should be a UUID representing the identity to reassign from.
Path   | DestinationIdentityId | **String** | True  | Unique identifier for the destination owner. This should be a UUID representing the identity to reassign to.

### Return type
**Int32**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The number of resources whose owners were overwritten. | Int32
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceIdentityId = "a3f1c2d4-5678-4e9b-8c2d-123456789abc" # String | Unique identifier for the source owner. This should be a UUID representing the identity to reassign from.
$DestinationIdentityId = "b4e2d3c5-6789-4f0a-9d3e-234567890bcd" # String | Unique identifier for the destination owner. This should be a UUID representing the identity to reassign to.

# Reassign resource owner.

try {
    Invoke-DasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost -SourceIdentityId $SourceIdentityId -DestinationIdentityId $DestinationIdentityId 
    
    # Below is a request that includes all optional parameters
    # Invoke-DasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost -SourceIdentityId $SourceIdentityId -DestinationIdentityId $DestinationIdentityId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-DasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-application-v1
This endpoint deletes an application from Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/delete-application-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the application to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = 12345 # Int64 | The unique identifier of the application to delete.

# Delete an application by identifier.

try {
    Remove-ApplicationV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-ApplicationV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ApplicationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-data-dictionary-field-v1
Deletes a custom data dictionary field. Built-in fields where required is true cannot be deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-data-dictionary-field-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | The field name to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
409 | Conflict - Returned if an identity collector with the same name already exists. | CreateIdentityCollectorV1409Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Name = "Department" # String | The field name to delete.

# Delete data dictionary field

try {
    Remove-DataDictionaryFieldV1 -Name $Name 
    
    # Below is a request that includes all optional parameters
    # Remove-DataDictionaryFieldV1 -Name $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-DataDictionaryFieldV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-identity-collector-v1
This endpoint deletes an identity collector from Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/delete-identity-collector-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the identity collector to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
409 | The identity collector is in use and cannot be deleted. | Identitycollectordependenciesconflicterror
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = 12345 # Int64 | The unique identifier of the identity collector to delete.

# Delete identity collector by identifier

try {
    Remove-IdentityCollectorV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-IdentityCollectorV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-IdentityCollectorV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-schedule-v1
This end-point sends a request to delete a schedule in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/delete-schedule-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the schedule to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = 1001 # Int64 | The unique identifier of the schedule to delete.

# Delete a DAS schedule.

try {
    Remove-ScheduleV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-ScheduleV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ScheduleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-task-v1
This end-point sends a request to delete a task in Data Access Security.


[API Spec](https://developer.sailpoint.com/docs/api/delete-task-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the task to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = 1001 # Int64 | The unique identifier of the task to delete.

# Delete a DAS task.

try {
    Remove-TaskV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-TaskV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-TaskV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-application-v1
This endpoint retrieves the details of a specific application in Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/get-application-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the application to retrieve.

### Return type
[**ApplicationItem**](../models/application-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The application details were retrieved successfully. | ApplicationItem
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = 12345 # Int64 | The unique identifier of the application to retrieve.

# Retrieve application details by identifier.

try {
    Get-ApplicationV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ApplicationV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ApplicationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-applications-v1
This endpoint lists all the applications in Data Access Security with optional filtering.

[API Spec](https://developer.sailpoint.com/docs/api/get-applications-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **appIds**: *eq, in*  **tagIds**: *eq, in*  **statuses**: *eq, in*  **groupCodes**: *eq, in*  **virtualAppId**: *eq*  **appName**: *eq*  **supportsValidation**: *eq*  Supported composite operators are *and, or*
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**ApplicationItem[]**](../models/application-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of applications matching the filter criteria. | ApplicationItem[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'AppType eq 'ActiveDirectory' and Statuses eq 'Passed'' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **appIds**: *eq, in*  **tagIds**: *eq, in*  **statuses**: *eq, in*  **groupCodes**: *eq, in*  **virtualAppId**: *eq*  **appName**: *eq*  **supportsValidation**: *eq*  Supported composite operators are *and, or* (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Search applications in DAS.

try {
    Get-ApplicationsV1 
    
    # Below is a request that includes all optional parameters
    # Get-ApplicationsV1 -Filters $Filters -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ApplicationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-identity-collector-builtin-properties-v1
Returns the built-in source attribute names for users and groups collections. When no filter is provided, built-in properties for all public identity collector types are returned (the same base types listed by [List Identity Collector Types](https://developer.sailpoint.com/docs/api/get-identity-collector-types-v-1)). When filtered by `type`, only the matching type is returned; the filter accepts any supported type display name, including SaaS variants such as `Box SaaS` or `AWS SaaS`.

These attributes are always available for field mapping without being listed in `properties`.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-collector-builtin-properties-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*

### Return type
[**Identitycollectorbuiltinpropertiesresponse**](../models/identitycollectorbuiltinpropertiesresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Built-in source attribute names for users and groups collections. | Identitycollectorbuiltinpropertiesresponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'type eq "Azure Active Directory"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq* (optional)

# List built-in identity collector properties

try {
    Get-IdentityCollectorBuiltinPropertiesV1 
    
    # Below is a request that includes all optional parameters
    # Get-IdentityCollectorBuiltinPropertiesV1 -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IdentityCollectorBuiltinPropertiesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-identity-collector-types-v1
Returns the public identity collector type display names exposed for metadata and UI discovery. This endpoint lists base types only (for example, `Box` rather than `Box SaaS`). SaaS variants are not listed here; the identity collector type is derived from `sourceId` when creating an identity collector. Existing identity collectors may still report SaaS variant types in list and update responses.

Pagination is not supported for this endpoint; the full set of public types is always returned.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-collector-types-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
**String[]**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Supported identity collector type display names. | String[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List identity collector types

try {
    Get-IdentityCollectorTypesV1 
    
    # Below is a request that includes all optional parameters
    # Get-IdentityCollectorTypesV1 -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IdentityCollectorTypesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-owners-v1


[API Spec](https://developer.sailpoint.com/docs/api/get-owners-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | AppId | **Int64** | True  | The unique identifier of the application for which to retrieve owners.
  Query | Limit | **Int32** |   (optional) (default to 250) | Not applicable for this endpoint. Do not use.
  Query | Offset | **Int32** |   (optional) (default to 0) | Not applicable for this endpoint. Do not use.

### Return type
[**DataOwnerModel[]**](../models/data-owner-model)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returns a list of DataOwnerModel objects. | DataOwnerModel[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$AppId = 2001 # Int64 | The unique identifier of the application for which to retrieve owners.
$Limit = 250 # Int32 | Not applicable for this endpoint. Do not use. (optional) (default to 250)
$Offset = 0 # Int32 | Not applicable for this endpoint. Do not use. (optional) (default to 0)

# Retrieve owners per application.

try {
    Get-OwnersV1 -AppId $AppId 
    
    # Below is a request that includes all optional parameters
    # Get-OwnersV1 -AppId $AppId -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-OwnersV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-schedule-v1
This end-point gets a schedule in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/get-schedule-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the schedule to retrieve.

### Return type
[**ScheduleInfo**](../models/schedule-info)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A schedule object. | ScheduleInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = 1001 # Int64 | The unique identifier of the schedule to retrieve.

# Get a DAS schedule.

try {
    Get-ScheduleV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ScheduleV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ScheduleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-schedules-v1
This end-point lists all the schedules in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/get-schedules-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **scheduleTaskIds**: *eq, in*  **taskTypeName**: *eq, in*  **status**: *eq*  **applicationId**: *eq*  **fullName**: *eq*  **nameSubString**: *eq*  **scheduleType**: *eq*  Supported composite operators are *and, or*
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**ScheduleInfo[]**](../models/schedule-info)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Schedule objects. | ScheduleInfo[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'ScheduleType eq "Daily" and startTime eq 1762237200' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **scheduleTaskIds**: *eq, in*  **taskTypeName**: *eq, in*  **status**: *eq*  **applicationId**: *eq*  **fullName**: *eq*  **nameSubString**: *eq*  **scheduleType**: *eq*  Supported composite operators are *and, or* (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List all schedules.

try {
    Get-SchedulesV1 
    
    # Below is a request that includes all optional parameters
    # Get-SchedulesV1 -Filters $Filters -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SchedulesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-task-v1
This end-point gets a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/get-task-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the task to retrieve.

### Return type
[**TaskInfo**](../models/task-info)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Task object. | TaskInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = 1001 # Int64 | The unique identifier of the task to retrieve.

# Get a DAS task.

try {
    Get-TaskV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-TaskV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-TaskV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-tasks-v1
This end-point lists all the tasks in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/get-tasks-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **taskIds**: *eq, in*  **statuses**: *eq, in*  **taskTypeName**: *eq, in*  **taskName**: *eq*  **endBeforeTime**: *eq*  Supported composite operators are *and, or*  Example: taskTypeName eq ""DataSync"" and endBeforeTime eq 1762240800
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**TaskInfo[]**](../models/task-info)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returns a list of Data Access Security tasks. | TaskInfo[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'TaskTypeName eq "DataClassification and EndBeforeTime eq 1762240800" # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **taskIds**: *eq, in*  **statuses**: *eq, in*  **taskTypeName**: *eq, in*  **taskName**: *eq*  **endBeforeTime**: *eq*  Supported composite operators are *and, or*  Example: taskTypeName eq ""DataSync"' and endBeforeTime eq 1762240800 (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Lists all DAS tasks.

try {
    Get-TasksV1 
    
    # Below is a request that includes all optional parameters
    # Get-TasksV1 -Filters $Filters -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-TasksV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-data-dictionary-fields-v1
Returns custom data dictionary fields that can be used when configuring identity collector field mappings and other permission-related settings. Built-in fields are not included in list responses; only custom fields created via [Create Data Dictionary Field](https://developer.sailpoint.com/docs/api/create-data-dictionary-field-v-1) are returned. All listed fields have `required: false`.

[API Spec](https://developer.sailpoint.com/docs/api/list-data-dictionary-fields-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **dataDictionaryType**: *eq*  **name**: *eq*  Supported composite operators are *and*
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Datadictionaryfieldlistitem[]**](../models/datadictionaryfieldlistitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Data dictionary fields matching the filter criteria. | Datadictionaryfieldlistitem[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'dataDictionaryType eq "Users" and name eq "Department"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **dataDictionaryType**: *eq*  **name**: *eq*  Supported composite operators are *and* (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List data dictionary fields

try {
    Get-DataDictionaryFieldsV1 
    
    # Below is a request that includes all optional parameters
    # Get-DataDictionaryFieldsV1 -Filters $Filters -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DataDictionaryFieldsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-identity-collectors-v1
This endpoint lists the identity collectors in Data Access Security with optional filtering and pagination.

Sorting is not supported for this endpoint; supplying the `sorters` query parameter results in a validation error.

[API Spec](https://developer.sailpoint.com/docs/api/list-identity-collectors-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  **name**: *eq, co*  For `name`, `eq` performs an exact match and `co` performs a contains (substring) match. Use public type display names from [List Identity Collector Types](https://developer.sailpoint.com/docs/api/get-identity-collector-types-v-1) with `type` filters (for example, `AWS`, not `AWS SaaS`).  Supported composite operators are *and, or*
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Identitycollectorlistitem[]**](../models/identitycollectorlistitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of identity collectors matching the filter criteria. | Identitycollectorlistitem[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'name co "Finance" and type eq "AWS"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  **name**: *eq, co*  For `name`, `eq` performs an exact match and `co` performs a contains (substring) match. Use public type display names from [List Identity Collector Types](https://developer.sailpoint.com/docs/api/get-identity-collector-types-v-1) with `type` filters (for example, `AWS`, not `AWS SaaS`).  Supported composite operators are *and, or* (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List identity collectors

try {
    Get-IdentityCollectorsV1 
    
    # Below is a request that includes all optional parameters
    # Get-IdentityCollectorsV1 -Filters $Filters -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IdentityCollectorsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-application-v1
This endpoint updates an existing application in Data Access Security with the specified configuration.

[API Spec](https://developer.sailpoint.com/docs/api/put-application-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the application to update.
 Body  | BaseCreateApplicationRequest | [**BaseCreateApplicationRequest**](../models/base-create-application-request) | True  | Request body containing the updated details for the application.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = 12345 # Int64 | The unique identifier of the application to update.
$BaseCreateApplicationRequest = @"{
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
}"@

# Update application by identifier.

try {
    $Result = ConvertFrom-JsonToBaseCreateApplicationRequest -Json $BaseCreateApplicationRequest
    Send-ApplicationV1 -Id $Id -BaseCreateApplicationRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-ApplicationV1 -Id $Id -BaseCreateApplicationRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ApplicationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-data-dictionary-field-v1
Fully replaces a custom data dictionary field. This is a PUT operation, not a partial update: the request body must contain the complete resource representation. Omitted properties are rejected. For custom fields, `fieldType`, `dataDictionaryType`, and `required` must match the current values; only `name` may change. Built-in fields where `required` is true cannot be updated.

List the field first with [List Data Dictionary Fields](https://developer.sailpoint.com/docs/api/list-data-dictionary-fields-v-1) to obtain the current representation before replacing it.

[API Spec](https://developer.sailpoint.com/docs/api/put-data-dictionary-field-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | The current field name.
 Body  | Updatedatadictionaryfieldrequest | [**Updatedatadictionaryfieldrequest**](../models/updatedatadictionaryfieldrequest) | True  | Complete data dictionary field representation used to fully replace the existing field.

### Return type
[**Datadictionaryfieldlistitem**](../models/datadictionaryfieldlistitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The data dictionary field was fully replaced. | Datadictionaryfieldlistitem
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
409 | Conflict - Returned if an identity collector with the same name already exists. | CreateIdentityCollectorV1409Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Name = "Department" # String | The current field name.
$Updatedatadictionaryfieldrequest = @"{
  "name" : "Cost Center",
  "dataDictionaryType" : "Users",
  "fieldType" : "String",
  "required" : false
}"@

# Replace data dictionary field

try {
    $Result = ConvertFrom-JsonToUpdatedatadictionaryfieldrequest -Json $Updatedatadictionaryfieldrequest
    Send-DataDictionaryFieldV1 -Name $Name -Updatedatadictionaryfieldrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-DataDictionaryFieldV1 -Name $Name -Updatedatadictionaryfieldrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-DataDictionaryFieldV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-identity-collector-v1
Fully replaces an existing identity collector in Data Access Security. This is a PUT operation, not a partial update: the request body must contain the complete resource representation. Omitted or null top-level properties are rejected. After a successful request, a subsequent list request returns exactly the configuration that was sent.

Retrieve the current configuration with [List Identity Collectors](https://developer.sailpoint.com/docs/api/list-identity-collectors-v-1) before replacing it. The `sourceId` and `type` cannot be changed and must match the current values.

[API Spec](https://developer.sailpoint.com/docs/api/put-identity-collector-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the identity collector to replace.
 Body  | Updateidentitycollectorrequest | [**Updateidentitycollectorrequest**](../models/updateidentitycollectorrequest) | True  | Complete identity collector representation used to fully replace the existing resource. Partial updates are not supported.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | The identity collector was fully replaced. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
409 | Conflict - Returned if an identity collector with the same name already exists. | CreateIdentityCollectorV1409Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = 12345 # Int64 | The unique identifier of the identity collector to replace.
$Updateidentitycollectorrequest = @"{
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
}"@

# Replace identity collector

try {
    $Result = ConvertFrom-JsonToUpdateidentitycollectorrequest -Json $Updateidentitycollectorrequest
    Send-IdentityCollectorV1 -Id $Id -Updateidentitycollectorrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-IdentityCollectorV1 -Id $Id -Updateidentitycollectorrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-IdentityCollectorV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-schedule-v1


[API Spec](https://developer.sailpoint.com/docs/api/put-schedule-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the schedule to update.
 Body  | UpdateScheduleRequest | [**UpdateScheduleRequest**](../models/update-schedule-request) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = 1001 # Int64 | The unique identifier of the schedule to update.
$UpdateScheduleRequest = @"{
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
}"@

# Update a schedule.

try {
    $Result = ConvertFrom-JsonToUpdateScheduleRequest -Json $UpdateScheduleRequest
    Send-ScheduleV1 -Id $Id -UpdateScheduleRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-ScheduleV1 -Id $Id -UpdateScheduleRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ScheduleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-task-rerun-v1
This end-point sends a request to re-run a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/start-task-rerun-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the task to rerun.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = 1001 # Int64 | The unique identifier of the task to rerun.

# Rerun a DAS task.

try {
    Start-TaskRerunV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Start-TaskRerunV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-TaskRerunV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
