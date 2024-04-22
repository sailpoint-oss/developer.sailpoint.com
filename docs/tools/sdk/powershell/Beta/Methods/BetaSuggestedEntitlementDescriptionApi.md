---
id: suggested-entitlement-description
title: SuggestedEntitlementDescription
pagination_label: SuggestedEntitlementDescription
sidebar_label: SuggestedEntitlementDescription
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'SuggestedEntitlementDescription'] 
slug: /tools/sdk/powershell/beta/methods/suggested-entitlement-description
tags: ['SDK', 'Software Development Kit', 'SuggestedEntitlementDescription']
---


# SuggestedEntitlementDescription

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSedBatchStats**](#get-sed-batch-stats) | **GET** /suggested-entitlement-description-batches/{batchId}/stats | Submit Sed Batch Stats Request
[**getSedBatches**](#get-sed-batches) | **GET** /suggested-entitlement-description-batches | List Sed Batch Request
[**listSeds**](#list-seds) | **GET** /suggested-entitlement-descriptions | List Suggested Entitlement Description
[**patchSed**](#patch-sed) | **PATCH** /suggested-entitlement-descriptions | Patch Suggested Entitlement Description
[**submitSedApproval**](#submit-sed-approval) | **POST** /suggested-entitlement-description-approvals | Submit Bulk Approval Request
[**submitSedAssignment**](#submit-sed-assignment) | **POST** /suggested-entitlement-description-assignments | Submit Sed Assignment Request
[**submitSedBatchRequest**](#submit-sed-batch-request) | **POST** /suggested-entitlement-description-batches | Submit Sed Batch Request



## get-sed-batch-stats


Submit Sed Batch Stats Request.
Submits batchId in the path param (e.g. {batchId}/stats). API responses with stats of the batchId.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | BatchId | **String** | True  | Batch Id

	
### Return type

[**SedBatchStats**](../models/sed-batch-stats)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Stats of Sed batch. | SedBatchStats
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-sed-batches


List Sed Batches.
API responses with Sed Batch Status

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**SedBatchStatus**](../models/sed-batch-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of batch | SedBatchStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## list-seds


List of Suggested Entitlement Description

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int64** |   (optional) | Integer specifying the maximum number of records to return in a single API call.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq*  **status**: *eq, ne, in*  **displayName**: *eq, co*
  Query | Count | **Boolean** |   (optional) | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used.
  Query | CountOnly | **Boolean** |   (optional) | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the Coun parameter in that this one skip executing the actual query and always return an empty array.
  Query | RequestedByAnyone | **Boolean** |   (optional) | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested
  Query | ShowPendingStatusOnly | **Boolean** |   (optional) | Will limit records to items that are in ""suggested"" or ""approved"" status

	
### Return type

[**Sed[]**](../models/sed)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Suggested Entitlement Details | Sed[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## patch-sed


Patch Suggested Entitlement Description

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | id is sed id
 Body  | SedPatch | [**[]SedPatch**](../models/sed-patch) | True  | Sed Patch Request

	
### Return type

[**Sed**](../models/sed)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | detail of patched sed | Sed
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

[[Back to top]](#) 


## submit-sed-approval


Submit Bulk Approval Request for SED.
Request body takes list of SED Ids. API responses with list of SED Approval Status

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | SedApproval | [**[]SedApproval**](../models/sed-approval) | True  | Sed Approval

	
### Return type

[**SedApprovalStatus[]**](../models/sed-approval-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of SED Approval Status | SedApprovalStatus[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

[[Back to top]](#) 


## submit-sed-assignment


Submit Assignment Request.
Request body has an assignee, and list of SED Ids that are assigned to that assignee API responses with batchId that groups all approval requests together

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | SedAssignment | [**SedAssignment**](../models/sed-assignment) | True  | Sed Assignment Request

	
### Return type

[**SedAssignmentResponse**](../models/sed-assignment-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Sed Assignment Response | SedAssignmentResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

[[Back to top]](#) 


## submit-sed-batch-request


Submit Sed Batch Request.
Request body has a list of entitlement Ids that user wants to have description generated by LLM. API responses with batchId that groups Ids together

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | SedBatchRequest | [**SedBatchRequest**](../models/sed-batch-request) |   (optional) | Sed Batch Request

	
### Return type

[**SedBatchResponse**](../models/sed-batch-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Sed Batch Response | SedBatchResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

[[Back to top]](#) 

