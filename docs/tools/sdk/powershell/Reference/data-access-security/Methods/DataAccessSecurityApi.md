---
id: data-access-security
title: DataAccessSecurity
pagination_label: DataAccessSecurity
sidebar_label: DataAccessSecurity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DataAccessSecurity', 'DataAccessSecurity'] 
slug: /tools/sdk/powershell/dataaccesssecurity/methods/data-access-security
tags: ['SDK', 'Software Development Kit', 'DataAccessSecurity', 'DataAccessSecurity']
---

# DataAccessSecurity
  Use this API to enable data ownership election campaigns, assign resource owners, and respond to identity lifecycle events to maintain continuous accountability.
This API can also trigger and manage DAS tasks such as scans-starting them on demand, updating configurations or schedules, and retrieving statuses. Additionally, you can onboard and manage applications at scale by creating and configuring them, setting scanning schedules, retrieving metadata, and associating them with Virtual Appliances and Identity Collectors.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Suspend-TaskV1**](#cancel-task-v1) | **POST** `/das/v1/tasks/cancel/{id}` | Cancel a DAS task.
[**New-ApplicationV1**](#create-application-v1) | **POST** `/das/v1/applications` | Create application
[**New-IdentityCollectorV1**](#create-identity-collector-v1) | **POST** `/das/identity-collectors/v1` | Create identity collector
[**New-ScheduleV1**](#create-schedule-v1) | **POST** `/das/v1/tasks/schedules` | Create a new schedule.
[**Invoke-DasV1OwnersAssignPost**](#das-v1-owners-assign-post) | **POST** `/das/v1/owners/assign` | Assign owner to application resource.
[**Invoke-DasV1OwnersOwnerIdentityIdResourcesGet**](#das-v1-owners-owner-identity-id-resources-get) | **GET** `/das/v1/owners/{ownerIdentityId}/resources` | List resources for owner.
[**Invoke-DasV1OwnersReelectPost**](#das-v1-owners-reelect-post) | **POST** `/das/v1/owners/reelect` | Re-elect resource owner.
[**Invoke-DasV1OwnersResourcesResourceIdGet**](#das-v1-owners-resources-resource-id-get) | **GET** `/das/v1/owners/resources/{resourceId}` | List owners for resource.
[**Invoke-DasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost**](#das-v1-owners-source-identity-id-reassign-destination-identity-id-post) | **POST** `/das/v1/owners/{sourceIdentityId}/reassign/{destinationIdentityId}` | Reassign resource owner.
[**Remove-ApplicationV1**](#delete-application-v1) | **DELETE** `/das/v1/applications/{id}` | Delete an application by identifier.
[**Remove-IdentityCollectorV1**](#delete-identity-collector-v1) | **DELETE** `/das/identity-collectors/v1/{id}` | Delete identity collector by identifier
[**Remove-ScheduleV1**](#delete-schedule-v1) | **DELETE** `/das/v1/tasks/schedules/{id}` | Delete a DAS schedule.
[**Remove-TaskV1**](#delete-task-v1) | **DELETE** `/das/v1/tasks/{id}` | Delete a DAS task.
[**Get-ApplicationV1**](#get-application-v1) | **GET** `/das/v1/applications/{id}` | Retrieve application details by identifier.
[**Get-ApplicationsV1**](#get-applications-v1) | **GET** `/das/v1/applications` | Search applications in DAS.
[**Get-OwnersV1**](#get-owners-v1) | **GET** `/das/v1/owners/applications/{appId}` | Retrieve owners per application.
[**Get-ScheduleV1**](#get-schedule-v1) | **GET** `/das/v1/tasks/schedules/{id}` | Get a DAS schedule.
[**Get-SchedulesV1**](#get-schedules-v1) | **GET** `/das/v1/tasks/schedules` | List all schedules.
[**Get-TaskV1**](#get-task-v1) | **GET** `/das/v1/tasks/{id}` | Get a DAS task.
[**Get-TasksV1**](#get-tasks-v1) | **GET** `/das/v1/tasks` | Lists all DAS tasks.
[**Get-IdentityCollectorsV1**](#list-identity-collectors-v1) | **GET** `/das/identity-collectors/v1` | List identity collectors
[**Send-ApplicationV1**](#put-application-v1) | **PUT** `/das/v1/applications/{id}` | Update application by identifier.
[**Send-IdentityCollectorV1**](#put-identity-collector-v1) | **PUT** `/das/identity-collectors/v1/{id}` | Update identity collector by identifier
[**Send-ScheduleV1**](#put-schedule-v1) | **PUT** `/das/v1/tasks/schedules/{id}` | Update a schedule.
[**Start-TaskRerunV1**](#start-task-rerun-v1) | **POST** `/das/v1/tasks/rerun/{id}` | Rerun a DAS task.


## cancel-task-v1
This end-point sends a request to cancel a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-task-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-application-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Basecreateapplicationrequest | [**Basecreateapplicationrequest**](../models/basecreateapplicationrequest) | True  | Request body containing the details required to create a new application.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Basecreateapplicationrequest = @""@

# Create application

try {
    $Result = ConvertFrom-JsonToBasecreateapplicationrequest -Json $Basecreateapplicationrequest
    New-ApplicationV1 -Basecreateapplicationrequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-ApplicationV1 -Basecreateapplicationrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ApplicationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-identity-collector-v1
This endpoint creates a new identity collector in Data Access Security for the specified source. The identity collector type is derived from the source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-identity-collector-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Createidentitycollectorrequest = @""@

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


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-schedule-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Createschedulerequest | [**Createschedulerequest**](../models/createschedulerequest) | True  | 

### Return type
**Int64**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | Int64
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Createschedulerequest = @""@

# Create a new schedule.

try {
    $Result = ConvertFrom-JsonToCreateschedulerequest -Json $Createschedulerequest
    New-ScheduleV1 -Createschedulerequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-ScheduleV1 -Createschedulerequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ScheduleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## das-v1-owners-assign-post


[API Spec](https://developer.sailpoint.com/docs/api/v1/das-v1-owners-assign-post)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Assignresourceownerrequest | [**Assignresourceownerrequest**](../models/assignresourceownerrequest) | True  | The request body must contain the application ID, resource path, and identity ID to be assigned as the resource owner.

### Return type
**Int32**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | 1 - success, otherwise failure. | Int32
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Assignresourceownerrequest = @""@

# Assign owner to application resource.

try {
    $Result = ConvertFrom-JsonToAssignresourceownerrequest -Json $Assignresourceownerrequest
    Invoke-DasV1OwnersAssignPost -Assignresourceownerrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Invoke-DasV1OwnersAssignPost -Assignresourceownerrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-DasV1OwnersAssignPost"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## das-v1-owners-owner-identity-id-resources-get


[API Spec](https://developer.sailpoint.com/docs/api/v1/das-v1-owners-owner-identity-id-resources-get)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | OwnerIdentityId | **String** | True  | Unique identifier for the owner. This should be a UUID representing the owner's identity.
  Query | Limit | **Int32** |   (optional) (default to 250) | Not applicable for this endpoint. Do not use.
  Query | Offset | **Int32** |   (optional) (default to 0) | Not applicable for this endpoint. Do not use.

### Return type
[**Resourcemodel[]**](../models/resourcemodel)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of resources owned by the specified identity was retrieved successfully. | Resourcemodel[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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


[API Spec](https://developer.sailpoint.com/docs/api/v1/das-v1-owners-reelect-post)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Reelectrequest | [**Reelectrequest**](../models/reelectrequest) | True  | The request body must contain details for re-electing a resource owner. Date/time fields should use epoch format in seconds.

### Return type
**Int32**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The number of elections CREATED. In case of failure, some elections may not be STARTED. | Int32
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Reelectrequest = @""@

# Re-elect resource owner.

try {
    $Result = ConvertFrom-JsonToReelectrequest -Json $Reelectrequest
    Invoke-DasV1OwnersReelectPost -Reelectrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Invoke-DasV1OwnersReelectPost -Reelectrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-DasV1OwnersReelectPost"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## das-v1-owners-resources-resource-id-get


[API Spec](https://developer.sailpoint.com/docs/api/v1/das-v1-owners-resources-resource-id-get)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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


[API Spec](https://developer.sailpoint.com/docs/api/v1/das-v1-owners-source-identity-id-reassign-destination-identity-id-post)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-application-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

## delete-identity-collector-v1
This endpoint deletes an identity collector from Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-identity-collector-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-schedule-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-task-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-application-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the application to retrieve.

### Return type
[**Applicationitem**](../models/applicationitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The application details were retrieved successfully. | Applicationitem
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-applications-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **appIds**: *eq, in*  **tagIds**: *eq, in*  **statuses**: *eq, in*  **groupCodes**: *eq, in*  **virtualAppId**: *eq*  **appName**: *eq*  **supportsValidation**: *eq*  Supported composite operators are *and, or*
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Applicationitem[]**](../models/applicationitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of applications matching the filter criteria. | Applicationitem[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

## get-owners-v1


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-owners-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | AppId | **Int64** | True  | The unique identifier of the application for which to retrieve owners.
  Query | Limit | **Int32** |   (optional) (default to 250) | Not applicable for this endpoint. Do not use.
  Query | Offset | **Int32** |   (optional) (default to 0) | Not applicable for this endpoint. Do not use.

### Return type
[**Dataownermodel[]**](../models/dataownermodel)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returns a list of DataOwnerModel objects. | Dataownermodel[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-schedule-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the schedule to retrieve.

### Return type
[**Scheduleinfo**](../models/scheduleinfo)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A schedule object. | Scheduleinfo
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-schedules-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **scheduleTaskIds**: *eq, in*  **taskTypeName**: *eq, in*  **status**: *eq*  **applicationId**: *eq*  **fullName**: *eq*  **nameSubString**: *eq*  **scheduleType**: *eq*  Supported composite operators are *and, or*
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Scheduleinfo[]**](../models/scheduleinfo)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Schedule objects. | Scheduleinfo[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-task-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the task to retrieve.

### Return type
[**Taskinfo**](../models/taskinfo)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Task object. | Taskinfo
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-tasks-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **taskIds**: *eq, in*  **statuses**: *eq, in*  **taskTypeName**: *eq, in*  **taskName**: *eq*  **endBeforeTime**: *eq*  Supported composite operators are *and, or*  Example: taskTypeName eq ""DataSync"" and endBeforeTime eq 1762240800
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Taskinfo[]**](../models/taskinfo)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK. Returns a list of Data Access Security tasks. | Taskinfo[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

## list-identity-collectors-v1
This endpoint lists the identity collectors in Data Access Security with optional filtering and pagination.

Sorting is not supported for this endpoint; supplying the `sorters` query parameter results in a validation error.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-identity-collectors-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  Supported composite operators are *and, or*
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Identitycollectorlistitem[]**](../models/identitycollectorlistitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of identity collectors matching the filter criteria. | Identitycollectorlistitem[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'sourceId eq "2c9180835d2e5168015d32f890ca1581"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  Supported composite operators are *and, or* (optional)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-application-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the application to update.
 Body  | Basecreateapplicationrequest | [**Basecreateapplicationrequest**](../models/basecreateapplicationrequest) | True  | Request body containing the updated details for the application.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = 12345 # Int64 | The unique identifier of the application to update.
$Basecreateapplicationrequest = @""@

# Update application by identifier.

try {
    $Result = ConvertFrom-JsonToBasecreateapplicationrequest -Json $Basecreateapplicationrequest
    Send-ApplicationV1 -Id $Id -Basecreateapplicationrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-ApplicationV1 -Id $Id -Basecreateapplicationrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ApplicationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-identity-collector-v1
This endpoint updates the name of an existing identity collector in Data Access Security. The `sourceId` and `type` cannot be changed and must match the current values.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-identity-collector-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the identity collector to update.
 Body  | Updateidentitycollectorrequest | [**Updateidentitycollectorrequest**](../models/updateidentitycollectorrequest) | True  | Request body containing the updated details for the identity collector.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
409 | Conflict - Returned if an identity collector with the same name already exists. | PutIdentityCollectorV1409Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = 12345 # Int64 | The unique identifier of the identity collector to update.
$Updateidentitycollectorrequest = @""@

# Update identity collector by identifier

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


[API Spec](https://developer.sailpoint.com/docs/api/v1/put-schedule-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **Int64** | True  | The unique identifier of the schedule to update.
 Body  | Updateschedulerequest | [**Updateschedulerequest**](../models/updateschedulerequest) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No Content | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = 1001 # Int64 | The unique identifier of the schedule to update.
$Updateschedulerequest = @""@

# Update a schedule.

try {
    $Result = ConvertFrom-JsonToUpdateschedulerequest -Json $Updateschedulerequest
    Send-ScheduleV1 -Id $Id -Updateschedulerequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-ScheduleV1 -Id $Id -Updateschedulerequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ScheduleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-task-rerun-v1
This end-point sends a request to re-run a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-task-rerun-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetTasksV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetTasksV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
