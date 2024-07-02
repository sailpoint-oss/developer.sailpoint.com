---
id: work-items
title: WorkItems
pagination_label: WorkItems
sidebar_label: WorkItems
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'WorkItems'] 
slug: /tools/sdk/go/beta/methods/work-items
tags: ['SDK', 'Software Development Kit', 'WorkItems']
---


# WorkItems

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApproveApprovalItem**](#approve-approval-item) | **Post** /work-items/{id}/approve/{approvalItemId} | Approve an Approval Item
[**ApproveApprovalItemsInBulk**](#approve-approval-items-in-bulk) | **Post** /work-items/bulk-approve/{id} | Bulk approve Approval Items
[**CompleteWorkItem**](#complete-work-item) | **Post** /work-items/{id} | Complete a Work Item
[**ForwardWorkItem**](#forward-work-item) | **Post** /work-items/{id}/forward | Forward a Work Item
[**GetCompletedWorkItems**](#get-completed-work-items) | **Get** /work-items/completed | Completed Work Items
[**GetCountCompletedWorkItems**](#get-count-completed-work-items) | **Get** /work-items/count/completed | Count Completed Work Items
[**GetCountWorkItems**](#get-count-work-items) | **Get** /work-items/count | Count Work Items
[**GetWorkItem**](#get-work-item) | **Get** /work-items/{id} | Get a Work Item
[**GetWorkItemsSummary**](#get-work-items-summary) | **Get** /work-items/summary | Work Items Summary
[**ListWorkItems**](#list-work-items) | **Get** /work-items | List Work Items
[**RejectApprovalItem**](#reject-approval-item) | **Post** /work-items/{id}/reject/{approvalItemId} | Reject an Approval Item
[**RejectApprovalItemsInBulk**](#reject-approval-items-in-bulk) | **Post** /work-items/bulk-reject/{id} | Bulk reject Approval Items
[**SubmitAccountSelection**](#submit-account-selection) | **Post** /work-items/{id}/submit-account-selection | Submit Account Selections



## approve-approval-item


This API approves an Approval Item. Either an admin, or the owning/current user must make this request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | The ID of the work item
Path   | approvalItemId | **string** | True  | The ID of the approval item.

	
### Return type

[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A work items details object. | WorkItems
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## approve-approval-items-in-bulk


This API bulk approves Approval Items. Either an admin, or the owning/current user must make this request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | The ID of the work item

	
### Return type

[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A work items details object. | WorkItems
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## complete-work-item


This API completes a work item. Either an admin, or the owning/current user must make this request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | The ID of the work item

	
### Return type

[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A WorkItems object | WorkItems
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## forward-work-item


This API forwards a work item to a new owner. Either an admin, or the owning/current user must make this request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | The ID of the work item
 Body  | workItemForward | [**WorkItemForward**](../models/work-item-forward) | True  | 

	
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

[[Back to top]](#) 


## get-completed-work-items


This gets a collection of completed work items belonging to either the specified user(admin required), or the current user.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | ownerId | **string** |   (optional) | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request.
  Query | limit | **int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

	
### Return type

[**[]WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of completed work items. | []WorkItems
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-count-completed-work-items


This gets a count of completed work items belonging to either the specified user(admin required), or the current user.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | ownerId | **string** |   (optional) | ID of the work item owner.

	
### Return type

[**[]WorkItemsCount**](../models/work-items-count)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of work items | []WorkItemsCount
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-count-work-items


This gets a count of work items belonging to either the specified user(admin required), or the current user.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | ownerId | **string** |   (optional) | ID of the work item owner.

	
### Return type

[**[]WorkItemsCount**](../models/work-items-count)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of work items | []WorkItemsCount
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-work-item


This gets the details of a Work Item belonging to either the specified user(admin required), or the current user.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | ID of the work item.
  Query | ownerId | **string** |   (optional) | ID of the work item owner.

	
### Return type

[**[]WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The work item with the given ID. | []WorkItems
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-work-items-summary


This gets a summary of work items belonging to either the specified user(admin required), or the current user.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | ownerId | **string** |   (optional) | ID of the work item owner.

	
### Return type

[**[]WorkItemsSummary**](../models/work-items-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of work items | []WorkItemsSummary
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## list-work-items


This gets a collection of work items belonging to either the specified user(admin required), or the current user.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | ownerId | **string** |   (optional) | ID of the work item owner.

	
### Return type

[**[]WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of work items | []WorkItems
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## reject-approval-item


This API rejects an Approval Item. Either an admin, or the owning/current user must make this request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | The ID of the work item
Path   | approvalItemId | **string** | True  | The ID of the approval item.

	
### Return type

[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A work items details object. | WorkItems
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## reject-approval-items-in-bulk


This API bulk rejects Approval Items. Either an admin, or the owning/current user must make this request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | The ID of the work item

	
### Return type

[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A work items details object. | WorkItems
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## submit-account-selection


This API submits account selections. Either an admin, or the owning/current user must make this request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | The ID of the work item
 Body  | requestBody | **map[string]interface{}** | True  | Account Selection Data map, keyed on fieldName

	
### Return type

[**WorkItems**](../models/work-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A work items details object. | WorkItems
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 

