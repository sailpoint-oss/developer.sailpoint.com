---
id: work-items
title: WorkItems
pagination_label: WorkItems
sidebar_label: WorkItems
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkItems', 'WorkItems'] 
slug: /tools/sdk/powershell/v3/methods/work-items
tags: ['SDK', 'Software Development Kit', 'WorkItems', 'WorkItems']
---


# WorkItems
  Use this API to implement work item functionality. 
With this functionality in place, users can manage their work items (tasks). 

Work items refer to the tasks users see in Identity Security Cloud&#39;s Task Manager. 
They can see the pending work items they need to complete, as well as the work items they have already completed. 
Task Manager lists the work items along with the involved sources, identities, accounts, and the timestamp when the work item was created. 
For example, a user may see a pending &#39;Create an Account&#39; work item for the identity Fred.Astaire in GitHub for Fred&#39;s GitHub account, fred-astaire-sp. 
Once the user completes the work item, the work item will be listed with his or her other completed work items. 

To complete work items, users can use their dashboards and select the &#39;My Tasks&#39; widget. 
The widget will list any work items they need to complete, and they can select the work item from the list to review its details. 
When they complete the work item, they can select &#39;Mark Complete&#39; to add it to their list of completed work items. 

Refer to [Task Manager](https://documentation.sailpoint.com/saas/user-help/task_manager.html) for more information about work items, including the different types of work items users may need to complete.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Approve-ApprovalItem**](#approve-approval-item) | **POST** `/work-items/{id}/approve/{approvalItemId}` | Approve an Approval Item
[**Approve-ApprovalItemsInBulk**](#approve-approval-items-in-bulk) | **POST** `/work-items/bulk-approve/{id}` | Bulk approve Approval Items
[**Complete-WorkItem**](#complete-work-item) | **POST** `/work-items/{id}` | Complete a Work Item
[**Get-CompletedWorkItems**](#get-completed-work-items) | **GET** `/work-items/completed` | Completed Work Items
[**Get-CountCompletedWorkItems**](#get-count-completed-work-items) | **GET** `/work-items/completed/count` | Count Completed Work Items
[**Get-CountWorkItems**](#get-count-work-items) | **GET** `/work-items/count` | Count Work Items
[**Get-WorkItem**](#get-work-item) | **GET** `/work-items/{id}` | Get a Work Item
[**Get-WorkItemsSummary**](#get-work-items-summary) | **GET** `/work-items/summary` | Work Items Summary
[**Get-WorkItems**](#list-work-items) | **GET** `/work-items` | List Work Items
[**Deny-ApprovalItem**](#reject-approval-item) | **POST** `/work-items/{id}/reject/{approvalItemId}` | Reject an Approval Item
[**Deny-ApprovalItemsInBulk**](#reject-approval-items-in-bulk) | **POST** `/work-items/bulk-reject/{id}` | Bulk reject Approval Items
[**Send-WorkItemForward**](#send-work-item-forward) | **POST** `/work-items/{id}/forward` | Forward a Work Item
[**Submit-AccountSelection**](#submit-account-selection) | **POST** `/work-items/{id}/submit-account-selection` | Submit Account Selections


## approve-approval-item

This API approves an Approval Item. Either an admin, or the owning/current user must make this request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the work item
Path   | ApprovalItemId | **String** | True  | The ID of the approval item.

### Return type

[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A work items details object. | WorkItems
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the work item
$ApprovalItemId = "1211bcaa32112bcef6122adb21cef1ac" # String | The ID of the approval item.
# Approve an Approval Item
try {
    Approve-ApprovalItem-Id $Id -ApprovalItemId $ApprovalItemId 
    
    # Below is a request that includes all optional parameters
    # Approve-ApprovalItem -Id $Id -ApprovalItemId $ApprovalItemId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Approve-ApprovalItem"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## approve-approval-items-in-bulk

This API bulk approves Approval Items. Either an admin, or the owning/current user must make this request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the work item

### Return type

[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A work items details object. | WorkItems
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the work item
# Bulk approve Approval Items
try {
    Approve-ApprovalItemsInBulk-Id $Id 
    
    # Below is a request that includes all optional parameters
    # Approve-ApprovalItemsInBulk -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Approve-ApprovalItemsInBulk"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## complete-work-item

This API completes a work item. Either an admin, or the owning/current user must make this request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the work item

### Return type

[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A WorkItems object | WorkItems
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the work item
# Complete a Work Item
try {
    Complete-WorkItem-Id $Id 
    
    # Below is a request that includes all optional parameters
    # Complete-WorkItem -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Complete-WorkItem"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-completed-work-items

This gets a collection of completed work items belonging to either the specified user(admin required), or the current user.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | OwnerId | **String** |   (optional) | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type

[**WorkItems[]**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of completed work items. | WorkItems[]
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OwnerId = "1211bcaa32112bcef6122adb21cef1ac" # String | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
# Completed Work Items
try {
    Get-CompletedWorkItems
    
    # Below is a request that includes all optional parameters
    # Get-CompletedWorkItems -OwnerId $OwnerId -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CompletedWorkItems"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-count-completed-work-items

This gets a count of completed work items belonging to either the specified user(admin required), or the current user.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | OwnerId | **String** |   (optional) | ID of the work item owner.

### Return type

[**WorkItemsCount**](../models/work-items-count)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of work items | WorkItemsCount
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OwnerId = "1211bcaa32112bcef6122adb21cef1ac" # String | ID of the work item owner. (optional)
# Count Completed Work Items
try {
    Get-CountCompletedWorkItems
    
    # Below is a request that includes all optional parameters
    # Get-CountCompletedWorkItems -OwnerId $OwnerId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CountCompletedWorkItems"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-count-work-items

This gets a count of work items belonging to either the specified user(admin required), or the current user.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | OwnerId | **String** |   (optional) | ID of the work item owner.

### Return type

[**WorkItemsCount**](../models/work-items-count)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of work items | WorkItemsCount
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OwnerId = "ef38f94347e94562b5bb8424a56397d8" # String | ID of the work item owner. (optional)
# Count Work Items
try {
    Get-CountWorkItems
    
    # Below is a request that includes all optional parameters
    # Get-CountWorkItems -OwnerId $OwnerId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CountWorkItems"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-work-item

This gets the details of a Work Item belonging to either the specified user(admin required), or the current user.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the work item.

### Return type

[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The work item with the given ID. | WorkItems
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | ID of the work item.
# Get a Work Item
try {
    Get-WorkItem-Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-WorkItem -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkItem"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-work-items-summary

This gets a summary of work items belonging to either the specified user(admin required), or the current user.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | OwnerId | **String** |   (optional) | ID of the work item owner.

### Return type

[**WorkItemsSummary**](../models/work-items-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of work items | WorkItemsSummary
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OwnerId = "1211bcaa32112bcef6122adb21cef1ac" # String | ID of the work item owner. (optional)
# Work Items Summary
try {
    Get-WorkItemsSummary
    
    # Below is a request that includes all optional parameters
    # Get-WorkItemsSummary -OwnerId $OwnerId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkItemsSummary"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-work-items

This gets a collection of work items belonging to either the specified user(admin required), or the current user.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | OwnerId | **String** |   (optional) | ID of the work item owner.

### Return type

[**WorkItems[]**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of work items | WorkItems[]
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$OwnerId = "1211bcaa32112bcef6122adb21cef1ac" # String | ID of the work item owner. (optional)
# List Work Items
try {
    Get-WorkItems
    
    # Below is a request that includes all optional parameters
    # Get-WorkItems -Limit $Limit -Offset $Offset -Count $Count -OwnerId $OwnerId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkItems"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## reject-approval-item

This API rejects an Approval Item. Either an admin, or the owning/current user must make this request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the work item
Path   | ApprovalItemId | **String** | True  | The ID of the approval item.

### Return type

[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A work items details object. | WorkItems
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the work item
$ApprovalItemId = "1211bcaa32112bcef6122adb21cef1ac" # String | The ID of the approval item.
# Reject an Approval Item
try {
    Deny-ApprovalItem-Id $Id -ApprovalItemId $ApprovalItemId 
    
    # Below is a request that includes all optional parameters
    # Deny-ApprovalItem -Id $Id -ApprovalItemId $ApprovalItemId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Deny-ApprovalItem"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## reject-approval-items-in-bulk

This API bulk rejects Approval Items. Either an admin, or the owning/current user must make this request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the work item

### Return type

[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A work items details object. | WorkItems
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the work item
# Bulk reject Approval Items
try {
    Deny-ApprovalItemsInBulk-Id $Id 
    
    # Below is a request that includes all optional parameters
    # Deny-ApprovalItemsInBulk -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Deny-ApprovalItemsInBulk"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## send-work-item-forward

This API forwards a work item to a new owner. Either an admin, or the owning/current user must make this request. Accessible to work-item Owner, ORG_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the work item
 Body  | WorkItemForward | [**WorkItemForward**](../models/work-item-forward) | True  | 

### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Success, but no data is returned. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the work item
$WorkItemForward = @"{
  "targetOwnerId" : "2c9180835d2e5168015d32f890ca1581",
  "comment" : "I'm going on vacation.",
  "sendNotifications" : true
}"@
# Forward a Work Item
try {
    $Result = ConvertFrom-JsonToWorkItemForward -Json $WorkItemForward
    Send-WorkItemForward-Id $Id -WorkItemForward $Result
    
    # Below is a request that includes all optional parameters
    # Send-WorkItemForward -Id $Id -WorkItemForward $WorkItemForward  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-WorkItemForward"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## submit-account-selection

This API submits account selections. Either an admin, or the owning/current user must make this request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the work item
 Body  | RequestBody | [**map[string]AnyType**](https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4) | True  | Account Selection Data map, keyed on fieldName

### Return type

[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A work items details object. | WorkItems
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the work item
$RequestBody = @{ key_example =  } # System.Collections.Hashtable | Account Selection Data map, keyed on fieldName
# Submit Account Selections
try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Submit-AccountSelection-Id $Id -RequestBody $Result
    
    # Below is a request that includes all optional parameters
    # Submit-AccountSelection -Id $Id -RequestBody $RequestBody  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-AccountSelection"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


