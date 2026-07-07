---
id: work-items
title: WorkItems
pagination_label: WorkItems
sidebar_label: WorkItems
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkItems', 'WorkItems'] 
slug: /tools/sdk/powershell/workitems/methods/work-items
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
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Approve-ApprovalItemV1**](#approve-approval-item-v1) | **POST** `/work-items/v1/{id}/approve/{approvalItemId}` | Approve an approval item
[**Approve-ApprovalItemsInBulkV1**](#approve-approval-items-in-bulk-v1) | **POST** `/work-items/v1/bulk-approve/{id}` | Bulk approve approval items
[**Complete-WorkItemV1**](#complete-work-item-v1) | **POST** `/work-items/v1/{id}` | Complete a work item
[**Invoke-ForwardWorkItemV1**](#forward-work-item-v1) | **POST** `/work-items/v1/{id}/forward` | Forward a work item
[**Get-CompletedWorkItemsV1**](#get-completed-work-items-v1) | **GET** `/work-items/v1/completed` | Completed work items
[**Get-CountCompletedWorkItemsV1**](#get-count-completed-work-items-v1) | **GET** `/work-items/v1/completed/count` | Count completed work items
[**Get-CountWorkItemsV1**](#get-count-work-items-v1) | **GET** `/work-items/v1/count` | Count work items
[**Get-WorkItemV1**](#get-work-item-v1) | **GET** `/work-items/v1/{id}` | Get a work item
[**Get-WorkItemsSummaryV1**](#get-work-items-summary-v1) | **GET** `/work-items/v1/summary` | Work items summary
[**Get-WorkItemsV1**](#list-work-items-v1) | **GET** `/work-items/v1` | List work items
[**Deny-ApprovalItemV1**](#reject-approval-item-v1) | **POST** `/work-items/v1/{id}/reject/{approvalItemId}` | Reject an approval item
[**Deny-ApprovalItemsInBulkV1**](#reject-approval-items-in-bulk-v1) | **POST** `/work-items/v1/bulk-reject/{id}` | Bulk reject approval items
[**Submit-AccountSelectionV1**](#submit-account-selection-v1) | **POST** `/work-items/v1/{id}/submit-account-selection` | Submit account selections


## approve-approval-item-v1
This API approves an Approval Item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-approval-item-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the work item
Path   | ApprovalItemId | **String** | True  | The ID of the approval item.

### Return type
[**Workitems**](../models/workitems)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A work items details object. | Workitems
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the work item
$ApprovalItemId = "1211bcaa32112bcef6122adb21cef1ac" # String | The ID of the approval item.

# Approve an approval item

try {
    Approve-ApprovalItemV1 -Id $Id -ApprovalItemId $ApprovalItemId 
    
    # Below is a request that includes all optional parameters
    # Approve-ApprovalItemV1 -Id $Id -ApprovalItemId $ApprovalItemId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Approve-ApprovalItemV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## approve-approval-items-in-bulk-v1
This API bulk approves Approval Items. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-approval-items-in-bulk-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the work item

### Return type
[**Workitems**](../models/workitems)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A work items details object. | Workitems
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the work item

# Bulk approve approval items

try {
    Approve-ApprovalItemsInBulkV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Approve-ApprovalItemsInBulkV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Approve-ApprovalItemsInBulkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## complete-work-item-v1
This API completes a work item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/complete-work-item-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the work item
 Body  | Body | **String** |   (optional) | Body is the request payload to create form definition request

### Return type
[**Workitems**](../models/workitems)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A WorkItems object | Workitems
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the work item
$Body = "MyBody" # String | Body is the request payload to create form definition request (optional)

# Complete a work item

try {
    Complete-WorkItemV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Complete-WorkItemV1 -Id $Id -Body $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Complete-WorkItemV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## forward-work-item-v1
This API forwards a work item to a new owner. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/forward-work-item-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the work item
 Body  | Workitemforward | [**Workitemforward**](../models/workitemforward) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Success, but no data is returned. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the work item
$Workitemforward = @""@

# Forward a work item

try {
    $Result = ConvertFrom-JsonToWorkitemforward -Json $Workitemforward
    Invoke-ForwardWorkItemV1 -Id $Id -Workitemforward $Result 
    
    # Below is a request that includes all optional parameters
    # Invoke-ForwardWorkItemV1 -Id $Id -Workitemforward $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-ForwardWorkItemV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-completed-work-items-v1
This gets a collection of completed work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-completed-work-items-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | OwnerId | **String** |   (optional) | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Workitems[]**](../models/workitems)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of completed work items. | Workitems[]
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OwnerId = "1211bcaa32112bcef6122adb21cef1ac" # String | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Completed work items

try {
    Get-CompletedWorkItemsV1 
    
    # Below is a request that includes all optional parameters
    # Get-CompletedWorkItemsV1 -OwnerId $OwnerId -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CompletedWorkItemsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-count-completed-work-items-v1
This gets a count of completed work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-count-completed-work-items-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | OwnerId | **String** |   (optional) | ID of the work item owner.

### Return type
[**Workitemscount**](../models/workitemscount)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of work items | Workitemscount
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OwnerId = "MyOwnerId" # String | ID of the work item owner. (optional)

# Count completed work items

try {
    Get-CountCompletedWorkItemsV1 
    
    # Below is a request that includes all optional parameters
    # Get-CountCompletedWorkItemsV1 -OwnerId $OwnerId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CountCompletedWorkItemsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-count-work-items-v1
This gets a count of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-count-work-items-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | OwnerId | **String** |   (optional) | ID of the work item owner.

### Return type
[**Workitemscount**](../models/workitemscount)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of work items | Workitemscount
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OwnerId = "ef38f94347e94562b5bb8424a56397d8" # String | ID of the work item owner. (optional)

# Count work items

try {
    Get-CountWorkItemsV1 
    
    # Below is a request that includes all optional parameters
    # Get-CountWorkItemsV1 -OwnerId $OwnerId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CountWorkItemsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-work-item-v1
This gets the details of a Work Item belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-work-item-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the work item.

### Return type
[**Workitems**](../models/workitems)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The work item with the given ID. | Workitems
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | ID of the work item.

# Get a work item

try {
    Get-WorkItemV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-WorkItemV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkItemV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-work-items-summary-v1
This gets a summary of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-work-items-summary-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | OwnerId | **String** |   (optional) | ID of the work item owner.

### Return type
[**Workitemssummary**](../models/workitemssummary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of work items | Workitemssummary
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OwnerId = "1211bcaa32112bcef6122adb21cef1ac" # String | ID of the work item owner. (optional)

# Work items summary

try {
    Get-WorkItemsSummaryV1 
    
    # Below is a request that includes all optional parameters
    # Get-WorkItemsSummaryV1 -OwnerId $OwnerId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkItemsSummaryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-work-items-v1
This gets a collection of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-work-items-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | OwnerId | **String** |   (optional) | ID of the work item owner.

### Return type
[**Workitems[]**](../models/workitems)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of work items | Workitems[]
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$OwnerId = "1211bcaa32112bcef6122adb21cef1ac" # String | ID of the work item owner. (optional)

# List work items

try {
    Get-WorkItemsV1 
    
    # Below is a request that includes all optional parameters
    # Get-WorkItemsV1 -Limit $Limit -Offset $Offset -Count $Count -OwnerId $OwnerId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-WorkItemsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## reject-approval-item-v1
This API rejects an Approval Item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-approval-item-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the work item
Path   | ApprovalItemId | **String** | True  | The ID of the approval item.

### Return type
[**Workitems**](../models/workitems)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A work items details object. | Workitems
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the work item
$ApprovalItemId = "1211bcaa32112bcef6122adb21cef1ac" # String | The ID of the approval item.

# Reject an approval item

try {
    Deny-ApprovalItemV1 -Id $Id -ApprovalItemId $ApprovalItemId 
    
    # Below is a request that includes all optional parameters
    # Deny-ApprovalItemV1 -Id $Id -ApprovalItemId $ApprovalItemId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Deny-ApprovalItemV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## reject-approval-items-in-bulk-v1
This API bulk rejects Approval Items. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-approval-items-in-bulk-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the work item

### Return type
[**Workitems**](../models/workitems)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A work items details object. | Workitems
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the work item

# Bulk reject approval items

try {
    Deny-ApprovalItemsInBulkV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Deny-ApprovalItemsInBulkV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Deny-ApprovalItemsInBulkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## submit-account-selection-v1
This API submits account selections. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/submit-account-selection-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the work item
 Body  | RequestBody | [**map[string]AnyType**](https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4) | True  | Account Selection Data map, keyed on fieldName

### Return type
[**Workitems**](../models/workitems)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A work items details object. | Workitems
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkItemsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkItemsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the work item
$RequestBody = @{ key_example =  } # System.Collections.Hashtable | Account Selection Data map, keyed on fieldName

# Submit account selections

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Submit-AccountSelectionV1 -Id $Id -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Submit-AccountSelectionV1 -Id $Id -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-AccountSelectionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
